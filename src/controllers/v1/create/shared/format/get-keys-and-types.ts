/**
 * @param Array string
 * @returns { Object } ICustomTypeProp[] {key: string, type: string }[ ]
 */
export const getKeysAndTypes = (
  typeProps: string[]
): {
  key: string
  type: string
}[] => {
  const keysAndTypes = typeProps?.map((prop: string) => {
    const splat = prop.split(':')
    const key = splat[0].trim()
    const type = splat[1].trim()
    return { key, type }
  })
  return keysAndTypes
}
