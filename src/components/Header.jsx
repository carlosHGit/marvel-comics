import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import marvelIcon from '@icons/marvel.svg'
import { GlobalStyles } from '@styles/globalStyles'

export const HeaderStyle = styled.header`
  
  display: grid;
  place-items:center;
  width: 100%;

  height: 94px;
  padding: 0 50px;
  background: ${GlobalStyles['blue-marvel']};
`

export default function Header() {
  return (
    <HeaderStyle>
      <a href="/">
        <Image
          src={marvelIcon}
          alt="logo-marvel"
          href='/'
        />
      </a>
    </HeaderStyle>
  )
}
