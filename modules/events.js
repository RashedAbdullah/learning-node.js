const EventEmitter = require("events");

const emitter = new EventEmitter();
emitter.on("comming", () => console.log("Data comming"));
//raise event:
emitter.emit("comming");
