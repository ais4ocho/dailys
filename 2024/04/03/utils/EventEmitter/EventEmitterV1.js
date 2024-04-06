class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callbackFunc) {
    if (this.events[event]) {
      this.events[event].push(callbackFunc);
    } else {
      // In interview just stored as kv w/ string initially, now initially
      // store as array to allow iteration through callback functions
      // on same event
      this.events[event] = [callbackFunc];
    }
  }

  off(event, callbackFunc) {
    if (this.events[event]) {
      const index = this.events[event].indexOf(callbackFunc);
      // Had to add the -1 check here for not found
      if (index != -1) {
        // Referenced possibly using pop but pop just removes last item
        // Seems like splice was the best fit here to cut one out
        this.events[event].splice(index, 1);
      }
    }
  }

  once(event, callbackFunc) {
    // Learned that creating a function pointer inherits "this" from parent
    // First time through was making singleCallbackFunc w/ function
    // keyword and "this.off" was undefined
    const singleCallbackFunc = () => {
      callbackFunc(event);
      this.off(event, singleCallbackFunc);
    };
    this.on(event, singleCallbackFunc);
  }

  emit(event) {
    if (this.events[event]) {
      // Found out had to copy the array because depending on order,
      // calling off while iterating would result in some of the
      // callback functions not being executed
      const callbacks = [...this.events[event]];
      callbacks.forEach((callbackFunc) => {
        // Expiramenting with passing the event string for use
        // in the callback function
        callbackFunc(event);
      });
    }
  }
}

module.exports = EventEmitter;
