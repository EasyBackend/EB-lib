export const execCommitPublishMinor = require("child_process").execSync;

const minorMessage = process.argv[2];

const checkCommitMessage = () => {
  console.log("KOREN: ", process.argv[2]);
  if (!process.argv[2]) throw Error("No commit message! aborting.");
  return "";
};

execCommitPublishMinor(
  `${checkCommitMessage()} git commit -m "${minorMessage}" && npm version minor && npm publish`,
  { stdio: [0, 1, 2] }
);
