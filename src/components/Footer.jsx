import React from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '@styles/globalStyles'

export const FooterStyle = styled.footer`
  height: 44px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GlobalStyles['blue-marvel']} !important;
  width: 100%;

  padding: 24px 50px;
  font-size: ${GlobalStyles.md};
  a{
    color:  ${GlobalStyles['price-red']};
    text-decoration: none;
  }
`

export default function Footer() {
  return (
    <FooterStyle>
      <a href="https://github.com/carlosHGit" target="_blank" rel="noreferrer">© 2022 Carlos Henao</a>
    </FooterStyle>
  )
}