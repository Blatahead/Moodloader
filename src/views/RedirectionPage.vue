<template>
	<div class="container">
		<div class="text">
			<h2>Hello !</h2>
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
h2{
	font-size: 24px;
	color: #33383D;
}
.container{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 298px;
	width: 100%;
}
</style>