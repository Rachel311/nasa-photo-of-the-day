import React from 'react'
import styled from 'styled-components';


const Footer = styled.h1`
color: orange;
background-color: brown;
border: 20px dotted #9ACD32;`

function FooterComponent(){
    return(
        <div>
            <Footer>Isn't this AMAZING????</Footer>
        </div>
    )
}

export default FooterComponent