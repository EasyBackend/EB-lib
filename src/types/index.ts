export interface IMainOptions {
  git: boolean
  template: string
  runInstall: boolean
  targetDirectory: string
  templateDirectory: string
  databaseTemplateDir: string
  database: string
  projectName: string
  databaseUri?: string
  implementation: string
  level: string
}
export enum DatabaseStorageType {
  schemaName = 'schemaName',
  schemaProps = 'schemaProps',
  requiredProps = 'requiredProps',
  confirmSchemaCreation = 'confirmSchemaCreation',
  uniqueProperty = 'uniqueProperty',
}

export enum InterfaceStorageType {
  typeName = 'typeCreationName',
  typeCreationProps = 'typeCreationProps',
  confirmTypeCreation = 'confirmTypeCreation',
  includeDBSchema = 'includeDBSchema',
  uniqueProperty = 'uniqueProperty',
}

export type TrackerStorageTypes = InterfaceStorageType | DatabaseStorageType
export interface ITrackerStorage {
  key: TrackerStorageTypes
  value: any
}

export type Types = 'N/A' | string[]
export type Language = 'typescript' | 'javascript'
export type Implementaion = 'gql' | 'rest'

interface IAllowedTypes {
  arrayTypes: string[]
  primitiveTypes: string[]
  objectTypes: string[]
  customTypes: string[]
}
interface IBaseConfig {
  opts: Omit<IMainOptions, 'databaseUri'>
  plugins: string[]
  allowedTypes: IAllowedTypes
}

export interface IGqlConfig extends IBaseConfig {
  resolvers: string[]
  typeDefs: string[]
}
export interface IRestConfig extends IBaseConfig {
  routes: string[]
  middlewares: string[]
}

export interface IRestTracker {
  config: IRestConfig
}

export interface IDB {
  database: string
  schemas: string[]
}

export interface IGQLTracker {
  config: IGqlConfig
}

export interface ITrackerHistory {
  history: Function
  get: Function
  goBack: Function
}
export enum ValidationRes {
  INVALID = 0,
  VALID,
  ERROR,
}
