 /* global __CONFIG__ */

import styled from 'styled-components'

const headerHeight = __CONFIG__.cssVariables.headerHeight

export const StyledHeader = styled.header`
  background-color: #003830;
  color: white;
  line-height: 1;
  overflow: hidden;
  padding: 5px;
  height: ${headerHeight};

  & h1 {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }

  & a {
    font-size: 20px;
    color: white;
    margin-left: 1em;
  }
`
