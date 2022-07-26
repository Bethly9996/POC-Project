import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

export class Encounters {
  constructor(
    encounterDateTime: string,
    encounterType: string,
    form: string,
    provider: string,
    location: string,
    uuid?: string
  ) {}
}

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
})
export class EncountersComponent implements OnInit {
  encounter: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEncounters();
  }

  onFetchEncounters() {
    this.fetchEncounters();
  }
  private fetchEncounters() {
    this.http
      .get<any>(
        'https://ngx.ampath.or.ke/amrs/ws/rest/v1/encounter?patient=dd8d24e3-49ae-4490-a888-4407bdbd981a&concept=18316c68-b5f9-4986-b76d-9975cd0ebe31&fromdate=2016-10-08&v=default&limit=100'
      )
      .pipe(
        map((res) => {
          const encounters = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              encounters.push({ ...res[key], uuid: key });
            }
          }
          return encounters;
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.encounter = res;
      });
  }
}
