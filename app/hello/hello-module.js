'use strict';

export class HelloModule {
  constructor(guestName = 'Guest') {
    this.name = guestName;
  }
  sayHi(name) {
    return `hola, ${name || this.name}!`;
  }
}
