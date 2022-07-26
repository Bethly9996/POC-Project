import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateComponent } from '../create/create.component';

const searchUrl =
  'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient?q=Test&v=default&limit=100';
const encounterUrl =
  'https://ngx.ampath.or.ke/amrs/ws/rest/v1/encounter?patient=dd8d24e3-49ae-4490-a888-4407bdbd981a&concept=18316c68-b5f9-4986-b76d-9975cd0ebe31&fromdate=2016-10-08&v=default&limit=1';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  patientData = new EventEmitter<CreateComponent>();

  send(patientDataObj: CreateComponent) {
    this.patientData.emit(patientDataObj);
  }

  private searchUrl =
    'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient?q=Test&v=default&limit=100';

  private encounterUrl =
    'https://ngx.ampath.or.ke/amrs/ws/rest/v1/encounter?patient=dd8d24e3-49ae-4490-a888-4407bdbd981a&concept=18316c68-b5f9-4986-b76d-9975cd0ebe31&fromdate=2016-10-08&v=default&limit=1';

  constructor(private http: HttpClient) {}

  search(data: any) {
    return this.http.get(this.searchUrl, {
      params: {
        q: 'Search Query',
      },
    });
  }
  getAllPosts(): Observable<any> {
    return this.http.get(searchUrl);
  }

  // getPatient(): Observable<>

  // getPatientInfo(id: number | string) {
  //   return this.
  // }
}
