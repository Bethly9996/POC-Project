import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientinfoComponent implements OnInit {

  searchTerm: any;
  results: any = [];

  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private dataService: DataService,
    private cookieService: CookieService
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
    
  }

  getCookie() {
    this.cookieService.get('jsessionId');
  }
  postList():void
 {
  this.dataService.getAllPosts().subscribe((res) => {
    this.POSTS = res;
    console.log(this.POSTS);
 })
 }
onTableDataChange(event:any) {
  this.page = event;
  this.postList();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.postList();
}

}
