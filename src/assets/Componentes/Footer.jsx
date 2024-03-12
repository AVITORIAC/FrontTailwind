import React from 'react'
import footer_azul from "../Imgs/a_footer.png"
import footer_verde from "../Imgs/v_footer.png"
import footer_ciano from "../Imgs/c_footer.png"



function Footer({ azul, azul_aprendiz, verde, ciano }) {

    const cores = `
    ${azul ? { footer_azul } : ''}
    ${azul_aprendiz ? { footer_azul } : ''}
    ${verde ? { footer_verde } : ''}
    ${ciano ? { footer_ciano } : ''}`;

    if (azul) {
        return (
            // <div className={`${cores}`}></div>
            <img src={footer_azul} className={`w-full`}></img>
        )
    }
    else if (verde) {
        return (
            // <div className={`${cores}`}></div>
            <img src={footer_verde} className={`w-full`}></img>
        )
    }
    else if (azul_aprendiz) {
        return (
            // <div className={`${cores}`}></div>
            <img src={footer_azul} className={`w-full`}></img>
        )
    }
    else {
        return (
            // <div className={`${cores}`}></div>
            <img src={footer_ciano} className={`w-full`}></img>
        )
    }
}

export default Footer
