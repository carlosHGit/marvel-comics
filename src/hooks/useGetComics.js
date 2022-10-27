import axios from "axios";
import { useEffect, useState } from "react";
import MarvelAPI from "@utilities/buildLink";

const useGetComics = (nameStart) => {
  const API = MarvelAPI.getComics({ nameStartsWith: nameStart })
  const [comics, setComics] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setComics(response.data.data.results)
  }, []);

  return comics

};

export default useGetComics;