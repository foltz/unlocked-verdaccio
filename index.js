const {runServer} = require('verdaccio');
//const app = await runServer(); // default configuration
//const app = await runServer('./config/config.yaml');
//const app = await runServer({ configuration });
//app.listen(4000, (event) => {
//  // do something
//  console.log({event});
//});


var arg_config = process.argv[2];
if (!['offline', 'online'].includes(arg_config)) {
  throw 'Invalid config argument.  Must be "online" or "offline"'
}
console.log(process.argv[2]);

runServer('./config/' + arg_config + '-config.yaml').then((app) => {
  app.listen(4000, (...args) => {
    // do something
    console.log('Running Verdaccio Server: ' + arg_config);
  });

});
