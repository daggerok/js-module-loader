'use strict';

require(['./hello/hello-service'], function main(heloService) {

  const greeting = heloService.greeting('Maksimko');

  document.body.innerHTML = `
    <h3>${greeting}</h3>
  `;

  console.info('debug message:', greeting);

});
