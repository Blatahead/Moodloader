<template>
	<div id="app">
		<Titre/>
		<router-view/>
	</div>
</template>

<script>
import Titre from './components/TitreComp.vue';

export default {
	components: {
		Titre
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