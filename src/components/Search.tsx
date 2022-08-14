import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertAction";
import { setLoading, getWeather } from "../store/actions/weatherActions";
import { MunicipiosObj } from "../util/municipios";

interface SearchProps {
    title: string;
}
  
const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number(city) === 0) {
      return dispatch(setAlert('Selecione uma cidade'));
    }

    if (city) {
      dispatch(setLoading());
      dispatch<any>(getWeather(Number(city)));
      setCity('');
    } else {
      return dispatch(setAlert('Nao foi possível achar cidade!'));        
    }      
  }

  return(
    <div className="hero is-dark has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler}>
            <div className="select is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>
              <select value={city} onChange={changeHandler}>
              <option value="0">Selecione a cidade...</option>
              <option value="4316907">Santa Maria</option>
              <option value="4314902">Porto Alegre</option>
              <option value="3550308">São Paulo</option>              
              </select>
            </div>          
            <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );  
}
  
  export default Search;
