import React from "react"
import Logo from "../assests/Header-img.png"
import CallToAction from "./CallToAction"
const Header = function () {
    return (
        <div>
            <header>
                <div className="containers">
                    <div className="header__picture">
                        <img
                            className="picture"
                            src={Logo}
                        />
                    </div>

                    <div className="hero-action">
                        <h1 className="hero-action__heading">
                            <span className="hero-action__span"><i>Powerfully Simple</i></span> With
                            a
                 <br />
                            <span className="hero-action__span"><i>Squeeky Clean</i></span> Design.
               </h1>
                        <p className="hero-action__paragraph">
                            Find out how you can offer quick and powerful solutions to your
                            customers now!
               </p>
                        <div className="hero-action__button">
                            <a className="button button--hero" href="#">Learn more</a>
                        </div>
                    </div>
                </div>
                <CallToAction message="Create a powerful solution now!" />

            </header>

        </div>
    )
}
export default Header