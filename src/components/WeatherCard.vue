<template>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <div class="today forecast">
                    <div class="forecast-header">
                        <div class="day">{{ time }}</div>
                        <div class="date">{{ date }}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="">Today</div>
                        <div class="location">{{ cityName }}, {{ countryName }}</div>
                        <div class="degree">
                            <div class="num">{{ todayTemp }}<sup>o</sup>C</div>
                            <div class="forecast-icon">
                                <img :src="weatherIcon" alt="" width=90>
                            </div>
                        </div>
                        <span>Weather : {{ weather }}</span>
                        <span>Humidity: {{ humidity }}</span>
                    </div>
                </div>


                <div>
                    <div class="forecast" v-for="list in weatherDetails">

                        <div class="forecast-header">
                            <div class="day">{{ list.dt_txt }}</div>
                        </div>
                        <div class="forecast-content">
                            <div class="forecast-icon">
                                <img :src="this.getIconSrc(list.weather[0].icon)" alt="image" width=48>
                            </div>
                            <div class="degree">{{ list.main.temp }}</div>
                            <p>{{ list.weather[0].description }}</p>
                            <p>Humidity: {{ list.main.humidity }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { WeatherForecastService } from '@/services/WeatherForcastService'
export default {
    name: "WeatherCard",
    data: function () {
        return {
            api_key: 'e09a1e2ecc6bc9a490647c9076ba82dd',
            base_url: 'https://api.openweathermap.org/data/2.5/',

            city: '',

            time: '',
            date: '',
            weather: '',
            humidity: '',
            todayTemp: '',
            weatherIcon: '',

            weatherDetails: [],

            cityName: '',
            countryName: '',
            hourlyWeatherIcon: '',
            hourlyTemp: '',
            hourlyWeather: '',
            hourlyTime: '',
            hourlyDate: ''
        }
    },
    props: {
        cityInput: { type: String, required: true }
    },
    created: async function () {
        this.getDate();
        this.getDay();
        this.city = this.cityInput;

        try {
            let cityDetail = await (await WeatherForecastService.getCityDetails(this.city, this.api_key)).data;
            this.weather = cityDetail.weather[0].description;
            this.humidity = cityDetail.main.humidity;
            this.todayTemp = Math.floor(cityDetail.main.temp);
            let iconCode = cityDetail.weather[0].icon;
            this.weatherIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";

            let weatherDetailsForThreeHoursInterval = await (await WeatherForecastService.getThreeHourIntervalHourlyData(this.base_url, this.city, this.api_key)).data;
            this.weatherDetails = weatherDetailsForThreeHoursInterval.list.slice(0, 7);

            this.cityName = weatherDetailsForThreeHoursInterval.city.name;
            this.countryName = weatherDetailsForThreeHoursInterval.city.country;

        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        getDay: function () {

            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const today = new Date();
            const time = days[today.getDay()];
            this.time = time;
        },
        getDate: function () {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const today = new Date();
            const date = today.getFullYear() + ' - ' + months[(today.getMonth() + 1)] + ' - ' + today.getDate();
            this.date = date;
        },
        getIconSrc(iconCode) {
            return "http://openweathermap.org/img/w/" + iconCode + ".png";
        },
        getFloorValue(value) {
            return Math.floor(value);
        }
    }
}
</script>

<style>
</style>
