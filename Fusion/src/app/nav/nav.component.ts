import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  body = document.getElementsByTagName('body')[0];
  displaySideNav = {'width': "0"};
  items: Array<string> = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
  open = false;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.open = !this.open;
    
    if (this.open) {
      this.body.style.marginLeft = '50px';
      this.displaySideNav = {'width': '50px'};
    } else {    
      document.getElementsByTagName('body')[0].removeAttribute('style');
      this.displaySideNav = {'width': '0'};
    }
  }
  
  toggleDropdown($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    //this.status.isopen = !this.status.isopen;
  }
}
