<template>
<div class="site-header">
				<div class="container">
					<a href="index.html" class="branding">
						<img src="../assets/images/logo.png" alt="" class="logo">
						<div class="logo-type">
							<h1 class="site-title">Weather WebApp</h1>
							<small class="site-description">Check Daily Weather Forecast</small>
						</div>
					</a>

					<!-- Default snippet for navigation -->
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
							<li class="menu-item"><a href="news.html">News</a></li>
							
							<li class="menu-item"><a href="contact.html">Contact</a></li>
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
