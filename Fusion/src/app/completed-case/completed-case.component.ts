import { Component, OnInit } from '@angular/core';

export class ServicesType {
  type: string;
  days: number;
}
 
const SERVICESTYPES: ServicesType[] = [
  { type: 'Benefits Verification', days: 14 },
  { type: 'Prior Authorization',   days: 14 },
  { type: 'Prescription Referral', days: 14 },
  { type: 'PAP',   days: 14 },
  { type: 'Copay', days: 14  },
];

@Component({
  selector: 'app-completed-case',
  templateUrl: './completed-case.component.html',
  styleUrls: ['./completed-case.component.css']
})
export class CompletedCaseComponent implements OnInit {
  services = SERVICESTYPES;

  constructor() { }

  ngOnInit() { }

}
