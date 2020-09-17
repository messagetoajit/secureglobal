import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './component/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { CalenderComponent } from './component/calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

FullCalendarModule.registerPlugins([dayGridPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
