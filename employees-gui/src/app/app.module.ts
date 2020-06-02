import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from "@angular/material/select";

import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardEComponent } from './card-e/card-e.component';
import { CardPComponent } from './card-p/card-p.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ListEComponent } from './list-e/list-e.component';
import { ListPComponent } from './list-p/list-p.component';
import { NewEComponent } from './new-e/new-e.component';
import { NewPComponent } from './new-p/new-p.component';

import { EmployeeService } from './employee.service';
import { ProjectService } from './project.service';

import {createCustomElement} from '@angular/elements';



@NgModule({
  declarations: [
    AppComponent,
    //ProjectsEmployeesComponent,
    ToolbarComponent,
    CardEComponent,
    CardPComponent,
    StartMenuComponent,
    ListEComponent,
    ListPComponent,
    NewEComponent,
    NewPComponent
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
    MatRadioModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "start-menu", component: StartMenuComponent},
      {path: "start-menu/:msg", component: StartMenuComponent},
      {path: "card-e-list", component: ListEComponent},
      {path: "card-p-list", component: ListPComponent},
      {path: "card-e/:employee", component: CardEComponent},
      {path: "card-p/:project", component: CardPComponent},
      {path: "app-new-e/:flagEdit", component: NewEComponent},
      {path: "app-new-p/:flagEdit", component: NewPComponent}
    ]),
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [EmployeeService,ProjectService,DataService],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(){
    const custom = createCustomElement(AppComponent,{injector: this.injector});
    customElements.define('app-employees-gui', custom);

  }
}
