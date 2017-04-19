import styled from 'styled-components'

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

export const Loading = styled.img`
  position: absolute;
  width: 200px;
`
