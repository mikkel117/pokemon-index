import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Forside from '../pages/pokemon';
import Search from '../pages/pokemon-search';
import Covid from '../pages/covid-19';
import Todo from '../pages/todo-fun'

export default function Nav() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon-search">pokemon search</Link>
          </li>
          <li>
            <Link to="/covid-19">covid-19</Link>
          </li>
          <li>
            <Link to="/todo-fun">todo fun</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Forside} />
      <Route path="/pokemon-search" exact component={Search} />
      <Route path="/covid-19" exact component={Covid} />
      <Route path="/todo-fun" exact component={Todo} />
    </Router>
  );
}
