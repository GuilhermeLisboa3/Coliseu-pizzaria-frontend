export class FieldNotFoundError extends Error {
  constructor (fieldName: string) {
    super(`O ${fieldName} não foi encontrado.`)
    this.name = 'FieldNotFoundError'
  }
}
