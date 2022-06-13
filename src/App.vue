<template>
	<div class="site-content">
		<Navbar />

		<div class="hero"
			v-bind:style="{ 'background-image': 'url(' + require('../src/assets/images/banner.png') + ')' }">
			<div class="container">
				<!-- <form action="#" class="find-location">
						<input type="text" placeholder="Find your location...">
						<input type="submit" value="Find">
					</form> -->
			</div>
		</div>
		
		<router-view/>

		

		<DetailContent />
		<Footer />
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import DetailContent from "./components/DetailContent.vue";
export default {
	components: {
		Navbar,
		Footer,
		DetailContent
	}
}
</script>

<style>
@import "./style.css";
@import "./assets/fonts/font-awesome.min.css"
</style>
