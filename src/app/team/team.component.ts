import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamServiceService } from '../team-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  users !:any;
  constructor(private router : Router, private list : TeamServiceService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.List();
  }
  List()
  {
    this.list.List()
    .subscribe(res=>{
      this.users=res;

    })
  }
}
