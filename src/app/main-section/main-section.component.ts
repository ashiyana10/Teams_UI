import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {


  teamName: string | null = null;
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('main');
  }

}
