import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SectionHeading from '../../shared/components/stateless/SectionHeading'
import MainSection from '../../shared/components/stateless/MainSection'

const Logo = styled.img`
  display: block;
  width: 300px;
  margin: 0 auto;
`
class HomeComponent extends React.Component {
  render() {
    return (
      <MainSection>
        <Logo src="./assets/img/logo_github.png" alt="Logo Github" />
        <SectionHeading>Welcome to GitSearch</SectionHeading>
        <p>Easy and clean repository info search.</p>
      </MainSection>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/search')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(HomeComponent)