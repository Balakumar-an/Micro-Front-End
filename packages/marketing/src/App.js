import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App=()=>{
    const generateClassNames=createGenerateClassName({
        productionPrefix:'ma'
    });

    return(
        <div>
            <StylesProvider generateClassName={generateClassNames}>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route path="/" component={Landing}/>
                </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}

export default App;