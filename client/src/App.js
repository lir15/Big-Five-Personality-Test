import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Divider} from 'antd';
import { Checkbox, PageHeader } from 'antd';
import Question from "./Component/Question";
import Home from "./Component/Home";
import Result from "./Component/Result"
import Stats from "./Component/Stats";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'



const App = () => {
    return ( 
    <Router>
        <div className = "App" > 
           
            <Switch>
            <Route path = '/' exact>
                <Home/>
            </Route>
            <Route path = '/question' exact>
                <Question/>
            </Route>
            <Route path = '/result' exact>
                <Result/>
            </Route>
            <Route path = '/stats' exact>
                <Stats/>
            </Route>
            </Switch>

        </div> 
        </Router>
    )
}

export default App;