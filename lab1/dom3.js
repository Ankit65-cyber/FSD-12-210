import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", (uname) => {
  console.log(`Button clicked by ${uname}`);
});

button.emit("click", "ankit");
button.emit("click", "rishu");
button.emit("click", "amritansh pandey 15");
button.emit("click", "Guest");