import './App.css';
import Home from './components/Home';
import Addpost from './components/Addpost';
import Addforum from './components/Addforum';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header/index';
import Editpost from './components/Editpost/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [x, y] = useState([]);
  const [forums, setForum] = useState([]);
  const [posts, setPost] = useState([]);
  const [logIn, setLogIn] = useState(JSON.parse(sessionStorage.getItem("loggedIn"))|| false )

  const getForumData = async () => {
      const API_ENDPOINT = "https://evening-wildwood-84454.herokuapp.com/forums"
      try {
          const response = await fetch(API_ENDPOINT)
          const data = await response.json();
          setForum(data);
          
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
      getForumData();
  }, [])

  return (
    <BrowserRouter>
     <Header logIn={logIn} setLogIn={setLogIn}/>
      <main>
        <Switch>
        <Route
            path="/posts/:id/edit" render={(routerProps) => <Editpost match={routerProps.match} getForumData={getForumData}/>} />
        <Route
            path="/forum/:id" render={(routerProps) => <Addpost x={x} y={y} match={routerProps.match} setPost={setPost} posts={posts} getForumData={getForumData} />} />
          <Route
            exact path='/' render={() => <Home forums={forums} setForums={setForum}/>} />
          <Route
            path='/Addforum' render={(routerProps) => <Addforum  getForumData={getForumData} match={routerProps.match} setForum={setForum} forum={forums} />} />
            <Route
            path='/Signup' render={() => <Signup />} />
            <Route
            path='/Login' render={() => <Login setLogIn={setLogIn} />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;