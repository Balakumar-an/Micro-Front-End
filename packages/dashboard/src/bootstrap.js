import {createApp} from "vue"
import DashBoard from "./components/DashBoard.vue"

const mount=(el)=>{    
    const app=createApp(DashBoard);
    app.mount(el);
}

//Checking whether the app is running in development mode
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#_dashboard-dev-root');
    //Checking whether the app is running in isolation
    if(devRoot){
        mount(devRoot);
    }
}

export {mount};