<template>
  <v-container 
  fill-height
  >
    <v-layout
    text-xs-center
    align-center justify-center row fill-height
    >
      <v-flex
      xs12
      >
        <h1 class="display-2 font-weight-bold mb-3">
          {{ title_task }}
        </h1>
        <v-layout 
        row  
        justify-center>
          <v-flex 
          xs6
          >
            <p class="subheading font-weight-regular">
              {{ Description }}
            </p>
          </v-flex> 
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title_task: "Тестовое задание",
        Description: "Создать SPA на VueJS, которое будет делать запрос на любой открытый API (flickr, instagram и тд) и выводить список популярных постов / картинок / чего-то еще. Приложение должно состоять из двух страниц - главная с коротким описанием и собственно страницы списка. Список может быть потенциально бесконечным. Для хранения данных использовать Vuex"
      }
    }
  }
</script>
