import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { GlobalStyles } from '@styles/globalStyles'
import logoBuscar from '@icons/buscar_icon.svg'


export default function Navbar() {
  const [title, setTitle] = useState('')
  return (
    <NavbarStyle>
      <input
        onChange={event => setTitle(event.target.value)}
        name='input'
        type="search"
        placeholder="   Search" />
    <Link href={`/${title}`}>
      <a >
        <Image
          width= {40}
          height= {40}
          src={logoBuscar}
          alt="input-icon" />
      </a>
    </Link>
    </NavbarStyle>
  )
}


export const NavbarStyle = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  margin: 50px;
  color: ${GlobalStyles.black};

  input {
    padding: 15px 15px 15px 35px;
    width: 70%;
    margin: 0;
    font-size: ${GlobalStyles.md};
  }
  
  a {
  position: absolute;
  top: 10%;
  left: 15%;
  }

  input::placeholder{
    color: ${GlobalStyles['price-red']};
    text-align: center;
    width: 80%;
}
`