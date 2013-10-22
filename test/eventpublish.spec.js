// Filename: eventpublish.spec.js  
// Timestamp: 2013.10.22-15:50:18 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var eventpublish = require('../eventpublish');

describe("eventpublish.add", function () {
  var epub = Object.create(eventpublish);
  epub.eventsObj = {};
  
  it("should allow you to add an event with string and function parameters", function () {
    var myfun = function () {};
    myfun.testtag = 'test';
    epub.add('newevent', myfun);
    expect( epub.eventsObj.newevent[0].testtag ).toBe( myfun.testtag );
  });

  it("should throw an error if first parameter is not a string", function () {
      expect( function () { 
        epub.add(null, function () {});
      } ).toThrow(new Error('[!!!] eventpublish.add: invalid eventName'));
  });
});

describe("eventpublish.rm", function () {
  var epub = Object.create(eventpublish);
  epub.eventsObj = {};

  it("should allow you to rm an event with string and function parameters", function () {
    var myfun = function () {};
    myfun.testtag = 'test';
    epub.add('newevent', myfun);
    epub.rm('newevent', myfun);

    expect( epub.eventsObj.newevent.length ).toBe( 0 );
  });  

  it("should throw an error if first parameter is not a string", function () {
      expect( function () { 
        epub.rm(null, function () {});
      } ).toThrow(new Error('[!!!] eventpublish.add: invalid eventName'));
  });
});

describe("eventpublish.fire", function () {
  var epub = Object.create(eventpublish);
  epub.eventsObj = {};

  it("should call functions added with the eventName given", function (done) {
    var myfun = function () { 
      expect( true ).toBe( true );
      done();
    };
    epub.add('newevent', myfun);
    epub.fire('newevent');
  });
  
  it("should call functions added with the eventName given and pass parameters given to fire method", function (done) {
    var myfun = function (param) { 
      expect( param ).toBe( 'good' );
      done();
    };
    epub.add('newevent', myfun);
    epub.fire('newevent', 'good');
  });
  
  it("should throw an error if first parameter is not a string", function () {
      expect( function () { 
        epub.fire(null, function () {});
      } ).toThrow(new Error('[!!!] eventpublish.add: invalid eventName'));
  });
});

