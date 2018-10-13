import React, {Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from '../views/home';
import Admin from '../admin';
import NotMatch from '../views/notMatch';
import SecondPage from '../views/secondPage';
import Order_demo from '../views/order_demo';
import MapPage from '../views/map_page';
class Router  extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/admin'  render={()=>
                            <Admin>
                               <Switch>
                                   <Route path='/admin/home'   component={Home}></Route>
                                   <Route path='/admin/secondPage'  component={SecondPage}></Route>
                                   <Route path='/admin/order_demo' component={Order_demo}></Route>
                                   <Route component={NotMatch}></Route>
                               </Switch>
                            </Admin>
                        } />
                        <Route path='/mapPage/:id' component={MapPage}></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default  Router;