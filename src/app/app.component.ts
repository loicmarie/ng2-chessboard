import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  position: any = 'start';

  change(pos: string) {
    this.position = pos;
  }

  ngAfterViewInit() {
  }
}
