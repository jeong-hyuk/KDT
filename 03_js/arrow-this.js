let sayHello = () => {
  console.log("hello, I'm " + this.name);
  console.log(this);
};

let sayHallo = function () {
  console.log("hallo, I'm " + girl.name);
  console.log(this);
};

const boy = {
  name: "Mike",
  sayHello,
};

const girl = {
  name: "Jane",
  sayHallo,
};

boy.sayHello();
girl.sayHallo();
