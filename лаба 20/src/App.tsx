import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./pages/header";
import Footer from "./pages/footer";
import Category from "./pages/Category"
import NotFound from "./pages/NotFound";
import Inputs from "./pages/Inputs";

import {moviesAPI, MovieType} from "./api/api";

type content= {
    Title:string,
    Year:string,
    Type:string,
    Poster:string
}
const Rout = () => {
    const [movies, setMovies] = useState<MovieType[]>([])
    const fetchMovies = async (_title:string, _type:string)=>{
 
        const response = await moviesAPI.getMovies(_title, _type)
        setMovies(response);
    }
    const [location, handlerLocation] = useState('');
    const changePath=(str:string)=>{
        handlerLocation(str);
    }
    let type:string ='';
    switch (location){
        case "/movies":type='movie';break;
        case"/all":type='';break;
        case "/series":type='series';break
    }


  return (
      <BrowserRouter>
          <Header givePath={changePath}/>
          <Inputs searchMovies={fetchMovies}
                  type={type}/>
        <Routes>
          <Route path="/movies"  element={<Category movies={movies} type="movies"/>} />
          <Route path="/series" element={<Category movies={movies} type="series"/>} />
          <Route path="/all" element={<Category movies={movies} type="all"/>} />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
          <Footer/>
     
      </BrowserRouter>
  );
};

export default Rout;
