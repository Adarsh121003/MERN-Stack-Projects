import React from 'react'

import Logo from '../img/logo.png'
import './Home.css'
function HomeCover() {



    return (
        <div className='home-cover'>

            <div className='row'>
                <div className='col-lg-12 text-center mt-5 '>
                    <div className='img-set'>
                        <img src={Logo} alt='log' className=' h-35 ' />
                    </div>
                    <div class="slogan">
                        <p >Shop Swift, Shop Smart with SwiftCart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCover