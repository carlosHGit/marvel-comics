import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { GlobalStyles } from '@styles/globalStyles'


const BUTTONS = ["Spider-Man", "Wolverine", "Hulk", "Thor", "Iron Man", "Black Panther",]

export default function Filters() {
  return (
    <FiltersStyle>
      <nav>
        <ul>
          {
            BUTTONS.map(buton => (
              <li key={'buton' + buton}>
                <Link href={`/${buton}`}>
                <a>
                  <div>{`${buton}`}</div>
                </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </FiltersStyle>
  )
}

export const FiltersStyle = styled.section`

  nav {
  margin: 50px 0px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

ul li {
  list-style: none;
}

ul li div {
  margin: 10px;
  font-size: ${GlobalStyles.md};
  text-decoration: none;
  color: ${GlobalStyles.black};
  width: 250px;
  height: 60px;
  display: grid;
  place-items: center;
  background-color: ${GlobalStyles['dark-light']};
  color: ${GlobalStyles.white};
}

ul li div {
  border-radius: 3px; /* redondear bordes */
  position: relative;
  z-index: 1;
  overflow: hidden;
}
div:hover {
  color: ${GlobalStyles['blue-marvel']}; /* color de fuente hover */
}
ul li div::after {
  content: "";
  background: ${GlobalStyles['price-red']}; /* color de fondo hover */
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}
ul li div:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

a {
  text-decoration: none;
}
`
