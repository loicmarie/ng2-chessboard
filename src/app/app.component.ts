import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  position: any = 'start';
  orientation: Boolean = true;
  showNotation: Boolean = true;
  draggable: Boolean = true;
  animation: Boolean = true;
}
