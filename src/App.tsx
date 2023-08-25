import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import { Advantages } from './layout/section/advantages/Advantages';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Advantages />
        </div>
    );
}

export default App;
