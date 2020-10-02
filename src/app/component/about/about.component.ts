import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy{


  constructor() {
    console.log('constructor()');
  }

  ngOnInit(): void {
    console.log('OnInit()');
    alert('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy()');
    alert('OnDestroy');
  }

}
