import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Name', 'Dpt/CC', 'Room', 'Telephone', 'Extension', 'Email'],
          dataRows: [
              ['Dakota Rice', '10048270', '', '+1 976 67890', '', 'jealexander'],
              ['Dakota Rice', '10048270', '', '+1 976 67890', '', 'jealexander'],
              ['Dakota Rice', '10048270', '', '+1 976 67890', '', 'jealexander'],
              ['Dakota Rice', '10048270', '', '+1 976 67890', '', 'jealexander'],
              ['Dakota Rice', '10048270', '', '+1 976 67890', '', 'jealexander'],
              ['Dakota Rice', '10048270', '', '+1 976 67890', '', 'jealexander'],
          ]
      };
  }

}
