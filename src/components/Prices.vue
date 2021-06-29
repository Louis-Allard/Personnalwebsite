<template>
  <div>
    <b-container id="prices">
      <div class="element">
        <span class="title">{{ prices.title01 }}</span>
        <div class="price">{{ prices.price01 }}</div>
        <div class="describe">{{ prices.describe01 }}</div>
        <div class="liste_items">
          <ul>
            <li class="li-yes">{{ prices.el01 }}</li>
            <li class="li-yes">{{ prices.el02 }}</li>
            <li class="li-no">{{ prices.el03 }}</li>
            <li class="li-no">{{ prices.el04 }}</li>
            <li class="li-no">{{ prices.el05 }}</li>
            <li class="li-no">{{ prices.el06 }}</li>
            <li class="li-no">{{ prices.el07 }}</li>
          </ul>
        </div>
      </div>
      <div class="element">
        <span class="title">{{ prices.title02 }}</span>
        <div class="price">{{ prices.price02 }}</div>
        <div class="describe">{{ prices.describe02 }}</div>
        <div class="liste_items">
          <ul>
            <li class="li-yes">{{ prices.el01 }}</li>
            <li class="li-yes">{{ prices.el02 }}</li>
            <li class="li-yes">{{ prices.el03 }}</li>
            <li class="li-no">{{ prices.el04 }}</li>
            <li class="li-no">{{ prices.el05 }}</li>
            <li class="li-no">{{ prices.el06 }}</li>
            <li class="li-no">{{ prices.el07 }}</li>
          </ul>
        </div>
      </div>
      <div class="element">
        <span class="title">{{ prices.title03 }}</span>
        <div class="price">{{ prices.price03 }}</div>
        <div class="describe">{{ prices.describe03 }}</div>
        <div class="liste_items">
          <ul>
            <li class="li-yes">{{ prices.el01 }}</li>
            <li class="li-yes">{{ prices.el02 }}</li>
            <li class="li-yes">{{ prices.el03 }}</li>
            <li class="li-yes">{{ prices.el04 }}</li>
            <li class="li-yes">{{ prices.el05 }}</li>
            <li class="li-yes">{{ prices.el06 }}</li>
            <li class="li-no">{{ prices.el07 }}</li>
          </ul>
        </div>
      </div>
      <div class="element">
        <span class="title">{{ prices.title04 }}</span>
        <div class="price">{{ prices.price04 }}</div>
        <div class="describe">{{ prices.describe04 }}</div>
        <div class="liste_items">
          <ul>
            <li class="li-yes">{{ prices.el01 }}</li>
            <li class="li-yes">{{ prices.el02 }}</li>
            <li class="li-yes">{{ prices.el03 }}</li>
            <li class="li-yes">{{ prices.el04 }}</li>
            <li class="li-yes">{{ prices.el05 }}</li>
            <li class="li-yes">{{ prices.el06 }}</li>
            <li class="li-yes">{{ prices.el07 }}</li>
          </ul>
        </div>
      </div>
    </b-container>
<b-container>
  <div class="element opt">
   <span class="title">{{ prices.title_abo }}</span>
   <span class="txt_abo">{{ prices.txt_abo }}</span>
  </div>
</b-container>
    <FooterNetwork />
  </div>
</template>

<script>
import FooterNetwork from "./FooterNetwork.vue";
import { prices } from "../lng/fr";
import "../sass/prices.scss";
export default {
  name: "Prices",
  components: {
    FooterNetwork
  },
  data() {
    return {
      prices
    };
  },
  methods: {},
  mounted() {  
    document.title = "Louis Allard - Vos projets";  
  }, 
};
</script>
