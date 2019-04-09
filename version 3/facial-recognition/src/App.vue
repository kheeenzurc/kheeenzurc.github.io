<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <span class="font-weight-light">Facial Recognition</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
        <v-btn flat color="primary">
          <router-link to="/about">
            About
          </router-link>
        </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer class="pa-3">
      <span class="font-weight-medium">Taguig City University</span>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
 .v-toolbar.theme--dark a {
    text-decoration: none;
    color: #FFF;
 }
</style>
