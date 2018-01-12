# Angular 2 Chessboard Component

Component wrapping the chessboardJS library. See [online documentation](https://loicmarie.github.io/ng2-chessboard/).

For more information about the wrapped library, and more details about parameters, methods and events, see [ChessboardJS official documentation](http://chessboardjs.com)

## Installation

### Using NPM
```
  npm i ng2-chessboard --save
```

## Usage

#### Basic
```html
<ng2-chessboard [(position)]="position"></ng2-chessboard>
```

#### Extended
```html
<ng2-chessboard #board
  [(position)]="position"
  [orientation]="orientation"
  [showNotation]="showNotation"
  [draggable]="draggable"
  [animation]="animation"
  (change)="onChange($event)"
  (dragStart)="onDragStart($event)"
  (dragMove)="onDragMove($event)"
  (drop)="onDrop($event)"
  (snapbackEnd)="onSnapbackEnd($event)"
  (moveEnd)="onMoveEnd($event)">
</ng2-chessboard>
```

## Variables
* `Input()/Output()` `position` (`String` or `Object`)
* `Input()` `orientation` (`Boolean`)
* `Input()` `showNotation` (`Boolean`)
* `Input()` `draggable` (`Boolean`)
* `Input()` `dropOffBoard` (`String`)
* `Input()` `pieceTheme` (`String` or `Function`)
* `Input()` `moveSpeed` (`Number`)
* `Input()` `snapbackSpeed` (`Number`)
* `Input()` `snapSpeed` (`Number`)
* `Input()` `sparePieces` (`Boolean`)

## Methods

* `clear()`
* `move(String)`

## Events
* `Output()` `change`
* `Output()` `dragStart`
* `Output()` `dragMove`
* `Output()` `drop`
* `Output()` `snapbackEnd`
* `Output()` `moveEnd`
