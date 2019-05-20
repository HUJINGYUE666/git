import React from 'react';
// import {BrowserRouter as Router, Route, Link  } from "react-router-dom";
import {BrowserRouter as Router, Route, Link , Switch , Redirect , Prompt , NavLink} from "react-router-dom";
import Home from './components/Home'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import Children from './components/Children';
import F from './components/F'
import './App.css'

let Jump = (props) =>{
  return <Link to={props.to}>{props.children}</Link>
}
function App() {
  return (
    <div className="App">
      <Router>
        <NavLink exact activeClassName="selected" to='/'>首页</NavLink>
        ----
        <NavLink to='/a'>A页面</NavLink>
        ----
        <NavLink to='/b/1'>B页面</NavLink>
        ----
        <NavLink to='/c/2'>C页面</NavLink>
        ----
        <NavLink to='/d'>D页面</NavLink>
        ----
        <NavLink to="/children">children</NavLink>
        ----
        <NavLink to="/redirect">redirect</NavLink>
        {/* <Route exact path='/' component={Home}></Route>
        <Route path='/a' component={A}></Route>
        <Route path='/b' component={B}></Route> */}
        {/* <Switch> */}
          <Route exact path='/' component={Home}></Route>
          <Route path='/a' component={A}></Route>
          <Route path='/b/:id' component={B}></Route>
          <Route path='/c/:num' component={C}></Route>
          <Route path='/d' render={()=>{
            return <h1>renderD页面content</h1>
          }}></Route>  
          <Route path="/children" children={(props)=>{
            let str = props.match?'1111':'0000';
            console.log(str)
            return <Children str={str}></Children>
          }}></Route>     
          <Route path="/e" render={()=><Redirect to="/"></Redirect>}></Route>
          <Jump to='/xxx'>xxx</Jump>
          <F></F>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
