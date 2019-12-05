import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedDataService:SharedDataService) { }
  walletBalanceH:number=this.sharedDataService.txTotal;

  ngOnInit() {
  }

}
