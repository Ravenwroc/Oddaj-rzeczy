import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import {Link, Events} from 'react-scroll';
import '../scss/header.scss';
import decoration from '../images/decoration.png';

const RegisterBtns = () => {
    return (
        <div className="header__registerlogin">
            <a href="" className="header__registerlogin--login">Zaloguj</a>
            <a href="" className="header__registerlogin--register">Załóż konto</a>
        </div>
    )
};

class Navigation extends Component{
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        return (
            <>
                <nav className="header__navigation">
                    <Link to="header" spy={true} smooth={true} duration={500}
                          className="header__navigation--link">Start </Link>
                    <Link to="fourSteps" spy={true} smooth={true} duration={500} className="header__navigation--link">O
                        co chodzi? </Link>
                    <Link to="aboutUs" spy={true} smooth={true} duration={500} className="header__navigation--link">O
                        nas </Link>
                    <Link to="whoWeHelp" spy={true} smooth={true} duration={500} className="header__navigation--link">Fundacje i
                        organizacje </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500}
                          className="header__navigation--link">Kontakt </Link>
                </nav>

            </>
        )
    }
}

class Header extends Component {
    render() {
    return (
    <>
    <header className="header" name="header">
    <div className="header__background"/>
    <RegisterBtns/>
    <Navigation/>
    <div name="header__information" className="header__information">
        <p className="header__information--text">Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</p>
    <img className="header__information--decoration decoration" src={decoration} alt="decoration"/>
    <div className="header__buttons">
    <a className="header__buttons--getAwayStuff">Oddaj <br />rzeczy</a>
    <a className="header__buttons--collectionOrganize">Zorganizuj <br />zbiórkę</a>
    </div>
    </div>
    </header>
    </>
    );
}
}


export default Header;