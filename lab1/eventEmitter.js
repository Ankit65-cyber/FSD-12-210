import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} logged in`);
};

const start = () => {
  console.log("system starts");
};

const working = (name) => {
  console.log(`${name} add items to cart`);
};

const checkout = (name) => {
  console.log(`${name} logged out`);
};

login("ankit yadav");

const task = new EventEmitter();

task.on("greet", login);

task.emit("greet", "ankit yadav");
