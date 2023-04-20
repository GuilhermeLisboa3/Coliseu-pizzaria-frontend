import { InvalidFieldError } from './errors'
import { type FieldValidation } from './field-validation'

export class CompareValidation implements FieldValidation {
  constructor (readonly field: string, private readonly fieldToCompare: string) {}

  validate (input: object): Error | undefined {
    if ((input as any)[this.field] !== (input as any)[this.fieldToCompare]) return new InvalidFieldError()
  }
}
