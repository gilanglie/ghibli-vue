<template>
    <v-app >
        <v-toolbar app >
          <v-toolbar-title><img src="img/logo.png" style="height: 50px;"/></v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        
        <v-content style="
                    padding: 64px 0px 0px;
                    background: url('img/footer.png');
                    background-size: 50vw;
                    background-repeat: no-repeat;
                    background-position-x: right;
                    background-position-y: bottom;
                   ">
            <Films />
        </v-content>
    </v-app>
</template>


<script>
// @ is an alias to /src
import Films from '@/components/Films.vue'

export default {
  name: 'home',
  components: {
    Films
  },
  data: () => ({
    menuVisible: false,
    drawer: false
  }),

}
</script>