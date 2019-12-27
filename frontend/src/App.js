import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import {useRoutes} from "./routs";
const Body = () => {
    const routes = useRoutes(false)
    return (
        <Router>
            <div className="container">
                { routes }
            </div>
        </Router>
    )
}
export default Body