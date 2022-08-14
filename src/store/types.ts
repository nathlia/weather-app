export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Weather {
    geocode: number;    
}

export interface WeatherData {
    dia: {
        dataHoje: string,        
        manha: WeatherPeriod,
        tarde: WeatherPeriod,
        noite: WeatherPeriod,
        // periodo: {
        //     uf: string;
        //     entidade: string;
        //     resumo: string;
        //     tempo: string;
        //     temp_max: Number;
        //     temp_min: Number;
        //     cod_icone: string;
        //     icone: string;
        //     dia_semana: string;
        //     umidade_max: Number;
        //     umidade_min: Number;
        //     temp_max_tende: string;
        //     cod_temp_max_tende_icone: string;
        //     temp_max_tende_icone: string;
        //     temp_min_tende: string;
        //     temp_min_tende_icone: string;
        //     estacao: string;
        //     hora: string;
        //     nascer: string;
        //     ocaso: string;
        //     fonte: string;    
        // },
    }    
}

export interface WeatherPeriod {     
    uf: string;
    entidade: string;
    resumo: string;
    tempo: string;
    temp_max: Number;
    temp_min: Number;
    cod_icone: string;
    icone: string;
    dia_semana: string;
    umidade_max: Number;
    umidade_min: Number;
    temp_max_tende: string;
    cod_temp_max_tende_icone: string;
    temp_max_tende_icone: string;
    temp_min_tende: string;
    temp_min_tende_icone: string;
    estacao: string;
    hora: string;
    nascer: string;
    ocaso: string;
    fonte: string;   
}

export interface WeatherError {
    cod: string;
    message: string;
}
  
export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
}
  
interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}
