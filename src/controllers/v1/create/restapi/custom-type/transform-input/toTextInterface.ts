export const createTextInterface = ({
  typeProps,
  typeName,
}: {
  typeProps: string[];
  typeName: string;
}) => {
  const declaration = `export interface I${typeName}`;

  const interfaceBody = `{
        ${typeProps}
    }`;

  const textInterface = declaration + interfaceBody;

  return textInterface;
};
