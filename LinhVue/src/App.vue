<template>
<div class="body">
        <div class="main-wrapper">
	<div id="app">
		<comp-module1 />
		<comp-module2 />
		<comp-module3 />
	</div>
	</div>
</div>
</template>

<script>
import CompModule1 from './components/module1.vue';
import CompModule2 from './components/module2.vue';
import CompModule3 from './components/module3.vue';
export default {
	name: 'app',
	data () {
		return {
		
		}
	},
	components: {
		CompModule1,
		CompModule2,
		CompModule3
	}
}
</script>

<style>
	#app {
		
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
