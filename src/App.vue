<template>
	<div id="app">
		<Titre/>
		<!-- <TelechargementPage/> -->
		<RouterView/>
	</div>
</template>

<script>
import Titre from './components/TitreComp.vue';
// import TelechargementPage from './views/TelechargementPage.vue'

export default {
	components: {
		Titre,
		// TelechargementPage
	}
};
</script>

<style>
#app {
	width: 500px;
	height:350px;
	background-image: url("./assets/background.png");
	background-size:cover;
	font-family: Arial, sans-serif;
	text-align: center;
	border-radius: 10px;
}
</style>