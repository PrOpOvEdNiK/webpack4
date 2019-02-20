import "../sass/styles.scss";

import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import HomePage from './containers/HomePage';
import BegemotPage from './containers/BegemotPage';

import {Provider} from 'react-redux';
import store from './store';

import HeaderMenu from './components/HeaderMenu';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <HeaderMenu/>

                <TransitionGroup>
                    <CSSTransition classNames="router" timeout={500}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/begemot/" component={BegemotPage}/>

                            <Route render={() => <h1>Not Found</h1>} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
