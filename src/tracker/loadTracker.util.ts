import * as fs from "fs";
import * as path from "path";
import Logger from "../logger/logger";
import { promisify } from "util";
import { gqlTracker } from "./graphql/gql-project-tracker";
import { restTracker } from "./restapi/rest-project-tracker";

const read = promisify(fs.readFile);
const exists = promisify(fs.exists);

const loadProjectTrackerData = async () => {
  const currentFileUrl = process.cwd();
  const configFileUrl = path.join(`${currentFileUrl}`, "eb.json");
  const doesExist = await exists(configFileUrl);
  if (!doesExist) return;
  const config = await read(configFileUrl, "utf8");
  return config;
};
export const getTracker = async () => {
  const rawProjectData = await loadProjectTrackerData();
  if (!rawProjectData) {
    Logger.error(
      "Could not load project config file, aborting (load.ts, getTracker())"
    );
    return;
  }
  const projectConfig = JSON.parse(rawProjectData);
  const {
    opts: { implementation },
  } = projectConfig;
  const tracker = implementation === "Restful API" ? restTracker : gqlTracker;
  tracker.config = projectConfig;
  return tracker;
};
