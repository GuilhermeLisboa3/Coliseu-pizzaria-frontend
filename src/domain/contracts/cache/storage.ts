export interface SetStorage {
  set: (input: SetStorage.Input) => void
}

export namespace SetStorage {
  export type Input = { key: string, value: object }
}

export interface GetStorage {
  get: (input: GetStorage.Input) => GetStorage.Output
}

export namespace GetStorage {
  export type Input = { key: string }
  export type Output = any
}
