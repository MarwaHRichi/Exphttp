import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
