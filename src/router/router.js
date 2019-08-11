import React, {Component} from 'react'
import { HashRouter  as Router, Route, Link, Switch } from "react-router-dom";
import App from '@src/App.js';
import Layoutcomponent from '@component/layout/Layoutcomponent';

import Option1 from '@page/option1';
import Option2 from '@page/option2';

//import createHistory from 'history/createBrowserHistory';
import { createHashHistory,createBrowserHistory } from 'history';
const hashHistory = createHashHistory();

class Routes extends Component {
	 render() {
        return (
            <Router history={hashHistory}>
                <Route exact path="/login"  component={App} />
               <Layoutcomponent path="/layout"  component={Layoutcomponent}>
                	<Route path="/option1"  component={Option1} />
                	<Route path="/option2"  component={Option2} />
            	</Layoutcomponent>
            </Router>
        )
    }
}

export default Routes