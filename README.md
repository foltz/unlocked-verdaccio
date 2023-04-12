# unlocked-verdaccio

This is a POC for running a Verdaccio server in both online & offline mode.

See: `./config/[offline|online]-config.yaml`

Basically for offline mode, you comment out the `proxy: npmjs` for the packages

To run the POC:

1. in the project, root, run `yarn` or `npm i` to install the verdaccio dependency.
2. to start verdaccio in online mode: `yarn online` or `npm run online`


