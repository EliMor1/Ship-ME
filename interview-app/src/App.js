import logo from './logo.svg';
import './App.css';
import Login from './Components/login'
import SignUp from './Components/signUp'
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';
import Profile from './Components/Profile';
import Company from './Components/Company';
import Account from './Components/Account';
import Companies from './Components/Companies';
import ChooseCompany from './Components/ChooseCompany';
import NewCompany from './Components/NewCompany';
import UnauthorizedPage from './Components/UnauthorizedPage';

function App() {
  return (
    <main>
      <Switch>
        <Route path ="/" component ={Login} exact />
        <Route path ='/sign-up' component = {SignUp} />
        <Route path ="/home" component={Home} />
        <Route path ="/account/profile" component = {Profile}/>
        <Route path ="/account/company" component = {Company}/>
        <Route path ="/account/account" component = {Account}/>
        <Route path ="/account/companies" component = {Companies}/>
        <Route path ="/choose-company" component = {ChooseCompany}/>
        <Route path ="/account/new-company" component = {NewCompany}/>
        <Route path = '/unauthorized' component = {UnauthorizedPage}/>
      </Switch>
    </main>
  );
}

export default App;
