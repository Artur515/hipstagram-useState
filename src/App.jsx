import Application from './components/Application/Application'
import {BrowserRouter} from "react-router-dom";


const App = () => {
    return (<div>
        <BrowserRouter>
            <Application/>
        </BrowserRouter>
    </div>);
}

export default App;
