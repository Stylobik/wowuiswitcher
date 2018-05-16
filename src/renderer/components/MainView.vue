<template>
	<div id="app">
		<v-app>
				<v-container fluid fill-height class="grey darken-3">

					<v-layout v-if="show">
						<v-flex xs12 sm10 md10 offset-sm1>            
							<v-container fill-height fluid color="primary">
									<v-layout align-center>
										<v-flex text-xs-center>
											<h3 class="display-3 blue--text">Wow Ui Switcher</h3>
											<p class="subheading white--text">Please select your wow directory</p>
											<v-btn @click="choosePath()" outline color="blue">select</v-btn>
											<div class="red--text" v-if="showAlert">
												Ahem. Can't find "Interface" and "WTF" here dude are you sure this is the good folder ?
											</div>
										</v-flex>
									</v-layout>
							</v-container>
						</v-flex>
					</v-layout>

					<v-layout v-else row xs12 sm12 md12>
						<div id="ui-li" class="grey lighten-5">
							<uilist></uilist>
						</div>

						<div id="ui-info">
							<v-slide-y-transition mode="out-in">
							</v-slide-y-transition>
						</div>
					</v-layout>

				</v-container>
		</v-app>
	</div>
</template>

<script>
import uilist from './MainView/uilist'
const { dialog, BrowserWindow } = require('electron').remote
const fs = require('fs-extra')
const path = require('path')

export default {
	name: "wow_ui_switcher",
	components: { uilist },
	data () {
		return {
			show: true,
			showAlert: false, 
			myPath: undefined
		}
	},
	methods: {
		choosePath() {
			const choose = dialog.showOpenDialog({
				title: 'Select wow directory',
				BrowserWindow,
				properties: ['openDirectory']
			},(files) => {
				fs.access('' + files, fs.constants.F_OK, (err) => {
					console.log(`${files} ${err ? 'does not exist' : 'exists'}`);	
					this.show = false	
					this.myPath = files
					var wusFolder = files + '/UiSave'
					if (!fs.existsSync(wusFolder)){
					fs.mkdirSync(wusFolder)
					console.log(wusFolder + ' created')
					} else {
					console.log(wusFolder + ' already here')
					}
				});

/* 				try {
					fs.accessSync(files + '/interface', fs.constants.R_OK | fs.constants.W_OK)
					console.log('ok')
					var myPath = '' + files
					console.log(myPath)
					this.show = false
					var wusFolder = files + '/UiSave'
					if (!fs.existsSync(wusFolder)){
							fs.mkdirSync(wusFolder)
							console.log(wusFolder + ' created')
					} else {
							console.log(wusFolder + ' already here')
					}
				} catch (err) {
					this.showAlert = true					
					console.log('no')
				}	 */		
			})
		}
	}
};
</script>

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

