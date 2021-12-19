import Logger from "../../../../../logger/logger";
import { ValidationRes } from "../../../../../types";

export const validateSchemaBeforeCreation = async (schemaCreationParams: {
  schemaProps: string[];
  schemaName: string;
  uniqueProperty: string;
  requiredProps: string[];
}): Promise<{ isValid: ValidationRes; message: string }> => {
  Logger.info("Not implemented yet, ", schemaCreationParams);

  return {
    isValid: ValidationRes.VALID,
    message: "yay",
  };
};
