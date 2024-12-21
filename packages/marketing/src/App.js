import React from 'react';
import {Switch,Route,Router} from 'react-router-dom';
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App=({history})=>{
    const generateClassNames=createGenerateClassName({
        productionPrefix:'ma'
    });

    return(
        <div>
            <StylesProvider generateClassName={generateClassNames}>
                <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route path="/" component={Landing}/>
                </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}

export default App;