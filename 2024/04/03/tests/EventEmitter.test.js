const EventEmitter = require("../utils/EventEmitter/EventEmitterV2");
const { funcTransferWithFullEvent } = require("../utils/CallbackFunctions");
const events = require("../data/events.json");

beforeAll(() => {
  ee = new EventEmitter();
});

test("EventEmitter should instatiate with an empty events object", () => {
  expect(ee.events).toEqual({});
});

test("EventEmitter.on should accept a transfer event and a function", () => {
  ee.on("transfer", funcTransferWithFullEvent);
  expect(ee.events).toEqual(
    expect.objectContaining({
      transfer: expect.any(Set),
    }),
  );
});

// TODO: Figure out how to test for empty Set

// test("EventEmitter.off should remove a callback function for the specified event", () => {
//   ee.off("transfer", funcTransferWithFullEvent);
//   console.log(ee.events);
//   expect(ee.events).toEqual(
//     expect.objectContaining({
//       transfer: expect(Set).toHaveLength(0),
//     }),
//   );
// });

test("EventEmitter.off should return not found when no callback function for the specified event", () => {
  ee.off("banana", funcTransferWithFullEvent);
  expect()
})