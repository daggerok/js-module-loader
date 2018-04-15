'use strict';

import { HelloService } from './hello/hello-service';
import { HelloModule } from './hello/hello-module';
import * as Bottle from 'bottlejs/dist/bottle.js';

const bottle = new Bottle();
bottle.service('HelloModule', HelloModule);
bottle.service('HelloService', HelloService, 'HelloModule');

const helloService = bottle.container.HelloService;
const greeting = helloService.greeting('Maksimko');

document.body.innerHTML = `
  <h3>${greeting}</h3>
`;

console.info('debug message:', greeting);
