// V1 - refactoring original ideas from interview
// V2 - implement passing any number of args in callback function + try using Set

// TODO:
// V3 - refactor final time and implement tests

const EventEmitter = require("./utils/EventEmitter/EventEmitterV2");
const {
  funcTransferWithFullEvent,
  funcMintWithFullEvent,
  funcBurnWithFullEvent,
  funcTransferWithArgs,
  funcAlertEvent,
} = require("./utils/CallbackFunctions");
const events = require("./data/events.json");

ee = new EventEmitter();

transferEvent = events[0];

ee.once("transfer", funcAlertEvent);
ee.on("transfer", funcAlertEvent);

ee.emit(transferEvent.name, transferEvent);
ee.emit(transferEvent.name, transferEvent);

ee.off("transfer", funcAlertEvent);

console.log("[START] No expected output here");
ee.emit(transferEvent.name, transferEvent);
console.log("[END] No expected output here");

// Test arg passing w/ named args
ee.on("transfer", funcTransferWithArgs);
ee.emit(
  transferEvent.name,
  transferEvent.sender,
  transferEvent.receiver,
  transferEvent.value,
);
ee.off("transfer", funcTransferWithArgs);

// Test arg passing along with whole event
ee.on("transfer", funcTransferWithFullEvent);
ee.on("mint", funcMintWithFullEvent);
ee.on("burn", funcBurnWithFullEvent);
ee.emit(transferEvent.name, transferEvent);

events.forEach((event) => {
  ee.emit(event.name, event);
});

ee.off("banana", funcTransferWithFullEvent);
