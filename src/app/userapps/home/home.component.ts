import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objs: any[] = [
    { id: 1, title: "ABC", count: 8 },
    { id: 6, title: "FEW", count: 2 },
    { id: 7, title: "few", count: 7 },
    { id: 9, title: "abc", count: 22 },
    { id: 5, title: "POI", count: 6 },
    { id: 8, title: "NMK", count: 12 },
    { id: 2, title: "QWE", count: 6 }
  ];

  searchCrit: string = "";

  aBool: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
