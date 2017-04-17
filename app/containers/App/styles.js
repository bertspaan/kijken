/* global __CONFIG__ */

import styled from 'styled-components'

const headerHeight = __CONFIG__.cssVariables.headerHeight

export const Container = styled.div`
  height: 100%;
  background-color: black;
`

export const Contents = styled.div`
  overflow-y: auto;

  position: absolute;
  width: 100%;
  top: ${headerHeight};
  bottom: 0;
`
