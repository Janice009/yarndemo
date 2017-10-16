/**
 * Created by janice on 2017/10/15.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../../dashboard/home'
import Sysmanage from '../../sysmanage/sysmanage'


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/sysmanage' component={Sysmanage}/>


        </Switch>
    </main>
)



export default Main;
