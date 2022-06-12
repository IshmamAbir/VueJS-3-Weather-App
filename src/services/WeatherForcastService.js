import axios from "axios";
export class WeatherForecastService{

    static weatherReport = [];

    static getWeatherForecast(){
        //TODO: retrive data from webapi
        //TODO: store in local variable
        //TODO: get data through this method
        return null;
    };

    static fetchWeather(){
        let url = this.base_url+'forecast/daily?q='+this.city+','+this.country+'&appid='+this.api_key;

    }

    static getCityDetails(city,api_key){
        let dataUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID='+api_key;
        return axios.get(dataUrl);
    }

    static getThreeHourIntervalHourlyData(baseUrl,city,api_key){
        let dataUrl = baseUrl+'forecast?q='+city+'&units=metric&APPID='+api_key;
        return axios.get(dataUrl)
    }
}