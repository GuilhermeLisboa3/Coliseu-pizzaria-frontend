import { RequiredFieldError } from './errors'
import { type FieldValidation } from './field-validation'

export class RequiredValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error | undefined {
    if (!(input as any)[this.field]) return new RequiredFieldError()
  }
}
