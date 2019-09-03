import React, { useCallback, useReducer, Reducer, useMemo } from 'react';
import './App.css';
import { List } from './components/List'
import { CityInput } from './components/CityInput'
import { CurrentWeather }　from './components/CurrentWeather';
import { IStore, Store } from './store'
import { reducer, Action } from './reducer'
import { addCity, selectCity } from './action'

const App: React.FC = () => {
  const [ store, dispatch ] = useReducer<Reducer<IStore, Action>>(reducer, Store)
  const _handleOnSubmit = useCallback((city: string) => {
    dispatch(addCity(city))
  }, [])

  const _handleOnClick = useCallback((city: string) => {
    dispatch(selectCity(city))
  }, [])

  const _currentWeather = useMemo(() => {
    if (!store.selectedCity) return null
    return (
      <CurrentWeather city={ store.selectedCity.name } />
    )
  }, [store.selectedCity])

  return (
    <div className="container">
      <aside className="sub-container">
        <CityInput onSubmit={_handleOnSubmit}/>
        <List onClick={_handleOnClick} items={store.cities}/>
      </aside>
      <main className="main-container">
        { _currentWeather }
      </main>
    </div>
  );
}

export default App;
