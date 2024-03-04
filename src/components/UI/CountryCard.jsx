import React from "react";
import { getCapitalText } from "../../utils/getTexts";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  // necesita el objeto pais como parametro
    const capital = getCapitalText(country.capital)


  return (
    <Link to={`/${country.name.common}`} className="p-4 dark:bg-cyan-800 dark:text-white bg-indigo-400 max-w-[320px] mx-auto rounded-xl hover:scale-[.9] transition-transform duration-500">
     
        <img className="aspect-[2/1] w-full object-cover " src={country.flags.png} alt="" />
      
      <div className="p-3 grid gap-2">
        <h2 className="justify-self-center">{country.name.common}</h2>
        <p>
            Capital: <span>{capital}</span>
        </p>
        <p>Region: <span>{country.region}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
