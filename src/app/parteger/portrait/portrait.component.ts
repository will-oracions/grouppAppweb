import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderPrintData } from 'src/app/demo/interface/headerPrintData';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent {

    today =  new Date();
    headerPrintData: HeaderPrintData = new HeaderPrintData();

    @Input() titlePage: string;

    @Input() tableHeaders: any[];
    @Input() tableRows: any[];


   constructor(){}

   ngOnInit() {
   }



   displayValue(row: any, dataKey: string){
     let keys = dataKey.split('.');
      let value = null;
     if(keys.length > 1){
       let object = row[keys[0]]
       value =  object[keys[1]];
     }else{
       value =  row[dataKey];
     }
     return value;
   }
   

}
