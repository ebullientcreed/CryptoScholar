import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Scholarship } from '../data/Scholarship';
import { Transaction } from '../data/Transaction';
import { KomodoService } from '../services/komodo.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-transaction-log',
  templateUrl: './transaction-log.component.html',
  styleUrls: ['./transaction-log.component.css']
})
export class TransactionLogComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService,private komodoService:KomodoService) { }
  txs:Transaction[]=this.sharedDataService.currTransactions;
  selectedIndex:number=-1;
  currId:number=null;
  currVal:number;
  currentBalance:number=0;
  walletBalance:number=0;
  walletHeight:number=0;
  currentHeight:number=0;
  
  
  
  ngOnInit() {
    this.setWalletInfo();
    this.currentBalance=this.sharedDataService.txTotal;
    this.currentHeight=this.sharedDataService.numberTxs;
  }
  setCurrBalance(){

  }
  setWalletInfo(){
    
    this.komodoService.getWalletInfo().subscribe(wallet=>{
      console.log(JSON.stringify(wallet));
      console.log("This is the result"+JSON.stringify(wallet));
      this.walletBalance=wallet[0].result.balance;
      this.walletHeight=wallet[0].result.txCount;
    });

  }
  
  setRow(_index: number) {
    this.selectedIndex = _index;
    this.currId=_index;
    //this.currVal = this.txs[_index];
  }

}
