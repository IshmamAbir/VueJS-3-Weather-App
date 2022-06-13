<template>
<div class="site-header">
				<div class="container">
					<a href="index.html" class="branding">
						<img src="../assets/images/logo.png" alt="" class="logo">
						<div class="logo-type">
							<router-link class="site-title" to="/">Weather WebApp</router-link>
							<router-link class="site-description"  to="/">Check Daily Weather Forecast</router-link>
						</div>
					</a>

					<!-- Default snippet for navigation -->
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item current-menu-item"><router-link to="/">Home</router-link></li>
							<!-- <li class="menu-item"><router-link to="/search">Search Cities</router-link></li> -->
							<li class="menu-item"><router-link to="/about">About</router-link></li>
						</ul> <!-- .menu -->
					</div> <!-- .main-navigation -->

					<div class="mobile-navigation"></div>

				</div>
			</div> <!-- .site-header -->
</template>

<script>
export default{
    name:"Navbar",
    
}
</script>

<style></style>
