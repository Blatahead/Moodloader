<template>
	<button type="button" id="btn" @click="redirectAccueil">Aller à mon tableau de bord</button>
</template>

<script>
export default {
	name: 'BoutonNoirToBoardComp',
	methods: {
		redirectAccueil(){
			this.$router.push({name:'Accueil'});
		}
	}
};
</script>

<style scoped>
#btn{
	background-color: #33383D;
	color: white;
	font-size: 16px; 
	font-weight: bold;
	border-radius: 20px;
	align-self: center;
	width: 258px;
	height: 46px;
	transition-duration: 0.3s;
}

#btn:hover{
	background-color: #5f6061;
	transition-duration: 0.3s;
	cursor: pointer;
}
</style>