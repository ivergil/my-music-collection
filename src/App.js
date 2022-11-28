import * as React from 'react';
import './App.css';
import Collection from './components/Collection/Collection';
import AddItem from './components/AddItem/AddItem';

function App() {
  const [collection, setCollection] = React.useState([]);
  const updateCollection = (item) => {
    setCollection([
      ...collection, item
    ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        My Music Collection
      </header>
      <AddItem updateCollection={updateCollection}/>
      <Collection collection={collection} />
    </div>
  );
}

export default App;
