import React from "react";
import {BrowserRouter} from "react-router-dom";
import {StylesProvider,createGenerateClassName} from '@material-ui/core/styles';

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";


export default () => {
  const generateClassNames=createGenerateClassName({
    productionPrefix:'co'
});

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassNames}>
        <div>
            <Header/>
            <MarketingApp/>
        </div>
        </StylesProvider>
    </BrowserRouter>
  );
};