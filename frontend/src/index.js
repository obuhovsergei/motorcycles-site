import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Body from "./App"
import * as serviceWorker from './serviceWorker'
function App() {
    return (
        <div>
            <Body/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister()
