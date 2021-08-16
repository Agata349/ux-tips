import { ViewportScroller } from '@angular/common';
import { HostListener, ElementRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    this.pageYoffset = window.pageYOffset;
  }

    constructor(private scroll: ViewportScroller) { }

    ngOnInit(): void 
    {
      
    }

scrollToTop(){
  this.scroll.scrollToPosition([0,0]);
}}
