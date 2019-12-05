import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Scholarship } from '../data/Scholarship';
import { Transaction } from '../data/Transaction';
import { KomodoService } from '../services/komodo.service';

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
  
  ngOnInit() {
    this.komodoService.getWalletInfo().subscribe(wallet=>{
      console.log(JSON.stringify(wallet));
    });
  }
  setCurrBalance(){

  }
  setRow(_index: number) {
    this.selectedIndex = _index;
    this.currId=_index;
    //this.currVal = this.txs[_index];
  }

}
