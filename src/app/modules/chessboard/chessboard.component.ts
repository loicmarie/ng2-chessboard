/// <reference path="./chessboard.d.ts" />
import { Component, Input, Output, OnInit, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng2-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  board: any;

  private _position:      any     = 'start';
  private _orientation:   Boolean = true;
  private _showNotation:  Boolean = true;
  private _draggable:     Boolean = false;
  private _dropOffBoard:  string  = 'snapback';
  private _pieceTheme:    any     = 'img/chesspieces/wikipedia/{piece}.png';
  private _moveSpeed:     any     = 200;
  private _snapbackSpeed: any     = 500;
  private _snapSpeed:     any     = 100;
  private _sparePieces:   Boolean = false;

  @Input() animation: Boolean = true;
  @Output() animationChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() {}

  // PARAMETERS

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if (this.board) this.board.resize(event);
  }

  @Input()
  set position(value: any) {
    this._position = value;
    if (this.board) this.board.position(value, this.animation);
  }

  @Input()
  set orientation(value: Boolean) {
    this._orientation = value;
    if(this.board) this.board.orientation(value ? 'white' : 'black');
    this.orientationChange.emit(this._orientation);
  }

  @Input()
  set showNotation(value: Boolean) {
    this._showNotation = value;
    if(this.board) this.load();
    this.showNotationChange.emit(this._showNotation);
  }

  @Input()
  set draggable(value: Boolean) {
    this._draggable = value;
    if(this.board) this.load();
    this.draggableChange.emit(this._draggable);
  }

  @Input()
  set dropOffBoard(value: string) {
    this._dropOffBoard = value;
    if(this.board) this.load();
    this.dropOffBoardChange.emit(this._dropOffBoard);
  }

  @Input()
  set pieceTheme(value: any) {
    this._pieceTheme = value instanceof Function ? value() : value;
    if(this.board) this.load();
    this.pieceThemeChange.emit(this._pieceTheme);
  }

  @Input()
  set moveSpeed(value: any) {
    this._moveSpeed = value;
    if(this.board) this.load();
    this.moveSpeedChange.emit(this._moveSpeed);
  }

  @Input()
  set snapbackSpeed(value: any) {
    this._snapbackSpeed = value;
    if(this.board) this.load();
    this.snapbackSpeedChange.emit(this._snapbackSpeed);
  }

  @Input()
  set snapSpeed(value: any) {
    this._snapSpeed = value;
    if(this.board) this.load();
    this.snapSpeedChange.emit(this._snapSpeed);
  }

  @Input()
  set sparePieces(value: Boolean) {
    this._sparePieces = value;
    if(this.board) this.load();
    this.sparePiecesChange.emit(this._sparePieces);
  }

  get position():      any     { return this._position;      }
  get orientation():   Boolean { return this._orientation;   }
  get showNotation():  Boolean { return this._showNotation;  }
  get draggable():     Boolean { return this._draggable;     }
  get dropOffBoard():  string  { return this._dropOffBoard;  }
  get pieceTheme():    any     { return this._pieceTheme;    }
  get moveSpeed():     any     { return this._moveSpeed;     }
  get snapbackSpeed(): any     { return this._snapbackSpeed; }
  get snapSpeed():     any     { return this._snapSpeed;     }
  get sparePieces():   Boolean { return this._sparePieces;   }

  @Output() positionChange:      EventEmitter<any>     = new EventEmitter<any>();
  @Output() orientationChange:   EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() showNotationChange:  EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() draggableChange:     EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() dropOffBoardChange:  EventEmitter<string>  = new EventEmitter<string>();
  @Output() pieceThemeChange:    EventEmitter<any>     = new EventEmitter<any>();
  @Output() moveSpeedChange:     EventEmitter<any>     = new EventEmitter<any>();
  @Output() snapbackSpeedChange: EventEmitter<any>     = new EventEmitter<any>();
  @Output() snapSpeedChange:     EventEmitter<any>     = new EventEmitter<any>();
  @Output() sparePiecesChange:   EventEmitter<Boolean> = new EventEmitter<Boolean>();

  // METHODS

  public clear() {
    this.board.clear(this.animation);
  }

  public move(notation: string) {
    this.board.move(notation);
  }

  // EVENTS

  @Output() change:      EventEmitter<Object> = new EventEmitter<Object>();
  @Output() dragStart:   EventEmitter<Object> = new EventEmitter<Object>();
  @Output() dragMove:    EventEmitter<Object> = new EventEmitter<Object>();
  @Output() drop:        EventEmitter<Object> = new EventEmitter<Object>();
  @Output() snapbackEnd: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() moveEnd:     EventEmitter<Object> = new EventEmitter<Object>();

  private onChangeHandler(oldPos: any, newPos: any) {
    this.change.emit({oldPos, newPos});
  }

  private onDragStart(source: string, piece: string, position: any, orientation: string) {
    this.dragStart.emit({source, piece, position, orientation});
  }

  private onDragMove(newLocation: any, oldLocation: any, source: string, piece: string, position: any, orientation: string) {
    this.dragMove.emit({newLocation, oldLocation, source, piece, position, orientation});
  }

  private onDrop(source: string, target: string, piece: string, newPos: any, oldPos: any, orientation: string) {
    this._position = newPos;
    this.positionChange.emit(this._position);
    this.drop.emit({source, target, piece, newPos, oldPos, orientation});
  }

  private onSnapbackEnd(piece: string, square: string, position: any, orientation: string) {
    this.snapbackEnd.emit({piece, square, position, orientation});
  }

  private onMoveEnd(oldPos: any, newPos: any) {
    this._position = newPos;
    this.positionChange.emit(this._position);
    this.moveEnd.emit({oldPos, newPos});
  }

  private load() {
    this.board = ChessBoard('ng2-board', {
      'position': this._position,
      'orientation': this._orientation ? 'white' : 'black',
      'showNotation': this._showNotation,
      'draggable': this._draggable,
      'dropOffBoard': this._dropOffBoard,
      'pieceTheme': this._pieceTheme,
      'moveSpeed': this._moveSpeed,
      'snapbackSpeed': this._snapbackSpeed,
      'snapSpeed': this._snapSpeed,
      'sparePieces': this._sparePieces,

      'onDragStart': this.onDragStart.bind(this),
      'onChange': this.onChangeHandler.bind(this),
      'onDragMove': this.onDragMove.bind(this),
      'onDrop': this.onDrop.bind(this),
      'onSnapbackEnd': this.onSnapbackEnd.bind(this),
      'onMoveEnd': this.onMoveEnd.bind(this)
    });
  }

  ngOnInit() {
    this.load();
  }

}
