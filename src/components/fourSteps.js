import React, {Component} from 'react';
import '../scss/fourSteps.scss';
import decoration from "../images/decoration.png";
import first from "../images/28.png";
import second from "../images/016.png";
import third from "../images/039.png";
import fourth from "../images/58.png";

const FourSteps = () => {
    return (
        <section name="fourSteps" className="fourSteps">
            <p className="fourSteps__title">Wystarczą 4 proste kroki</p>
            <img className="fourSteps__decoration decoration" src={decoration} alt="decoration"/>
            <section className="fourSteps__information">
                <div className="fourSteps__element">
                    <img className="fourSteps__img" src={first} alt="img"/>
                    <p className="fourSteps__elementTitle">Wybierz rzeczy</p>
                    <div className="fourSteps__line"></div>
                    <span className="fourSteps__description">ubrania,zabawki, sprzęt i inne</span>
                </div>
                <div className="fourSteps__element">
                    <img className="fourSteps__img" src={second} alt="img"/>
                    <p className="fourSteps__elementTitle">Spakuj je</p>
                    <div className="fourSteps__line"></div>
                    <span className="fourSteps__description">skorzystaj z worków na śmieci</span>
                </div>
                <div className="fourSteps__element">
                    <img className="fourSteps__img" src={third} alt="img"/>
                    <p className="fourSteps__elementTitle">Zdecyduj komu chcesz pomóc</p>
                    <div className="fourSteps__line"></div>
                    <span className="fourSteps__description">wybierz zaufane miejsce</span>
                </div>
                <div className="fourSteps__element">
                    <img className="fourSteps__img" src={fourth} alt="img"/>
                    <p className="fourSteps__elementTitle">Zamów kuriera</p>
                    <div className="fourSteps__line"></div>
                    <span className="fourSteps__description">kurier przyjedzie w dogodnym terminie</span>
                </div>
            </section>
        </section>
    )
}

export default FourSteps;