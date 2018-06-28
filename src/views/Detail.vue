<template>
  <div class="about" v-lazy-container="{ selector: 'img' }">
    <v-app >
        <v-toolbar dark flat class="toolbar-img" >
          <v-toolbar-side-icon @click="$router.replace({ 'path': '/' })"><v-icon>arrow_back</v-icon></v-toolbar-side-icon>
          <div class="overlay"></div>
          <img class="bg-img" v-bind:data-src="'img/bg/'+ detail.title.split(' ').join('_') +'.jpg'" style="" />
        </v-toolbar>
        <v-layout row container pb-2>
          <v-flex xs3 md2 offset-xs1>       
              <v-card class="card-float  card-img " >
                <img class="" v-bind:data-src="'img/cover/'+ detail.title.split(' ').join('_') +'.jpg'" style="" />
              </v-card> 
              <div class="sub-item">
                <v-chip label outline color="primary">
                    Tags
                </v-chip>
              </div>
          </v-flex>
          <v-flex xs9 md9 >       
              <v-card dark class="card-float container flat card-header bg-transparent" >
                  <h1 display-2> {{detail.title}} ({{detail.release_date}})</h1>
                  <div class="rating mt-3">
                      <star-rating 
                        :increment="0.01" 
                        :round-start-rating="false" 
                        :read-only="true"
                        :star-size="20"
                        :border-width="4" 
                        border-color="#d8d8d8" 
                        :rounded-corners="true" 
                        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                        :text-class="rating-text"
                        :rating="parseInt(detail.rt_score)/20"></star-rating>
                  </div>
              </v-card>  
              <v-card class="flat card-content bg-transparent pa-2" >
                  <span class="title ">{{detail.description}}</span>
                  <div class="sub-item">
                    <v-list two-line>
                        <v-list-tile>
                          <v-list-tile-avatar>
                            <img :data-src="'img/profile/'+ detail.director.split(' ').join('_') +'.jpg'">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="detail.director"></v-list-tile-title>
                            <v-list-tile-sub-title >Director</v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-avatar>
                            <img :data-src="'img/profile/'+ detail.producer.split(' ').join('_') +'.jpg'">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="detail.producer"></v-list-tile-title>
                            <v-list-tile-sub-title >Producer</v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                    </v-list>

                  </div>
              </v-card>
          </v-flex>
        </v-layout>
    </v-app>
  </div>
</template>
<script>
    export default {
        computed: {
          detail () { return this.$store.state.detail }
        }, 
        data (){
            return {
                tag: []
            }
        }
        
    }

</script>
<style lang="scss" scoped>
    .overlay{background: rgba(0,0,0,0.25);}
    .bg-transparent{
        box-shadow: none;
        background-color: transparent !important;
    }
    .toolbar-img {
        background-color: transparent !important;
        height: 300pt;
        overflow: hidden;
        .bg-img{
            z-index: -1;
            width: 100%;
            position: absolute;
            top:-25%;
        }
    }
    .card-float {
        height: auto;
        margin-top: -75px;
        line-height: 0;
        img{
            width:100%;
        }
    }
    .card-content{}
    @media screen and (max-width: 600px) {
        .toolbar-img {
            height: 100pt;
        }
    }
    @media screen and (min-width: 601px ) and (max-width: 960px) {
        .card-float {
            margin-top: -100px;
        }
        .toolbar-img {
            height: 165pt;
        }
    }
    @media screen and (min-width: 961px){
        .card-float {
            margin-top: -150px;
        }
        .card-content{
            margin-top: 75px;
        }
    }
</style>
