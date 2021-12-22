const execPublishMajor = require("child_process").execSync;
const majorMessage = "BUILD - " + process.argv[2];
execPublishMajor(
  'npm run format && npm run lint && npm run test && git add . && git commit -m "' +
    majorMessage +
    '" && npm version minor && npm publish',
  { stdio: [0, 1, 2] }
);
