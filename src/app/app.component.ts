import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDateRangePicker';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
}
