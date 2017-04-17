import styled from 'styled-components'

export const PhotoContainer = styled.div`
  width 100%;
  height: 100%;
  padding: 10px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: ${props => props.hidden ? 'none' : 'inherit'};
`
