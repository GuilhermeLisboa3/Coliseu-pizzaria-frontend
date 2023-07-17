import { InvalidFieldError } from './errors'
import { type FieldValidator } from './field-validator'

export class LengthValidation implements FieldValidator {
  constructor (readonly field: string, private readonly length: number) {}

  validate (input: object): Error | undefined {
    if ((input as any)[this.field] && (input as any)[this.field]?.length < this.length) return new InvalidFieldError()
  }
}
