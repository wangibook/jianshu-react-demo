import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import loadable from './utils/loadable';
import store from './store';
import Header from './common/header';
// 异步加载组件

const Home = loadable(() =>import('./pages/home'));
const Detail = loadable(() =>import('./pages/detail'));
const Login = loadable(() =>import('./pages/login'));
const Write = loadable(() =>import('./pages/write'));

// import Home from './pages/home';
// import Detail from './pages/detail/loadable';
// import Login from './pages/login';
// import Write from './pages/write';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
