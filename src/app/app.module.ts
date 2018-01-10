import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChessboardModule } from './modules/chessboard/chessboard.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChessboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
