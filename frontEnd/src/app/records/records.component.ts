import { Component, OnInit } from '@angular/core';
// import {Row} from '../records/record.model';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
   
})
export class RecordsComponent implements OnInit {
  

  recordsData = [
    {name:'Lukas Peters'        , age: '21' , gender:'Male'   , country:'UK'             },
    {name:'Maria Lukacova'      , age: '33' , gender:'Female' , country:'Czech Republic' },
    {name:'Karolina Feherpataky' , age:"29" , gender:'Female' , country:'Hungary'        },
    {name:'Lukas Smolny'        , age: "36" , gender:'Male'   , country:'Poland'          }
  ]

  console = console;

  constructor() {}

  ngOnInit(): void {}
}

// export class RecordsTable {

