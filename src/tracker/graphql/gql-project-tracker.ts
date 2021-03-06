import * as fs from 'fs'
import { promisify } from 'util'
import { allowedTypes } from '../../allowed-types'
import { IGQLTracker, IGqlConfig, IMainOptions } from '../../types'
import { BaseTracker } from '../base-tracker'

const write = promisify(fs.writeFile)

export class GqlProjectTracker extends BaseTracker implements IGQLTracker {
  config = {} as IGqlConfig

  constructor() {
    super()
    this.writeToBottomBar = this.writeToBottomBar.bind(this)
    this.addToStorage = this.addToStorage.bind(this)
    this.getFromStorage = this.getFromStorage.bind(this)
    this.setHistory = this.setHistory.bind(this)
    this.init = this.init.bind(this)
    // this.writeResolver = this.writeResolver.bind(this)
    // this.writeResolverTypedef = this.writeResolverTypedef.bind(this)
  }

  async init(opts: IMainOptions) {
    const toCreate = {
      opts,
      resolvers: [],
      typeDefs: [],
      plugins: [],
      allowedTypes,
    }
    delete toCreate.opts.databaseUri
    this.config = toCreate
    await write(`${opts.targetDirectory}/eb.json`, JSON.stringify(toCreate))
  }

  // async writeResolver() {}

  // async writeResolverTypedef() {}
}

export const gqlTracker = new GqlProjectTracker()
