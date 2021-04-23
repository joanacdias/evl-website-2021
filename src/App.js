import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import IndustrySolutions from './pages/IndustrySolutions/IndustrySolutions';
import OurTechnologies from './pages/OurTechnologies/OurTechnologies';
import Insights from './pages/Insights/Insights';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import {MuiThemeProvider} from '@material-ui/core/styles'
import './App.scss';
import myTheme from './styles/theme.js'

function App() {
  return (
    <MuiThemeProvider theme={myTheme}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/industry-solutions' component={IndustrySolutions} />
            <Route path='/our-technologies' component={OurTechnologies} />
            <Route path='/insights' component={Insights} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
