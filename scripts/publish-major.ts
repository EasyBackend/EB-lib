const execPublishMinor = require("child_process").execSync;
const minorMessage = "BUILD - " + process.argv[2];
execPublishMinor(
  'npm run format && npm run lint && npm run test && git add . && git commit -m "' +
    minorMessage +
    '"',
  { stdio: [0, 1, 2] }
);
