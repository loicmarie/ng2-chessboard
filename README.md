# Angular 2 Chessboard Component
For more information about the wrapped library, and more details about parameters, methods and events, see ChessboardJS official documentation

## Installation

### Using NPM
```
  npm i ng2-chessboard --save
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
