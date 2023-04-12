const {runServer} = require('verdaccio');
//const app = await runServer(); // default configuration
//const app = await runServer('./config/config.yaml');
//const app = await runServer({ configuration });

var arg_config = process.argv[2];
if (!['offline', 'online'].includes(arg_config)) {
  throw 'Invalid config argument.  Must be "online" or "offline"'
}

runServer('./config/' + arg_config + '-config.yaml').then((app) => {
  app.listen(4000, (...args) => {
    console.log('Running Verdaccio Server: ' + arg_config);
  });

});
