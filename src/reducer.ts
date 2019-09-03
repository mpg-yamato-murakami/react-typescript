import { IStore } from './store'

export type Action = {
  type: string,
  payload?: any
}

export const reducer = (state: IStore, action: Action) => {
  switch(action.type) {
    case 'addCity':
      return {
        ...state,
        cities: [...state.cities, { name: action.payload }]
      }
    case 'selectCity':
      return {
        ...state,
        selectedCity: { name: action.payload }
      }
  }
  return state
}
