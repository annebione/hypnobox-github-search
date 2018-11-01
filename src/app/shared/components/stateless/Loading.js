import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
   width: 100px;
   height: 100px;
   margin: 10px 0;
   margin: 0 auto;
   padding: 10px 0;
   background-image: url('./assets/img/lg-fidget-spinner.gif"')
   & > img {
    height: 60px;
    width: 60px;
   }`

const LoadingIcon = styled.img`
    height: 60px;
    width: 60px;
   `

const Loading = () => (
    <LoadingWrapper>
        <LoadingIcon src="./assets/img/lg-fidget-spinner.gif" alt="Carregando..." /> 
    </LoadingWrapper>
 )

export default Loading;
