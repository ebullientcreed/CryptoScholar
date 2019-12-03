import { Component, OnInit } from '@angular/core';
import{Scholarship} from '../data/Scholarship';
import { Transaction } from '../data/Transaction';
import { SharedDataService } from '../services/shared-data.service';
@Component({
  selector: 'app-browse-offers',
  templateUrl: './browse-offers.component.html',
  styleUrls: ['./browse-offers.component.css']
})
export class BrowseOffersComponent implements OnInit {
  scholarship:Scholarship[]=[];
  selectedIndex:number=undefined;
  currId:number=null;
  currVal:number;
  currTx:Transaction= new Transaction();
  constructor(private sharedDataService:SharedDataService) { }

  ngOnInit() {
    this.setItems();
  }
  setRow(_index: number) {
    this.selectedIndex = _index;
    this.currId=_index;
    this.currVal = this.scholarship[_index].id;
  }
  setItems(){
    var scholarship1= new Scholarship();
    scholarship1.id=0;
    var scholarship2= new Scholarship();
    scholarship2.id=1;
    scholarship2.name="Bitcoin Builder";

    var scholarship3= new Scholarship();
    scholarship3.id=2;
    scholarship3.name="Crypto Explorer";

    var scholarship4= new Scholarship();
    scholarship4.id=3;
    scholarship4.name="Datta's Data";
    var scholarship5= new Scholarship();
    scholarship5.id=4;
    scholarship5.name="Blockchain Networker";
    var scholarship6= new Scholarship();
    scholarship6.id=5;
    scholarship6.name="Better Bits";

    this.scholarship=[scholarship1,scholarship2,scholarship3,scholarship4,scholarship5,scholarship6];

    //scholarship1.name="Satoshi Scholar";
    /*scholarship1.value="";
    scholarship1.type;
    scholarship1.available;
    scholarship1.age;
    scholarship1.educ;
    scholarship1.citi;
    scholarship1.gpa;
    scholarship1.sat;
    scholarship1.fafsa;
    scholarship1.degree; 
    scholarship1.other;
    scholarship1.avgRed;
    scholarship1.startDate;
    scholarship1.eligibility;
    scholarship2.name;
    scholarship2.value;
    scholarship2.type;
    scholarship2.available;
    scholarship2.age;
    scholarship2.educ;
    scholarship2.citi;
    scholarship2.gpa;
    scholarship2.sat;
    scholarship2.fafsa;
    scholarship2.degree; 
    scholarship2.other;
    scholarship2.avgRed;
    scholarship2.startDate;
    scholarship2.eligibility;
    scholarship3.name;
    scholarship3.value;
    scholarship3.type;
    scholarship3.available;
    scholarship3.age;
    scholarship3.educ;
    scholarship3.citi;
    scholarship3.gpa;
    scholarship3.sat;
    scholarship3.fafsa;
    scholarship3.degree; 
    scholarship3.other;
    scholarship3.avgRed;
    scholarship3.startDate;
    scholarship3.eligibility;
    scholarship4.name;
    scholarship4.value;
    scholarship4.type;
    scholarship4.available;
    scholarship4.age;
    scholarship4.educ;
    scholarship4. citi;
    scholarship4.gpa;
    scholarship4.sat;
    scholarship4.fafsa;
    scholarship4.degree; 
    scholarship4.other;
    scholarship4.avgRed;
    scholarship4.startDate;
    scholarship4.eligibility;
    scholarship5.name;
    scholarship5.value;
    scholarship5.type;
    scholarship5.available;
    scholarship5.age;
    scholarship5.educ;
    scholarship5.citi;
    scholarship5.gpa;
    scholarship5.sat;
    scholarship5.fafsa;
    scholarship5.degree; 
    scholarship5.other;
    scholarship5.avgRed;
    scholarship5.startDate;
    scholarship5.eligibility;
    name;
    scholarship6.value;
    scholarship6.type;
    scholarship6.available;
    scholarship6.age;
    scholarship6.educ;
    scholarship6.citi;
    scholarship6.gpa;
    scholarship6.sat;
    scholarship6.fafsa;
    scholarship6.degree; 
    scholarship6.other;
    scholarship6.avgRed;
    scholarship6.startDate;
    scholarship6.eligibility;*/
  }
  addScholarship(){
    this.currTx.amount=this.scholarship[this.selectedIndex].value;
    this.currTx.redemptions=2;
    this.currTx.date=new Date(Date.now());
    this.currTx.name= this.scholarship[this.selectedIndex].name;
    this.sharedDataService.currTransactions.push(this.currTx);
  }
}
