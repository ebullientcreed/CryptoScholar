import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {InfoService} from './info.service';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class KomodoService {
  constructor(private infoService:InfoService,private http:HttpClient) { }

  getTransaction(txid) : Observable<any>{
    const APIUrl="http://localhost:4200/tx/{txid}";
    const myurl=APIUrl.replace(/{txid}/g,txid);
    var options = httpOptions;
    return this.http.get<any>(myurl,options).pipe(
      tap(_ => this.log('got transaction')),
      catchError(this.handleError<any>('got it'))
    )
  }
  postAmount(amount) : Observable<any>{
    const APIUrl="http://localhost:4200/amount/{amount}";
    const myurl=APIUrl.replace(/{amount}/g,amount);
    var options = httpOptions;
    return this.http.get<any>(myurl,options).pipe(
      tap(_ => this.log('got transaction')),
      catchError(this.handleError<any>('got amount'))
    )
  }
  getReceivedByAddress(amount,address):Observable<any>{
    const APIUrl="http://localhost:4200/amount/received";
    var options = httpOptions;
    options['params'] = new HttpParams()
      .set('address',address)
      .set('amount',amount);
      return this.http.get<any>(APIUrl,options).pipe(
        tap(_ => this.log('got transaction')),
        catchError(this.handleError<any>('got amount'))
      )
    
  }
  sendToAddress(address,amount){

  }
  getWalletInfo(){
    const APIUrl="http://localhost:8080/getwalletinfo";
    var options = httpOptions;
    return this.http.get<any>(APIUrl,options).pipe(
      tap(_ => this.log('got transaction')),
      catchError(this.handleError<any>('got it'))
    )
  }
  getNetworkInfo(){
    const APIUrl="/getnetworkinfo";
    var options = httpOptions;
    return this.http.get<any>(APIUrl,options).pipe(
      tap(_ => this.log('got transaction')),
      catchError(this.handleError<any>('got it'))
    )
  }



  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable <T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return throwError(
        "An error occurred with this request"
      )
    }
  }
  private log(message: string){
    this.infoService.add('KomodoService'+message)
  }
}
