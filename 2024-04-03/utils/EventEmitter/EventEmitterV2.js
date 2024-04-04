// Implement Set rather than KV pair to naturally protect against dupe event keys
// misunderstood benefit of Set, but can use it instead of the array to store
// the callback functions - naturally dedup and easy access to add/delete methods
// rather than using splice

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callbackFunc) {
    if (event in this.events) {
      this.events[event].add(callbackFunc);
    } else {
      this.events[event] = new Set([callbackFunc]);
    }
  }

  off(event, callbackFunc) {
    if (this.events[event]) {
      this.events[event].delete(callbackFunc);
    }
  }

  once(event, callbackFunc) {
    // Did not have args passed here after testing
    const singleCallbackFunc = (...args) => {
      callbackFunc(...args);
      this.off(event, singleCallbackFunc);
    };
    this.on(event, singleCallbackFunc);
  }

  // Think I only need to add args to the emit, on/off shouldn't matter
  emit(event, ...args) {
    if (this.events[event]) {
      const callbacks = [...this.events[event]];
      callbacks.forEach((callbackFunc) => {
        callbackFunc(...args);
      });
    }
  }
}

module.exports = EventEmitter;
