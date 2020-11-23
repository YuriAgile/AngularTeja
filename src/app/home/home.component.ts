import { Component, OnInit, ViewChildren } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  clearForm(){
    var fullname = <HTMLInputElement>document.getElementById("fullname");
    var firstname = <HTMLInputElement>document.getElementById("firstname");
    var lastname = <HTMLInputElement>document.getElementById("lastname");
    var handle = <HTMLInputElement>document.getElementById("handle");
    var personalnumber = <HTMLInputElement>document.getElementById("personalnumber");
    var telephone = <HTMLInputElement>document.getElementById("telephone");
    var costcenter = <HTMLInputElement>document.getElementById("costcenter");
    var numericlocation = <HTMLInputElement>document.getElementById("numericlocation");
    var country = <HTMLInputElement>document.getElementById("country");
    var state = <HTMLInputElement>document.getElementById("state");

    fullname.value = '';
    firstname.value = '';
    lastname.value = '';
    handle.value = '';
    personalnumber.value = '';
    telephone.value = '';
    costcenter.value = '';
    numericlocation.value = '';
    numericlocation.value = '';
    country.value = '';
    state.value = '';
  }
}
