import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div class="main-layout">
        <div class="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/webgl">Demo</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/webgl">
            <WebGL />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div class="content">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque quam ac dictum venenatis.
          Nam in tincidunt felis. Pellentesque ac lacinia libero. Phasellus porta mauris elementum, molestie tortor sit amet, dictum mi.
        </p>
      </div>
    </div>

  );
}

function About() {
  return (
    <div>
      <div class="content-about">
        <h1>About</h1>
        <p>
          Credits:<br /><br />
          Mika Ronimus<br />
          Unity3d (2019.4)<br />        
          Aircraft model - Unity (Free Standard Asset)<br />
          Explosion Effect - KriptoFX<br />
          Space Skybox - Allsky
        </p>
      </div>
    </div>
  );
}

function WebGL() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div class="content">
        <h1>WebGL </h1>

        <button class="myButton" id="togglee"
          onClick={() => {
            refreshPage();
          }}>
          <p>Launch demo</p></button>

        <div class="webgl-content">
          <div id="unityContainer" class="webgl-player"></div>
        </div>
      </div>
    </div>

  );
}