// import './App.css';
import ComponentEdit from 'component/ComponentEdit';
import ComponentShow from 'component/ComponentShow';
import ComponentReg from 'component/ComponentReg'; 
import {Route, Switch} from 'react-router-dom';


function App() {
  return (

          <div className="App">
     <Switch>
    <Route path='/' exact component={ComponentReg} />
    <Route path='/show/:id'  exact component={ComponentShow}/>
    <Route path='/edit/:id'  exact component={ComponentEdit}/>
    </Switch>
        </div>
   
  )
}

export default App;
