import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {

  }
  clearForm(){
    var servicename = <HTMLInputElement>document.getElementById("servicename");
    var description = <HTMLInputElement>document.getElementById("description");
    var servicehandle = <HTMLInputElement>document.getElementById("servicehandle");
    var location = <HTMLInputElement>document.getElementById("location");
    var city = <HTMLInputElement>document.getElementById("city");
    var state = <HTMLInputElement>document.getElementById("state");
    var telephone = <HTMLInputElement>document.getElementById("telephone");
    var country = <HTMLInputElement>document.getElementById("country");

    servicename.value = '';
    description.value = '';
    location.value = '';
    servicehandle.value = '';
    city.value = '';
    telephone.value = '';
    country.value = '';
    state.value = '';
  }
}
