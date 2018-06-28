<template>
    
    <div class="films">
        <div v-if="loading" class="loading">
            <v-progress-circular :size="50" indeterminate color="primary"></v-progress-circular>
        </div>
        <v-container  grid-list-md>
            <v-layout row wrap>
                 <v-flex
                     xs6 sm4 md2 
                 v-for="film in films"
                 :key="film.id" 
                 @click="openDetail(film)"
                 >
                     <v-card
                     class="cover-card"
                     
                     >
                         <div class="card-img">
                            <img v-bind:src="'img/cover/'+ film.title.split(' ').join('_') +'.jpg'"/>
                         </div>
                     </v-card>
                 </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'films',
        data () {
          return {
            films: [],
            loading: false
          }
        }, 
        mounted() {
            this.loading = true;
            axios.get('https://ghibliapi.herokuapp.com/films').then(
            (response) => {
                this.loading = false;
                this.films = response.data;
            },(error)  =>  {
              this.loading = false;
            });
         },
        methods: {
            openDetail (data) {
              this.$store.commit('setDetail', data)
              this.$router.replace({ 'path': '/detail' })
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .loading {
        position: fixed;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        z-index: 1;
        top: 35%;
    }
    .cover-card{
        .card-img {
            max-width: 250px;
            height: 300px;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                position: absolute;
            }
        }
    }
</style>
