import React, {Component} from 'react';
import '../scss/statistics.scss';

const Statistics = () => {
    return (
        <section name="statistics" className="statistics">
            <div className="statistics__container">
                <div className="statistics__block">
                    <p className="block__count">10</p>
                    <p className="block__title">oddanych worków</p>
                    <span className="block__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores harum maxime perferendis quasi vitae!</span>
                </div>
                <div className="statistics__block">
                    <p className="block__count">5</p>
                    <p className="block__title">wspartych organizacji</p>
                    <span className="block__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores harum maxime perferendis quasi vitae!</span>
                </div>
                <div className="statistics__block">
                    <p className="block__count">7</p>
                    <p className="block__title">zorganizowanych zbiórek</p>
                    <span className="block__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores harum maxime perferendis quasi vitae!</span>
                </div>
            </div>
        </section>
    )
}

export default Statistics;