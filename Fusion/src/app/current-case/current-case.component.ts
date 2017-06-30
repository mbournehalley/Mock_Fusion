import { Component, OnInit }  from '@angular/core';

import { ApiBackendService }  from '../service/api-backend.service'; 
import { PaginationService }  from '../service/pagination.service';
import { Patient }            from '../model/patient';

import * as _ from 'underscore';

@Component({
  selector: 'app-current-case',
  providers: [ApiBackendService, PaginationService],
  templateUrl: './current-case.component.html',
  styleUrls: ['./current-case.component.css']
})
export class CurrentCaseComponent implements OnInit {
  errorMessage: string;
  pagedItems: any[];
  pager: any = {};
  patients: Patient[]; 

  constructor (
    private apiBackendService: ApiBackendService, 
    private paginationService: PaginationService
  ) {}

  ngOnInit() { this.getPatients(); }
 
  getPatients() {
    this.apiBackendService
      .getPatients()
      .then(patients => {
          this.patients = patients;
          this.setPage(1);
        },
        error => this.errorMessage = <any>error
      );
  }
  
  setPage(page: number) {

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
 
    // get pager object from service
    this.pager = this.paginationService.getPager(this.patients.length, page);

    // get current page of items
    this.pagedItems = this.patients.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  getDisplayText(service: string) {
    switch (service) {
      case 'BV':
        return 'd-block bg-success';
      case 'PA':
        return 'd-block bg-warning';
      case 'CoPay':
        return 'd-block bg-primary';
      case 'PAP':
        return 'd-block bg-info';
      case 'PR':
        return 'd-block bg-primary';
    }
  }
}
