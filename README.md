# unlocked-verdaccio

This is a POC for running a Verdaccio server in both online & offline mode.

See: `./config/[offline|online]-config.yaml`

Basically for offline mode, you comment out the `proxy: npmjs` for the packages.


---
#### To run the POC:

1. in the project, root, install the package dependencies.
   - run `yarn` or `npm i`
   

2. start verdaccio in online mode: 
   - `yarn online` or `npm run online`


3. in another terminal window go into the example app: 
   - run `cd ./example-app` 

   
4. Install the dependencies:
   - run `yarn` or `npm i`
  
---
#### What you should see:
 - You should see the dependencies in `./example-app/node_modules`
 - You should see the same dependencies in `./cache`
   - the cached dependencies should include the dependency tarball.


---
#### To test it offline:

1. Disconnect from the internet


2. Clear your project's node_modules & npm cache:
   - in `./example-app` run: `yarn clear` or `npm run clear`


3. Start Verdaccio in offline mode:
   - in the project root, run `yarn offline` or `npm run offline`


4. Re-install the example-app dependencies:
   - in `./example-app` run: `yarn` or `npm i`

