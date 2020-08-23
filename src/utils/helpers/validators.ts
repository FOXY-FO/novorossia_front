type TValidator = string | undefined

export const required = (value: string) => {
  if (value) return undefined

  return "Поле обязательное"
}

export const maxLengthCreator = (length: number): Function => (
  value: string
): TValidator => {
  if (value && value.length > length)
    return `Максимальное количество символов ${length}`

  return undefined
}

export const minLengthCreator = (length: number): Function => (
  value: string
): TValidator => {
  if (value && value.length < length)
    return `Минимальное количество символов ${length}`

  return undefined
}
