import React from 'react'
import { Link } from 'react-router'

import { StyledHeader } from './styles'

export default function Header (props) {
  let back
  if (props.back) {
    back = (
      <Link to={props.back}>
        ⟵ terug naar overzicht
      </Link>
    )
  }

  return (
    <StyledHeader className='align-center'>
      <div className='align-center'>
        <h1>
          Bert's foto's
        </h1>
        {back}
      </div>
    </StyledHeader>
  )
}
