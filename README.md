eventpublish
============
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

An object through which callbacks may be added and called through publish/subscribe model.

It associates events strings rather than named properties, for example `'EventMaximize'` rather than `Event.Maximize`.

---------------------------------------------------------
#### <a id="install"></a>Install:

eventpublish may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install eventpublish
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/eventpublish.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------
#### <a id="get-started">GET STARTED:

Create a function before starting.

```
var myfun = function (o) { console.log('help ' + o); }
```

1. Add a functions with an associated event name.

```javascript
eventpublish.add('newevent', myfun);
```

2. Call all functions assocated with event and pass parameters to them.

```javascript
eventpublish.fire('newevent', 'me!'); // help me!
```

2. Remove functions from object.

```javascript
eventpublish.rm('newevent', myfun);
eventpublish.fire('newevent'); // [nothing happens]
```

---------------------------------------------------------
#### <a id="license">License:

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
