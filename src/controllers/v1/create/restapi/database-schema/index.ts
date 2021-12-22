import Logger from '../../../../../logger/logger'
import { ValidationRes } from '../../../../../types'
import { validateSchemaBeforeCreation } from '../input-validations'
import { createTextDatabaseSchema } from './transform-input/toTextDatabaseSchema'

/**
 * @param schemaProps properties of the schema.
   @param schemaName name of the schema (like tvShow), 'Schema' will be added to the name automatically.
   @param uniqueProperty if there is a unique property for the schema.
   @param requiredProps properties that are 'required: true '
 */
export const validateAndCreateDatabaseSchema = async (schemaCreationParams: {
  schemaProps: string[]
  schemaName: string
  uniqueProperty: string
  requiredProps: string[]
}) => {
  const { isValid, message } = await validateSchemaBeforeCreation(schemaCreationParams)
  if (isValid === ValidationRes.VALID) {
    await doCreateDatabaseSchema(schemaCreationParams)
  } else {
    Array.isArray(message)
      ? message.forEach((message) => {
          Logger.error(message)
        })
      : Logger.error(message)
  }
}

const doCreateDatabaseSchema = async (schemaCreationParams: {
  schemaProps: string[]
  schemaName: string
  uniqueProperty: string
  requiredProps: string[]
}) => {
  Logger.info('Creating a new database schema')

  const textDBSchema = await createTextDatabaseSchema(schemaCreationParams)
  Logger.info(textDBSchema)
}

export default validateAndCreateDatabaseSchema
