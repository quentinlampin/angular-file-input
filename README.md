# angular-file-input

Minimalist file input wrapper for AngularJS


## Installation

### Bower 
```bash
    bower install --save angular-file-input
```

### Manual installation

Download the [latest archive](https://github.com/quentinlampin/angular-file-input/archive/master.tar.gz)

## Usage

Include `angular` and `angular-file-input.js` in your HMTL file.

```html
    <script src="path/to/angular.min.js"></script>
    <script src="path/to/angular-file-input.min.js"></script>
```
   
Add `angular-file-input` as a dependency to your angular module.

```js
    angular.module('myModule',['angular-file-input']);
```


create a controller which you attach the file input to.
```js
    angular.module('myModule')
        .controller('myCtrl', function(){
            this.binding = undefined;
        });
```

Add the `ng-file` attribute to your file input, the `ng-file` value being bound to a controller.
 
### Single file input

```html
    <input type="file" ng-file="myCtrl.binding">
```

### Multiple file input

```html
    <input type="file" multiple ng-file="myCtrl.binding">
```


When a user select a file in the File Dialog, `myCtrl.binding` will be bound to the file or the list of files if the `multiple` attribute is set.


### Resetting the file input

Setting `myCtrl.binding` to `undefined` resets the input file.


## Example

A 30lines example is provided in the example directory.

## License

Apache License Version 2.0, January 2004