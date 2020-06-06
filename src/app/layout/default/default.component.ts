import {Component, HostListener, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {$} from "protractor";
import {MatDrawer} from "@angular/material/sidenav";
import {timer} from "rxjs";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('drawer', {read: MatDrawer, static: false}) drawer;
  maxMarginFocusToOpenSideBar = 20;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    if (e.pageX < this.maxMarginFocusToOpenSideBar || this.drawer.opened || this.drawer.mouseover) {
      // Show the menu if mouse is within 20 pixels
      // from the left or we are hovering over it
      this.drawer.open();
      this.maxMarginFocusToOpenSideBar = 150;
      if(e.pageX > this.maxMarginFocusToOpenSideBar) this.drawer.close();
    }
  }

  sideBarClosed() {
    this.maxMarginFocusToOpenSideBar = 20;
  }
}
