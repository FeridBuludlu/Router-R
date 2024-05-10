import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from './Routes/routes';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element} 
          >
            {route.children && route.children.map((childRoute, childIndex) => (
              <Route
                key={childIndex}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default App;
