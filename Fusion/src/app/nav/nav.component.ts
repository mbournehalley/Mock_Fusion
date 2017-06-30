import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  body = document.getElementsByTagName('body')[0];
  displaySideNav = {'width': "0"};
  open = false;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.open = (this.open) ? false : true;

    if (this.open) {
      console.log('1' + this.open);
      this.body.style.marginLeft = '50px';
      this.displaySideNav = {'width': '50px'};
    } else {    
      document.getElementsByTagName('body')[0].removeAttribute('style');
      this.displaySideNav = {'width': '0'};
    }
  }
}
