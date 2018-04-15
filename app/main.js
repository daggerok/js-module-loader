'use strict';

import { HelloService } from './hello/hello-service';
import { HelloModule } from './hello/hello-module';

const registerModules = new HelloModule('Guest');
const heloService = new HelloService(registerModules);
const greeting = heloService.greeting('Maksimko');

document.body.innerHTML = `
  <h3>${greeting}</h3>
`;

console.info('debug message:', greeting);
