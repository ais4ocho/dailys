class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(event, callback_func) {
        if (this.events[event]) {
            this.events[event].push(callback_func)
        } else {
            this.events[event] = [callback_func]
        }
    }

    off(event, callback_func) {
        if (this.events[event]) {
            const index = this.events[event].indexOf(callback_func)
            if(index !== -1) {
                this.events[event].splice(index, 1)
            }
        }
    }

    once(event, callback_func) {
        function once_callback_func() {
            callback_func()
            this.off(event,once_callback_func)
        }
        this.on(event,once_callback_func)
    }

    emit(event) {
        if (event in this.events) {
            this.events[event].forEach((func) => func())
        }
    }
}

ee = new EventEmitter()

function flagTransfer() {
    console.log("Transfer Flagged")
}

function dupeTransfer() {
    console.log("Transfer Duplicated")
}

function onceTransfer() {
    console.log("Transfer Flagged Once")
}

console.log("Setting flag + dupe + flag once")
ee.on("transfer",flagTransfer)
ee.on("transfer",dupeTransfer)
ee.once("transfer", onceTransfer)

console.log("--Emitting Transfer---")
ee.emit("transfer")
console.log("--Emitting Mint---")
ee.emit("mint")
console.log("--Emitting Transfer---")
ee.emit("transfer")

console.log("Removing dupe")
ee.off("transfer",dupeTransfer)

console.log("--Emitting Transfer---")
ee.emit("transfer")
console.log("--Emitting Mint---")
ee.emit("mint")
console.log("--Emitting Transfer---")
ee.emit("transfer")