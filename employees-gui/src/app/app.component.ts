import { Component, ViewEncapsulation } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom
})

export class AppComponent {
  title = 'employees-gui';
}
