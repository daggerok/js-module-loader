'use strict';

define('./hello-module', [], function RegisterModules() {
  return {
    sayHi: function sayHi(name) {
      return `hola, ${name || 'Guest'}!`;
    }
  };
});
