import { RequiredFieldError } from './errors'
import { type FieldValidator } from './field-validator'

export class RequiredValidation implements FieldValidator {
  constructor (readonly field: string) {}

  validate (input: object): Error | undefined {
    if (!(input as any)[this.field]) return new RequiredFieldError()
  }
}
