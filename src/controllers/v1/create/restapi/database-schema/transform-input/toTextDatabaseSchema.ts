import { fromTypePropsToSchemaProps } from '.'

export const createTextDatabaseSchema = async ({
  schemaProps,
  schemaName,
  uniqueProperty,
  requiredProps,
}: {
  schemaProps: string[]
  schemaName: string
  uniqueProperty: string
  requiredProps: string[]
}) => {
  // arrange
  const schemaVariableName = `${schemaName}MongoSchema`

  schemaProps = fromTypePropsToSchemaProps({
    typeProps: schemaProps,
    uniqueProperty,
    requiredProps,
  })

  // build schema
  const declaration = `const ${schemaVariableName}: Schema = new mongoose.Schema`

  const body = `({
      ${schemaProps}
    })`

  const transformStatement = `${schemaVariableName}.set('toJSON', {
      transform: (_: any, returnedObject: any) => {
        delete returnedObject.__v;
      },
    });`

  return `${declaration}${body}\n\n${transformStatement}`
}
