import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  Content: string | null = null;

  constructor(private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.Content = this.route.snapshot.paramMap.get('Content');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
