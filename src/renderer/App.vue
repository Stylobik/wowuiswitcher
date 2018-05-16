<template>
	<div id="app">
		<v-app>
			<router-view></router-view>
		</v-app>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons");
/* Global CSS */
#pathtext {
	margin-left: 5px;
}
.container {
	padding: 0;
}
#ui-li {
	width: 30%;
}
#ui-info {
	width: 70%;
}
#uiTopBtn {
	width: 100%;
	display: flex;
	justify-content: space-around;
}
</style>

