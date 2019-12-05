import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '../data/Transaction';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  currTransactions:Transaction[]= [];
  private messageSource = new BehaviorSubject('first message');
  currentMessage = this.messageSource.asObservable();
  txTotal:number= 0;
  numberTxs:number=0;
  constructor() { }
  
}
