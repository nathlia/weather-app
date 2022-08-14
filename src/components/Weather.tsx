import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

// interface Previsao {
//   previsao: Weather;
// }


const Weather: FC<WeatherProps> = ({ data }) => { 
  // const dia = new Date(13/08/2022);
  console.log(data);

  return(
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{marginBottom: 50}}>Previsão do Tempo</h1>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.dia.manha.entidade}</p>
              {/* <p className="title"><img src={data.dia.['manha'].cod_icone} alt=""/></p> */}
            </div>
          </div>
        
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Manha</p>
              <div className="title">
                <p className="mb-2">{data.dia.manha.temp_max.toString()}°C</p>
              </div>
            </div>
            <div>
              <p className="heading">Tarde</p>
              <div className="title">
                <p className="mb-2">{data.dia.tarde.temp_max.toString()}°C</p>
              </div>
            </div>
            <div>
              <p className="heading">Noite</p>
              <div className="title">
                <p className="mb-2">{data.dia.noite.temp_max.toString()}°C</p>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
}

export default Weather;