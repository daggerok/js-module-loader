'use strict';

export class HelloService {
  constructor(helloModule) {
    this.helloModule = helloModule;
  }
  greeting(name) {
    return `I said: ${this.helloModule.sayHi(name)}`;
  }
}
