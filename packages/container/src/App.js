import React,{lazy,Suspense, useEffect, useState} from "react";
import {Router,Switch,Route,Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles';

import Header from "./components/Header";
import Progress from "./components/Progress";
const MarketingLazy = lazy(()=>import("./components/MarketingApp"));
const AuthLazy = lazy(()=>import("./components/AuthApp"));
const DashBoardLazy = lazy(()=>import("./components/DashboardApp"));

const history=createBrowserHistory();

export default () => {
  const [isSignedIn,setIsSignedIn]=useState(false);
  const generateClassNames=createGenerateClassName({
    productionPrefix:'co'
  });

  useEffect(()=>{
    if(isSignedIn){
      history.push("/dashboard");
    }
  },[isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassNames}>
        <div>
            <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
            <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={()=>setIsSignedIn(true)}/>
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/"/>}
                <DashBoardLazy/>
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
            </Suspense>
        </div>
        </StylesProvider>
    </Router>
  );
};