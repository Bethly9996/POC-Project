import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})


export class PatientinfoComponent implements OnInit {
  @Input() result = '';

  uuid:string;


  constructor( private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.uuid = params['uuid']
    })
    
  }


}


