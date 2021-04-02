import React from 'react'
import styled from 'styled-components'


const Header = styled.h1`
border: 25px solid red;
background-color: yellow;`


export default function HeaderComponent(){
    return(
        <div>
            <div className = 'header-container'>
                <Header>Nasa Photo of the Day</Header>
            </div>
        </div>
    )
}