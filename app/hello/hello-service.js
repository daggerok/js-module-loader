'use strict';

export class HelloService {
  constructor(registerModule) {
    this.registerModule = registerModule;
  }
  greeting(name) {
    return `I said: ${this.registerModule.sayHi(name)}`;
  }
}
