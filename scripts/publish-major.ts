import inquirer from "inquirer";
import { commitQuestions } from "../assets/prompts/commit";

const execPublishMinor = require("child_process").execSync;

const minorMessage = async () => {
  "publish minor version - " + (await inquirer.prompt([commitQuestions]));
};

execPublishMinor(
  'npm run format && npm run lint && npm run test && git add . && git commit -m "' +
    minorMessage() +
    '"',
  { stdio: [0, 1, 2] }
);
