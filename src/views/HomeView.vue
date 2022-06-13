<template>
  <div class="hero" v-bind:style="{ 'background-image': 'url(' + require('../assets/images/banner@2x.png') + ')' }">
    <div class="container">
      <!-- <form action="#" class="find-location">
						<input type="text" placeholder="Find your location...">
						<input type="submit" value="Find">
					</form> -->
    </div>
  </div>
  <div>
    <WeatherCard cityInput="Miyazaki" />
  </div>
  <br><br><br><br><br><br><br><br><br><br>
  <div>
    <WeatherCard city-input="Dhaka" />
  </div>

</template>

<script>
// @ is an alias to /src
import WeatherCard from '@/components/WeatherCard.vue'
export default {
  name: 'HomeView',
  components: {
    WeatherCard
  }
}
</script>
