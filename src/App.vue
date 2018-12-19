<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BrainCo</span>
        <span class="font-weight-light">Website Management</span>
      </v-toolbar-title>
      <v-spacer>
        <v-flex xs4 offset-xs3>
          <v-btn-toggle>
            <v-btn flat value="right" to="/">
              <span>上传新闻</span>
              <v-icon>dvr</v-icon>
            </v-btn>
            <v-btn flat value="justify" to="/hire">
              <span>上传职位</span>
              <v-icon>business_center</v-icon>
            </v-btn>
          </v-btn-toggle>
          <v-btn>上传至网站</v-btn>
        </v-flex>
      </v-spacer>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
