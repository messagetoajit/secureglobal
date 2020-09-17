import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.sass']
})
export class CalenderComponent {

  events = [
    {title: 'Ajit', date: '2020-09-09'},
    {title: 'Navina', date: '2020-09-17'},
    {title: 'Bhagyalaxmi', date: '2020-07-27'}
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.events
  };
}
