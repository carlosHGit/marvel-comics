import React, { Fragment } from 'react'
import { convertDate } from '@utilities/getDate';
import Image from 'next/image'
import { GlobalStyles } from '@styles/globalStyles';
import styled from 'styled-components';


export default function ComicItem({ comic }) {
  return (
    <Fragment>
      <ComicItemStyled>
        <a href={comic.urls[0].url} target="_blank">
          <Image 
          objectFit='fill'
          width={250}
          height={390}
          src={`${comic.thumbnail.path}.jpg`} 
          alt={comic.title} />
        </a>
        <div>
            <p>{comic.title}</p>
            <p>{comic.creators.items[0] ? comic.creators.items[0].name : 'No Disponible'}</p>
            <p>{convertDate(comic.dates[1].date)}</p>
            <a>{`${comic.prices[0].price} USD`}</a>
        </div>
      </ComicItemStyled>
    </Fragment>
  )
}

export const ComicItemStyled = styled.section`
  display: grid;
  place-items: center;
  background-color: ${GlobalStyles['dark-light']};
  width: 420px;
  height: 660px;


  a:first-child {
  border: 10px solid ${GlobalStyles.black};
  border-bottom: 7px solid ${GlobalStyles.black};
  object-fit: cover;
  background-color:${GlobalStyles.black}
}

div {
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 3px 3px rgba(56, 55, 55, 0.2);
  box-sizing: border-box;
  background-color: ${GlobalStyles.white};
  display: flex;
}


div p:nth-child(1) {
  font-weight: bold;
  font-size: ${GlobalStyles.md};
}

div p:nth-child(2) {
  font-size: ${GlobalStyles.sm};
  margin-top: 0;
  margin-bottom: 0;
  color: ${GlobalStyles['dark-light']};
  margin-top: 24px;
}

div {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
  width: 100%;
  display:block;
}

div a {
  font-size:  ${GlobalStyles.lg};
  margin-right: 24px;
  float: right;
  background-color: ${GlobalStyles['price-red']};
  padding: 6px 28px;
  color: ${GlobalStyles.white};
}

div a:hover {
  color: ${GlobalStyles.white};
  box-shadow: 0 8px 19px ${GlobalStyles['blue-marvel']};
  transition: all 0.2s ease;
}

@media (max-width: 640px) {
  
  width: 300px;

  div a {
    font-size: ${GlobalStyles.sm};
  }

  a:first-child() {
    border: 4px solid ${GlobalStyles.sm};
  }
}
`
