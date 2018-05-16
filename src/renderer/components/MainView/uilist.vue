<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-toolbar dense color="blue" dark>
          <v-toolbar-title>My Uis</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="add()">
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>cached</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              avatar
              ripple
              @click="toggle(index)"
              :key="item.title"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  color="grey lighten-1"
                  v-if="selected.indexOf(index) < 0"
                >star_border</v-icon>
                <v-icon
                  color="yellow darken-2"
                  v-else
                >star</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default { 
    name: 'uilist',
    data () {
      return {
        name: 'uilist',
        wowPath: myPath + '/interface',
        selected: [2],
        items: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
        ]
      }
    },
    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      },
      add () {
        console.log(this.wowPath)
      }
    }
  }
</script>