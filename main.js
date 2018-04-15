'use strict';

/* infrastructure */

function ModulesLoader(options = { allowOverride: true }) {

  const modules = [];

  function getModule(name) {

    if (!modules[name])
      throw Error(`Module ${name} not found.`);

    return modules[name];
  }

  function registerModule(name, moduleDependencyNames, module) {

    if (options.allowOverride && modules[name])
      throw Error(`Module ${name} already registered.`);

    const moduleDependencies = moduleDependencyNames.map(
      dependencyName => getModule(dependencyName)
    );
    modules[name] = module.apply(module, moduleDependencies);
  }
  
  return {
    getModule: getModule,
    registerModule: registerModule,
  };
}

/* usage */

const context = new ModulesLoader();

context.registerModule('helloModule', [], () => ({
  getGreetingMessage: function getGreetingMessage(name) {
    return `hola, ${name}!`;
  },
}));

context.registerModule('helloService', ['helloModule'], function helloService(helloModule) {
  return {
    greeting: function sayHi(name) {
      const message = 'I said: ' + helloModule.getGreetingMessage(name);
      console.log('result:', message);
      return message;
    },
  };
});

/* main */

const helloService = context.getModule('helloService');
const greeting = helloService.greeting('Maksimko');

document.body.innerHTML = `
  <h3>${greeting}</h3>
`;
