import styled from 'styled-components'

import loading from 'images/loading.gif'

export const PhotoContainer = styled.div`
  width 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 999;
  display: ${props => props.hidden ? 'none' : 'inherit'};
`

export const Loading = styled.div`
  position: absolute;
  box-sizing: border-box;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-image: url(${loading});
  background-position: center center;
  background-repeat: no-repear;
`
