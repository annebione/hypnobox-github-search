import styled from 'styled-components'

const Header = styled.header`
    display: block;
    padding: 20px 0;
    margin: 0 auto;
    height: 25px;
    text-align: center;
    background-color: #3CE8B0;
    & > a {
        padding: 10px 15px;
        vertical-align: center;
        text-align: center;
        text-decoration: none;
        letter-spacing: 2px;
        font-weight: 510;
        color: white;
        transition: color 200ms;
      }
      & > a:hover {
        color:	#13a474; 
      }
`

export default Header

