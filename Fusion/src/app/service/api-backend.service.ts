import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Patient }    from '../model/patient';

@Injectable()
export class ApiBackendService {

  private patientUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';

  constructor (private http: Http) {}

  getPatients(): Promise<Patient[]> {
    return this.http
            .get(this.patientUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
 
  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}