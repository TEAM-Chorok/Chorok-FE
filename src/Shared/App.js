import React from 'react';

import { Route } from 'react-router-dom';
import { Login, Home, AddLocation, AddClass, AddPlant, PlantCard, } from '../Pages';


function App() {
  return (
    <React.Fragment>

        <Route path="/" exact component={Login} />
        <Route path="/todo" exact component={Home} />

        <Route path="/add" exact component={AddLocation} />
        <Route path="/add/:location" exact component={AddClass} />
        <Route path="/add/:location/list" exact component={AddPlant} />

        <Route path="/plant/:plantname" exact component={PlantCard} />

    </React.Fragment>
  );
}


export default App;