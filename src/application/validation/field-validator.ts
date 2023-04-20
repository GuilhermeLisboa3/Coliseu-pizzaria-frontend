export interface FieldValidator {
  field: string
  validate: (input: object) => Error | undefined
}
