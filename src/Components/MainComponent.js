import React from 'react'
import BodyComponent from './BodyComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

function MainComponent (){
    return (
        <div>
            <HeaderComponent/>
            <BodyComponent/> 
            <FooterComponent/>
        </div>
    )
}



export default MainComponent


