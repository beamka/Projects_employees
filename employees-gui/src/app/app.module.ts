import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { CardEComponent } from './card-e/card-e.component';
import { CardPComponent } from './card-p/card-p.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ListEComponent } from './list-e/list-e.component';
import { ListPComponent } from './list-p/list-p.component';

import { EmployeeService } from './employee.service';
import { ProjectService } from './project.service';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardEComponent,
    CardPComponent,
    StartMenuComponent,
    ListEComponent,
    ListPComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "start-menu", component: StartMenuComponent},
      {path: "card-e-list", component: ListEComponent},
      {path: "card-p-list", component: ListPComponent},
      {path: "card-e/:employee", component: CardEComponent},
      {path: "card-p", component: CardPComponent}
    ]),
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService,ProjectService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
