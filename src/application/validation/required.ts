import { RequiredFieldError } from './errors'

export class RequiredValidation {
  constructor (private readonly fieldName: string) {}

  validate (input: object): Error | undefined {
    if (!(input as any)[this.fieldName]) return new RequiredFieldError()
  }
}
