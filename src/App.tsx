import React from 'react';
import './App.css';
import { List } from './components/List'
import { CityInput } from './components/CityInput'
import { Store } from './store'

const App: React.FC = () => {
  return (
    <div className="container">
      <aside className="sub-container">
        sub
      </aside>
      <main className="main-container">
        <CityInput onSubmit={ (name) => { alert(name) } }/>
        <List items={Store.cities}/>
      </main>
    </div>
  );
}

export default App;
