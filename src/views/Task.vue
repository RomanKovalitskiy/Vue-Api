<template>
  <v-container 
  >
    <v-layout 
    row 
    v-for="user of users"
    :key="user.id"
    class="mb-5"
    >
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/ali.png"
            height="300px"
          >
            <v-layout
              column
              fill-height
            >
              <v-card-title>
                <v-spacer></v-spacer>
  
                <v-btn dark icon class="mr-3">
                  <v-icon>edit</v-icon>
                </v-btn>
  
                <v-btn dark icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-card-title>
  
              <v-spacer></v-spacer>
  
              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5">{{user.name}}</div>
              </v-card-title>
            </v-layout>
          </v-img>
  
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">phone</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{user.phone}}</v-list-tile-title>
                <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
              </v-list-tile-content>
  
              <v-list-tile-action>
                <v-icon>chat</v-icon>
              </v-list-tile-action>
            </v-list-tile>
  
            <v-list-tile >
              <v-list-tile-action>
                <v-icon color="indigo">web</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{user.website}}</v-list-tile-title>
                <v-list-tile-sub-title>website</v-list-tile-sub-title>
              </v-list-tile-content>
  
              <v-list-tile-action>
                <v-icon>chat</v-icon>
              </v-list-tile-action>
            </v-list-tile>
  
            <v-divider inset></v-divider>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">mail</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{user.email}}</v-list-tile-title>
                <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
  
            <v-list-tile >
              <v-list-tile-action>
                <v-icon color="indigo">whatshot</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{user.username}}</v-list-tile-title>
                <v-list-tile-sub-title>whatshot</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
  
            <v-divider inset></v-divider>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">location_on</v-icon>
              </v-list-tile-action>
  
              <v-list-tile-content>
                <v-list-tile-title>{{user.address.suite}} {{user.address.street}}</v-list-tile-title>
                <v-list-tile-sub-title>{{user.address.city}} {{user.address.zipcode}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        //
      };
    },
    computed: {
      users () {
        return this.$store.state.users;
      }
    },
    mounted() {
      this.$store.dispatch('fetchInfoUsers', this.$store.state.numberPosts);
    },
    updated() {

      let pageHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

      window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let currentScroll = scrollTop + clientHeight;

        if ( pageHeight === currentScroll) {
          this.$store.dispatch('fetchInfoUsers', this.$store.state.numberPosts);
        }
        
      };
    }
  };
</script>

<style scoped>

</style>
