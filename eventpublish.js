// Filename: eventpublish.js  
// Timestamp: 2013.10.22-15:42:46 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: incrnum.js
//
//
// fsEvents.bindEvent('test', testFn);
// fsEvents.eventsObj.test[0].oname // "test0"
// fsEvents.unbindEvent('test', testFn);
// fsEvents.eventsObj.test[0].oname // runtime error undefined


var incrnum = require('incrnum');

var eventpublish = ((typeof module === 'object') ? module : {}).exports = {

  eventsObj : {},

  eventCheck : function (eventName) {
    if (typeof eventName !== 'string') throw new Error('[!!!] eventpublish.add: invalid eventName');    
  },

  add : function (eventName, fn) {
    var eventsObj = this.eventsObj;

    this.eventCheck(eventName);

    if (!Array.isArray(eventsObj[eventName])) {
      eventsObj[eventName] = [];
    }

    if (typeof fn === 'function') {
      fn.oname = eventName + incrnum;
      eventsObj[eventName].push(fn);
    }
  },

  fire : function (eventName, args) {
    var eventsObj = this.eventsObj, 
        eventArr = eventsObj[eventName];

    this.eventCheck(eventName);

    if (Array.isArray(eventArr)) {
      eventArr.map(function (eventFn) {
        eventFn(args);
      });
    }
  },

  rm : function (eventName, fn) {
    var eventsObj = this.eventsObj, 
        eventArr = eventsObj[eventName], 
        oname;

    this.eventCheck(eventName);

    if (Array.isArray(eventArr) && typeof fn === 'function') {
      oname =  fn.oname;
      this.eventsObj[eventName] = eventArr.filter(function (eventFn) {
        return eventFn.oname !== oname;
      });
    }
  }
};


