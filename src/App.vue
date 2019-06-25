<template>
  <v-app>
    <v-toolbar 
    app
    fixed
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ title_text_first }}</span>
        <span class="font-weight-light">{{ title_text_last }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn 
          flat
          router
          v-for="(item, index) in itemMenu"
          :key="index"
          :to="item.router"
          >{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      title_text_first: "test",
      title_text_last: "task",
      itemMenu: [
        {title: "Description", router: "/"},
        {title: "Task", router: "/task"}
      ]
    }
  }
}
</script>
