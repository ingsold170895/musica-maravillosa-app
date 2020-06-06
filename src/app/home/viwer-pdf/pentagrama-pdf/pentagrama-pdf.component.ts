import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pentagrama-pdf',
  templateUrl: './pentagrama-pdf.component.html',
  styleUrls: ['./pentagrama-pdf.component.css']
})
export class PentagramaPdfComponent implements OnInit {
  @Input() sourcePDF: string;
  constructor() { }

  ngOnInit() {
  }

  // findInput  password
}
