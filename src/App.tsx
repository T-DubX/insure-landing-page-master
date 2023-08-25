import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import { Advantages } from './layout/section/advantages/Advantages';
import {AboutUs} from "./layout/section/aboutUs/AboutUs";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Advantages />
            <AboutUs/>
            <Footer/>
        </div>
    );
}

export default App;
