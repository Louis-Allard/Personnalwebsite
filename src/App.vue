<template>
  <div id="app">   
    <Navbar />
    <vue-page-transition name="fade-in-down">
    <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./sass/global.scss";
export default {
  name: "App",
  data(){
    return {
    }
},
  components: {
    Navbar,
  }
};
</script>