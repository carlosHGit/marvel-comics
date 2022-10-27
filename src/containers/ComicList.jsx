import ComicItem from '@components/ComicItem'
import React from 'react';
import useGetComics from '@hooks/useGetComics';
import styled from 'styled-components';


export default function ComicList({ comics }) {
  if (comics) {
    return (
      <ComicListStyled >
        {
          comics.map(comic => (
            <ComicItem comic={comic} key={'comics' + comic.id} />
          ))
        }
      </ComicListStyled>
    )
  } else {
    const comics = useGetComics()
    return (
      <ComicListStyled >
        {
          comics.map(comic => (
            <ComicItem comic={comic} key={'comics' + comic.id} />
          ))
        }
      </ComicListStyled>
    )
  }
}


export const ComicListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 420px);
  gap: 26px;
  place-content: center;


  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, 270px);
    gap: 56px;
}
`