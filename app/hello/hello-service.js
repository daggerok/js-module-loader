'use strict';

define('./hello-service', ['./hello-module'], function RegisterModules(helloModule) {

  function greeting(name) {
    return `I said: ${helloModule.sayHi(name)}`;
  }

  return {
    greeting,
  };

});
