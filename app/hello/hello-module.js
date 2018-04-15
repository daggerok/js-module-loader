'use strict';

export class HelloModule {
  constructor(defaultName) {
    this.name = defaultName;
  }
  sayHi(name) {
    return `hola, ${name || this.name}!`;
  }
}
