import React, {Component} from 'react';
import {Link} from 'react-scroll';
import '../scss/header.scss';
import decoration from '../images/decoration.png';

const Register_btns = () => {
    return (
        <div className="register_buttons">
            <button className="login">Zaloguj</button>
            <button className="register">Załóz konto</button>
        </div>
    )
}

const Navigation = () => {
    return (
        <>
            <nav className="navigationMenu">
                <Link>Start </Link>
                <Link>O co chodzi? </Link>
                <Link>O nas </Link>
                <Link>Fundacje i organizacje </Link>
                <Link>Kontakt </Link>
            </nav>
            )
        </>
)
}

class Header extends Component {
    render() {
    return (
    <>
    <header>
    <div className="header_background"/>
    <Register_btns/>
    <Navigation/>
    <div className="information">
    <p>Zacznij pomagać!</p>
    <p>Oddaj rzeczy w zaufane ręce</p>
    <img src={decoration} alt=""/>
    <div className="information_buttons">
    <button className="get_away_stuff">Oddaj rzeczy</button>
    <button className="collection_organize">Zorganizuj zbiórkę</button>
    </div>
    </div>
    </header>
    </>
    );
}
}


export default Header;