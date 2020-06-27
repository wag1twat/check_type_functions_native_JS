export const isBooleans = (...rest) => {
  if (Array.isArray(rest) && rest.every((v) => typeof v === 'boolean'))
    return true
  else return false
}
export const isArrays = (...rest) => {
  if (rest.every((v) => Array.isArray(v))) return true
  else return false
}
export const isStrings = (...rest) => {
  if (Array.isArray(rest) && rest.every((v) => typeof v === 'string'))
    return true
  else return false
}
export const isNumbers = (...rest) => {
  if (Array.isArray(rest) && rest.every((v) => typeof v === 'number'))
    return true
  else return false
}
export const isFunctions = (...rest) => {
  if (Array.isArray(rest) && rest.every((v) => typeof v === 'function'))
    return true
  else return false
}
