<template>
	<div class="site-content">
		<Navbar />

		
		
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
