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
  constructor() { }
  
}
