import { InvalidFieldError } from './errors'
import { type FieldValidator } from './field-validator'

export class EmailValidation implements FieldValidator {
  constructor (readonly field: string) {}

  validate (input: object): Error | undefined {
    const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if ((input as any)[this.field] && !validEmail.test(((input as any)[this.field]))) return new InvalidFieldError()
  }
}
