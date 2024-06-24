<template>
	<div class="container">
		<div class="text">
			<h1>Hello !</h1>
			<h2>Téléchargez les ressources de votre</h2>
			<h2>DVL que vous voulez.</h2>
		</div>
		<BoutonNoirToBoardComp />
	</div>
</template>

<script>
import BoutonNoirToBoardComp from "../components/BoutonNoirToBoardComp.vue";

export default {
	components: {
		BoutonNoirToBoardComp
	}
};
</script>

<style scoped>
.container{
	display: flex;
	flex-direction: column;
	height: 298px;
	width: 100%;
}
</style>