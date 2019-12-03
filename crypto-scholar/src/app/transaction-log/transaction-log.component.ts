import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Scholarship } from '../data/Scholarship';
import { Transaction } from '../data/Transaction';

@Component({
  selector: 'app-transaction-log',
  templateUrl: './transaction-log.component.html',
  styleUrls: ['./transaction-log.component.css']
})
export class TransactionLogComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) { }
  txs:Transaction[]=this.sharedDataService.currTransactions;
  selectedIndex:number=-1;
  currId:number=null;
  currVal:number;
  ngOnInit() {
  }
  setRow(_index: number) {
    this.selectedIndex = _index;
    this.currId=_index;
    //this.currVal = this.txs[_index];
  }

}
