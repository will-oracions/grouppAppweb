import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skelleton',
  templateUrl: './skelleton.component.html',
  styleUrls: ['./skelleton.component.scss']
})
export class SkelletonComponent {
@Input() table: [];
@Input() title: string;
datas: any= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
cols: any[];
}
