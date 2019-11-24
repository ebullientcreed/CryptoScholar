import { Component, OnInit } from '@angular/core';
import { KomodoService } from 'src/services/komodo.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private komodoService:KomodoService,private http:HttpClient) { }
  ngOnInit() {
    this.komodoService.getWalletInfo().subscribe(wallet=>{
      console.log(JSON.stringify(wallet));
    });
  }

}
