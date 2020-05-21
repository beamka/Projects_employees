import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {
  msg : string;
  private activatedRoute: ActivatedRoute;

  constructor(private route: ActivatedRoute) {
    this.activatedRoute = route;
    //this.msg = route.snapshot.params['msg'];
    this.msg = this.getMsg();
  }

  getMsg(){
    return this.activatedRoute.snapshot.params['msg'];
  }

  ngOnInit(): void {
  }

}
