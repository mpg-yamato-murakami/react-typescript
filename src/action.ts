export function addCity (city: string) {
  return {
    type: 'addCity',
    payload: city
  }
}

export function selectCity (city: string) {
  return {
    type: 'selectCity',
    payload: city
  }
}