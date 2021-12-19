import Logger from "../../../../../logger/logger";
import { ValidationRes } from "../../../../../types";
import { validateCustomTypeBeforeCreation } from "../input-validations";
import { createTextInterface } from "./transform-input";

/**
 * @param typeProps a string array of typeProps, example: [seasons: int, actors: string[]]
 * @param typeName the name of the custom type, example: tvShow
 */
const validateAndCreateCustomType = async (customTypeParams: {
  typeProps: string[];
  typeName: string;
}) => {
  const { isValid, message } = await validateCustomTypeBeforeCreation(
    customTypeParams
  );
  if (isValid === ValidationRes.VALID) {
    await doCreateCustomType(customTypeParams);
  } else {
    Array.isArray(message)
      ? message.forEach((message) => {
          Logger.error(message);
        })
      : Logger.error(message);
    throw Error("Error creating custom type");
    // TODO: error handling
  }
};

const doCreateCustomType = async (customTypePropParams: {
  typeProps: string[];
  typeName: string;
}) => {
  Logger.info("Creating a new custom type interface");

  const textInterface = createTextInterface(customTypePropParams);
  Logger.info(textInterface);
};

export default validateAndCreateCustomType;
