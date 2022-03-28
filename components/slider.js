import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderLogo } from './slider-logo'

import logoHTML from '../public/images/logos/html.png'
import logoCSS from '../public/images/logos/css.png'
import logoJavascript from '../public/images/logos/javascript.png'
import logoBootstrap from '../public/images/logos/bootstrap.png'
import logoJQuery from '../public/images/logos/jquery.png'
import logoThreejs from '../public/images/logos/threejs.png'
import logoPython from '../public/images/logos/python.png'
import logoCSharp from '../public/images/logos/csharp.png'
import logoDjango from '../public/images/logos/django.png'
import logoFlask from '../public/images/logos/flask.png'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 2500,
            cssEase: "linear",
            swipeToSlide: true,
            pauseOnHover: false,
            pauseOnFocus: true,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <SliderLogo
                            src={logoHTML}
                            alt="HTML"
                        />
                    </div>
                    <div>
                        <SliderLogo
                            src={logoCSS}
                            alt="CSS"
                        />
                    </div>
                    <div>
                        <SliderLogo
                            src={logoJavascript}
                            alt="Javascript"
                        />
                    </div>
                    <div>
                        <SliderLogo
                            src={logoBootstrap}
                            alt="Bootstrap"
                        />
                    </div>
                    <div>
                        <SliderLogo
                            src={logoJQuery}
                            alt="jQuery"
                        />
                    </div>
                    <div>
                        <SliderLogo
                            src={logoThreejs}
                            alt="Three.js"
                        />
                    </div>
                    <div>
                    <SliderLogo
                            src={logoPython}
                            alt="Python"
                        />
                    </div>
                    <div>
                    <SliderLogo
                            src={logoCSharp}
                            alt="C#"
                        />
                    </div>
                    <div>
                        <SliderLogo
                            src={logoDjango}
                            alt="Django"
                        />
                    </div>
                    <div>
                        <SliderLogo
                            src={logoFlask}
                            alt="Flask"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}