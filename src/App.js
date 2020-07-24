import React from 'react';
// import './App.css';
// import{Home} from './Containers'
import Navbar from '././component/Navbar/navbar'
import AddPerson from './Containers/AddPerson/addPerson'
class App extends React.Component{
render(){
  return(
    <div>
    <Navbar />   
    <br/>
    <br/>
    
    <AddPerson />
    </div>
  )
}
}
export default App;
