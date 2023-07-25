import React from 'react';
import {  Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ExpenseTransaction from './pages/ExpenseTransaction.jsx';
import IncomeTransaction from './pages/IncomeTransaction.jsx';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/income" component={IncomeTransaction} />
          <Route path="/expenses" component={ExpenseTransaction} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;