import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPage,
  getAllCountriesThunk,
} from "../store/slices/app.slice";
import CountryCard from "./UI/CountryCard";
import { pagination } from "../utils/pagination";
import SinglePage from "./UI/SinglePage";




const CountriesList = () => {
  const dispatch = useDispatch();
  const { countriesToShow, currentPage } = useSelector((store) => store.app);

  const { countriesByPage, arrayOfPages } = pagination(
    currentPage,
    countriesToShow
  );

  useEffect(() => {
    // const thereIsLastSearch = sessionStorage.getItem("busquedaAnterior");
    //  if(thereIsLastSearch){
    //   console.log('hay en la sesion');
    //  }
    // if (!thereIsLastSearch) {
    //   dispatch(getAllCountriesThunk());
    //   console.log('es false');
      
    // }

      // la forma mas sencilla de resolverlo, cada vez que se recarga la pagina, los estados globales se reinician, entonces aca solo verificas, si el estado global se reinicio, pides denuevo, si no se reinicio, entonces no haces nada dejando que tenga su valor almacenado, y se reiniciara cada vez que se recarge la pagina y su valor sera el valor inicial que le pones en initial state 
    if(countriesToShow.length === 0 ){
      dispatch(getAllCountriesThunk());

    }
    
  }, []);
  // sessionStorage.removeItem("busquedaAnterior");

  //axios.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=hello,how are you')
  // endpoint que traduce, averiguar posteriormente
 

  return (
    <>
      <div className="p-5 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {countriesByPage.map((country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </div>
      <div className="flex gap-2  mx-auto p-5 flex-wrap justify-center">
        {arrayOfPages.map((page) => {
          return <SinglePage key={page} page={page} />;
        })}
      </div>
    </>
  );
};

export default CountriesList;
