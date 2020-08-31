import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
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
{/*             <li>
              <Link to="/topics">Topics</Link>
            </li> */}
            <li>
              <Link to="/webgl">WebGL</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
{/*           <Route path="/topics">
            <Topics />
          </Route> */}
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

      {/*       <div class="bg">
        <img src={require('./images/.jpg')} alt="" class="bg-image" />
      </div>

      <img src={require('./images/.png')} class="logo" alt="" /> */}

      <div class="content">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque quam ac dictum venenatis.
          Nam in tincidunt felis. Curabitur luctus nisl purus, ac dapibus elit hendrerit vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Pellentesque ultricies, massa vel semper ullamcorper, enim mauris viverra enim, eget rhoncus magna velit eget leo. In pharetra urna sed pretium rhoncus. Integer blandit libero at urna ullamcorper maximus.
          Donec ante erat, hendrerit eget finibus ac, efficitur quis enim. Pellentesque ac lacinia libero. Phasellus porta mauris elementum, molestie tortor sit amet, dictum mi.
        </p>
      </div>
    </div>

  );
}

function WebGL() {
  return (
    <div>
      <div class="content">
        <h1>WebGL</h1>
      </div>

      <div class="webgl-content">
        <div id="unityContainer" class="webgl-player"></div>
      </div>
    </div>

  );
}

/* function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
} */
