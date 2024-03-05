import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountryByName } from "../store/slices/pageCountry.slice";
import { getCapitalText, getLanguagesText, transformObjectToArray } from "../utils/getTexts";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loading from "./UI/Loading";
import axios from "axios";

const PageCountry = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { countryInPage,countriesSugerencies,isLoading } = useSelector((store) => store.pageCountry);
  const {darkMode}=useSelector((store)=>store.configure)
  const [objectLanguage, setObjectLanguage] = useState({})

  const textCap = getCapitalText(countryInPage.capital);
  const textLang = getLanguagesText(countryInPage.languages);
  const arrayOfLanguages = transformObjectToArray(countryInPage.languages)
  useEffect(() => {
    dispatch(getCountryByName(name));
  }, [name]);

  
console.log(arrayOfLanguages);
useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')

  }
  // document.documentElement.classList.toggle('dark')
},[darkMode])

useEffect(()=>{
  const realizarPeticiones = async () => {
    try {
      const promesas = arrayOfLanguages.map(async (language) => {
        const respuesta = await axios.get(`https://restcountries.com/v3.1/lang/${language}`);
        return { [language]: respuesta.data }; // Almacena el resultado en un objeto con el nombre del dato como clave
      });
   console.log(promesas);
      const resultados = await Promise.all(promesas);
      console.log(resultados);
      const nuevoEstado = resultados.reduce((acc, resultado) => ({ ...acc, ...resultado }), {});
      setObjectLanguage(nuevoEstado);
    } catch (error) {
      console.error('Error al realizar las peticiones:', error);
    }
  };

  realizarPeticiones();
},[countryInPage])

   console.log(objectLanguage);
  return (
    <>
       {isLoading && <Loading/>}
      <div className=" flex flex-col items-center p-5 mt-8 lg:flex-row justify-around gap-2 dark:text-white ">
      <Link to={"/"} className="absolute right-[20px] top-[90px] "><div className="flex   gap-2 justify-center items-center dark:bg-cyan-700 p-3 rounded-md bg-teal-300">
      <FaArrowLeftLong /> Back </div></Link>
        <img
          className="aspect-[2/1] w-full object-cover max-w-[450px]"
          src={countryInPage.flags?.png}
          alt=""
        />
        <div>
        <h2 className="font-bold text-2xl tracking-wide font-mono text-center lg:text-4xl">
          {" "}
          {countryInPage.name?.common}
        </h2>
        <p className="text-lg font-mono mb-5">
          this country{" "}
          {countryInPage.independent ? "is independent" : "not is independent"}
        </p>
        <div className="self-start sm:max-w-[450px]  sm:grid-cols-2  sm:mx-auto grid gap-2 md:gap-3">
          <div className="grid gap-2 ">
            <p className="font-bold uppercase">
              continent:{" "}
              <span className="lowercase font-medium">
                {" "}
                {countryInPage.region}
              </span>
            </p>

            <p className="font-bold uppercase">
              capitals: <span className="lowercase font-medium">{textCap}</span>
            </p>
            <p className="font-bold uppercase">
              languages:{" "}
              <span className="lowercase font-medium :">{textLang}</span>
            </p>
          </div>
          <div className=" h-min grid gap-2">
            <p className="font-bold uppercase ">
              area:{" "}
              <span className="lowercase font-medium">
                {countryInPage.area}
              </span>
            </p>
            <p className="font-bold uppercase">
              population:{" "}
              <span className="lowercase font-medium">
                {" "}
                {countryInPage.population}
              </span>
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className="p-5 bg-slate-400 w-[90%] mx-auto rounded-lg mb-5 text-xl font-bold">
      {`Continent : ${countryInPage.region}`}
        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-2  ">
          
        {countriesSugerencies.byRegion.map((country)=>{
          return <Link key={country.name.common} to={`/${country.name.common}`} className=" aspect-[2/1] rounded-lg overflow-hidden hover:scale-[.8] transition-all duration-200 cursor-pointer">
                <img className=" w-full aspect-[2/1] " src={country.flags?.png} alt="" />
          </Link>
        })}
        </div>
      </div>
      {arrayOfLanguages.map((language)=>{
        return <div className="w-[90%] bg-slate-500 mx-auto mb-7 rounded-lg p-5 text-xl font-bold" key={language}>{` Language: ${language}`}
             <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-2 ">
              {objectLanguage[language]?.map((country)=>{
                return <Link key={country.name.common} to={`/${country.name.common}`} className=" aspect-[2/1] rounded-lg overflow-hidden hover:scale-[.8] transition-all duration-200 cursor-pointer ">
                <img className=" w-full aspect-[2/1] " src={country.flags?.png} alt="" />
          </Link>
              })}
             </div>
          
        </div>
      })}
      
    </>
  );
};

export default PageCountry;
