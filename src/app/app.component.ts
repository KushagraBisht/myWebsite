import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myPersonalWebsite';
  
  constructor() {}

  }
