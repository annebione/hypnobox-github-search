import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Search from '../search'
import Header from '../../shared/components/stateless/Header'
import Container from '../../shared/components/stateless/Container'


class Layout extends React.Component {

  render() {
    return (
      <main>
        <Header>
          <Link to="/">Página Inicial</Link>
          <Link to="/search">Busca</Link>
        </Header>
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Container>
      </main>
    )
  }
}


export default Layout