import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="heading has-text-centered">
          {data.dia.manha.entidade}, {data.dia.manha.dia_semana}
        </h1>
        <p className="heading" id="primary">
          Temperatura do dia:
        </p>
        <div className="columns">
          <div className="column">
            <div className="title">
              <div>
                <div className="heading" id="primary">
                  Max:
                </div>
                <p className="mb-2" id="white-text">
                  {data.dia.manha.temp_max.toString()}°C
                </p>
              </div>
              <div className="heading" id="primary">
                Tendência:<img src=""></img> {data.dia.manha.temp_max_tende}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="title">
              <div>
                <div className="heading" id="primary">
                  Min:
                </div>
                <p className="mb-2" id="white-text">
                  {data.dia.manha.temp_min.toString()}°C
                </p>
              </div>
              <div className="heading" id="primary">
                Tendência:<img src=""></img> {data.dia.manha.temp_min_tende}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <p className="heading">Manha</p>
          <div className="title">
            <div>
              <img src=""></img>
            </div>
            <div className="heading" id="primary">
              {data.dia.manha.resumo}
            </div>            
          </div>
        </div>

        <div className="column">
          <p className="heading">Tarde</p>
          <div className="title">
            <div>
              <img src=""></img>
            </div>
            <div className="heading" id="primary">
              {data.dia.tarde.resumo}
            </div>
          </div>
        </div>

        <div className="column">
          <p className="heading">Noite</p>
          <div className="title">
            <div>
              <img src=""></img>
            </div>
            <div className="heading" id="primary">
              {data.dia.noite.resumo}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
