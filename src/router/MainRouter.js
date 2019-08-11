import React, {Component} from 'react'
import { HashRouter  as Router, Route, Link, Switch } from "react-router-dom";

import Option1 from '@page/option1';
import Option2 from '@page/option2';

class MainRouter extends Component {
	 render() {
        return (
            <div>
                <Route path="/option1"  component={Option1} />
                <Route path="/option2"  component={Option2} /> 
            </div>
        )
    }
}

export default MainRouter