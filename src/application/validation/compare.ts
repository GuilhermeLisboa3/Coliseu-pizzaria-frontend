import { InvalidFieldError } from './errors'
import { type FieldValidator } from './field-validator'

export class CompareValidation implements FieldValidator {
  constructor (readonly field: string, private readonly fieldToCompare: string) {}

  validate (input: object): Error | undefined {
    if ((input as any)[this.field] !== (input as any)[this.fieldToCompare]) return new InvalidFieldError()
  }
}
