export type IStore = {
  message: string,
  count: number;
  cities: { name: string }[],
  selectedCity: { name: string } | null
}
export const Store: IStore = {
  message: 'Hello!',
  count: 0,
  cities: [
    {
      name: 'tokyo'
    },
    {
      name: 'osaka'
    }
  ],
  selectedCity: null
}