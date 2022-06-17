<template>
    <div class="hero"
        v-bind:style="{ 'background-image': 'url(' + require('../assets/images/featured-image-1@2x.jpg') + ')' }">
        <div class="container">
            <form class="find-location">
                <input type="text" placeholder="Find Your Country..." v-model="cityInput"
                    @keypress.enter="setCityNameOnEnter">
                <input type="submit" value="Find" @click="setCityNameOnClick">
            </form>
        </div>
    </div>

    <!-- <pre>name: {{ this.cityName }}</pre>
    <pre>input: {{ this.cityInput }}</pre> -->
    <div v-if="cityName != null">
        <WeatherCard :city-input="cityName"></WeatherCard>
    </div>
</template>

<script>
// @ is an alias to /src
import WeatherCard from '@/components/WeatherCard.vue'
export default {
    name: 'SearchView',
    components: {
        WeatherCard
    },
    data: function () {
        return {
            cityName: null,
            cityInput: '',
        };
    },
    methods: {
        setCityNameOnEnter: function (e) {
            this.cityName = this.cityInput;
            this.cityInput = '';
        },
        setCityNameOnClick: function (e) {
            this.cityName = this.cityInput;
            this.cityInput = '';
        },
    }
}
</script>