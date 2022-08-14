import moment from 'moment';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR, WeatherPeriod } from '../types';

export const getWeather = (geocode: number): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    //var geocode = "4316907";
    var dataHoje = moment(new Date()).format('DD/MM/YYYY');
     
    try {
      const res = await fetch(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`);

      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      let wd: WeatherData = {
        dia: {
          dataHoje: dataHoje,          
          manha: resData[geocode][dataHoje].manha,
          tarde: resData[geocode][dataHoje].tarde, 
          noite: resData[geocode][dataHoje].noite, 
        }
      }
      dispatch({
        type: GET_WEATHER,
        payload: wd
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: "Unexpected Error ocurred",                      
      });
      console.log(err);
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}