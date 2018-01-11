import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng2-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  board: any;

  private _position: any = 'start';
  private _orientation: Boolean = true;
  private _showNotation: Boolean = true;
  private _draggable: Boolean = false;
  private _dropOffBoard: string = 'snapback';
  private _pieceTheme: any = 'img/chesspieces/wikipedia/{piece}.png';

  @Input() animation: Boolean = true;
  @Output() animationChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() {}

  @Input()
  set position(value: any) {
    this._position = value;
    if (this.board) this.board.position(value, this.animation);
  }

  @Input()
  set orientation(value: Boolean) {
    this._orientation = value;
    if(this.board) this.board.orientation(value ? 'white' : 'black');
  }

  @Input()
  set showNotation(value: Boolean) {
    this._showNotation = value;
    if(this.board) this.load();
  }

  @Input()
  set draggable(value: Boolean) {
    this._draggable = value;
    if(this.board) this.load();
  }

  @Input()
  set dropOffBoard(value: string) {
    this._dropOffBoard = value;
    if(this.board) this.load();
  }

  @Input()
  set pieceTheme(value: any) {
    this._pieceTheme = value instanceof Function ? value() : value;
    if(this.board) this.load();
  }

  get position():     any     { return this._position;     }
  get orientation():  Boolean { return this._orientation;  }
  get showNotation(): Boolean { return this._showNotation; }
  get draggable():    Boolean { return this._draggable;    }
  get dropOffBoard(): string  { return this._dropOffBoard; }
  get pieceTheme():   any     { return this._pieceTheme;   }

  @Output() positionChange:     EventEmitter<any>     = new EventEmitter<any>();
  @Output() orientationChange:  EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() showNotationChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() draggableChange:    EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() dropOffBoardChange: EventEmitter<string>  = new EventEmitter<string>();
  @Output() pieceThemeChange:   EventEmitter<any>     = new EventEmitter<any>();

  // EVENTS

  @Output() change:      EventEmitter<Object> = new EventEmitter<Object>();
  @Output() dragStart:   EventEmitter<Object> = new EventEmitter<Object>();
  @Output() dragMove:    EventEmitter<Object> = new EventEmitter<Object>();
  @Output() drop:        EventEmitter<Object> = new EventEmitter<Object>();
  @Output() snapbackEnd: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() moveEnd:     EventEmitter<Object> = new EventEmitter<Object>();

  onChangeHandler(oldPos: any, newPos: any) {
    this.change.emit({oldPos, newPos});
  }

  onDragStart(source: string, piece: string, position: any, orientation: string) {
    this.dragStart.emit({source, piece, position, orientation});
  }

  onDragMove(newLocation: any, oldLocation: any, source: string, piece: string, position: any, orientation: string) {
    this.dragMove.emit({newLocation, oldLocation, source, piece, position, orientation});
  }

  onDrop(source: string, target: string, piece: string, newPos: any, oldPos: any, orientation: string) {
    this._position = newPos;
    this.positionChange.emit(this._position);
    this.drop.emit({source, target, piece, newPos, oldPos, orientation});
  }

  onSnapbackEnd(piece: string, square: string, position: any, orientation: string) {
    this.snapbackEnd.emit({piece, square, position, orientation});
  }

  onMoveEnd(oldPos: any, newPos: any) {
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
