import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessboardComponent } from './chessboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ChessboardComponent
  ],
  declarations: [ChessboardComponent]
})
export class ChessboardModule { }
