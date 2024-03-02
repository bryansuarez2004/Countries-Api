import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeCurrentPage, filterCountriesByNameAndRegion } from "../store/slices/app.slice";
import { useForm } from "react-hook-form";

const Form = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm();

  const handleSearch = (e) => {
    console.log(watch());
    dispatch(filterCountriesByNameAndRegion(watch()));
    dispatch(changeCurrentPage(1))
    //seteando la current page a 1 cada vez que se haga una busqueda y filtrado, ademas se hace aqui porque si se hace en app se vuelve a renderizar ese componente al volver a la pagina principal y se seteara a 1, se perdera el valor anterior del estado global 
  };


  return (
    <form
    onSubmit={(e)=>e.preventDefault()  }
      onChange={handleSearch}
      className="p-5 flex flex-col pt-10 gap-5 sm:flex-row justify-center dark:text-white"
    >
      <div className="bg-teal-300 dark:bg-cyan-800 dark:shadow-cyan-800 flex  w-full gap-2 items-center max-w-[600px] p-2 rounded-lg shadow-lg shadow-teal-200 pl-6">
        <FaSearch className="text-xl" />
        <input
          {...register("country")}
          type="text"
          className="bg-transparent outline-none w-full "
        />
      </div>
      <select
        {...register("region")}
        id=""
        className="bg-teal-300 dark:bg-cyan-800 dark:shadow-cyan-800 w-max p-2 rounded-lg shadow-lg shadow-teal-200 "
      >
        <option value="">All Countries</option>
        <option value="Ame">America</option>
        <option value="Eur">Europa</option>
        <option value="Afr">Africa</option>
        <option value="Oce">Oceania</option>
        <option value="Ant">Antartida</option>
      </select>
    </form>
  );
};

export default Form;
