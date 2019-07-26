import React, {Component} from 'react';
import '../scss/style.scss';
import Header from './header';
import Statistics from './statistics';
import FourSteps from './fourSteps';
import AboutUs from './aboutUs';
import WhoWeHelp from './whoWeHelp';
import Contact from './contact';


class App extends Component {
    render() {
        return (
            <>
                    <Header/>
                    <Statistics/>
                    <FourSteps/>
                    <AboutUs/>
                    <WhoWeHelp/>
                    <Contact/>


            </>

        )
    }


}

export default App;
