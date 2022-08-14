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
  
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
      setCity(e.currentTarget.value);
    }
  
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if(city.trim() === '') {
        return dispatch(setAlert('Geocode is required!'));
      }  
      
      //getGeocode(city);
      
      //var geocode = getGeocode(city);
      var geocode = 4316907;

      if (geocode) {
        dispatch(setLoading());
        dispatch<any>(getWeather(geocode));
        setCity('');
      } else {
        console.log("Nao foi possível achar cidade")
      }      
    }
  
    return(
      <div className="hero is-light has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <form className="py-5" onSubmit={submitHandler}>
              <input 
                type="text"
                className="input has-text-centered mb-2"
                placeholder="Enter city name"
                style={{maxWidth: 300}}
                value={city}
                onChange={changeHandler}
              />
              <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
            </form>
          </div>
        </div>
      </div>
    );  
  }
  
  export default Search;

function getGeocode(city: string) {
    var selectedMunicipio = getObjects(MunicipiosObj, 'nome', city);
    console.log(selectedMunicipio);

    var geocode;

    jQuery.map(selectedMunicipio, function(obj) {
        if(obj.name === city)
        geocode = obj.geocode; 
    });

    return geocode;
}

function getObjects(obj: Object, key: String, val: String) {
    var objects: any[] = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (i === key && obj === val) {
            objects.push(obj);
        }
    }
    return objects;
}
