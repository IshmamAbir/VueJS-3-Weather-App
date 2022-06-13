<template>
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
