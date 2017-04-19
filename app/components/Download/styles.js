import styled from 'styled-components'

export const Container = styled.header`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 4px 6px;
  color: white;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 1000;

  display: flex;

  & a, & a:visited {
    color: white;
  }

  & ol {
    display: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  & ol li {
    margin-left: 1em;
    padding: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover ol {
    display: flex;
  }
`
