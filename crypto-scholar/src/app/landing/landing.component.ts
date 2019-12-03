import { Component, OnInit } from '@angular/core';
import { KomodoService } from '../services/komodo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private komodoService:KomodoService,private http:HttpClient) { }

  ngOnInit() {
    this.komodoService.getWalletInfo().subscribe(wallet=>{
      console.log(JSON.stringify(wallet));
    });
  }

}
