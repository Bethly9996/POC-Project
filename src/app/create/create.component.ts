import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  searchTerm: any;
  results: any = [];

  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private dataService: DataService,
    private cookieService: CookieService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  onSubmit() {
    //call data service
    this.dataService.search(this.searchTerm).subscribe((res: any) => {
      if (res) {
        this.results = res.results;
        console.log(res);
      }
    });
  }
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.results = param.get('uuid');
    });
  }

  getCookie() {
    this.cookieService.get('jsessionId');
  }
  postList(): void {
    this.dataService.getAllPosts().subscribe((res) => {
      this.POSTS = res;
      console.log(this.POSTS);
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }
  displayInfo(results: any) {
    this.route.navigate(['/patientinfo']);
  }
  navigateToPatientInfo(patientUUID: string) {
    this.route.navigate(['/PatientInfo'], {
      queryParams: { uuid: patientUUID },
    });
  }
}
