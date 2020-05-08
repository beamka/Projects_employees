import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {
  msg : string;

  constructor(private route: ActivatedRoute) {
    this.msg = route.snapshot.params['msg'];
  }

  ngOnInit(): void {
  }

}
