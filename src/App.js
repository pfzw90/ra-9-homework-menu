import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import DriftPage from './components/DriftPage/DriftPage';


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}