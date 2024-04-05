const EventEmitter = require("events");

const emitter = new EventEmitter();
emitter.on("comming", (next) => {
  console.log("Data comming");
  console.log(next);
});
//raise event:
setTimeout(() => {
  emitter.emit("comming", "Realse date");
}, 1000);
