<template>
  <div>
    <b-container id="prices">
      <!--
      <div class="board">
        <span class="board-title">{{ prices.titleJumbotron }}</span>
        <hr class="my-4" />
        <p>
          {{ prices.pJumbotron }}
        </p>
      </div>
      <b-row id="title-row">
        <b-col>&nbsp;</b-col>
        <b-col class="title">{{ prices.title01 }}</b-col>
        <b-col class="title">{{ prices.title02 }}</b-col>
        <b-col class="title">{{ prices.title03 }}</b-col>
        <b-col class="title">{{ prices.title04 }}</b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el01 }}</b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el07 }}</b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el02 }}</b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el03 }}</b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el04 }}</b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el05 }}</b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el06 }}</b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/no.png"/></b-col>
        <b-col><img class="validate" src="../assets/yes.png"/></b-col>
      </b-row>
      <b-row class="row-price">
        <b-col class="elements">{{ prices.el08 }}</b-col>
        <b-col class="abo">15</b-col>
      </b-row> 
      -->    
      <div class="element">
        <span class="title">{{ prices.title01 }}</span>
        <div class="price">{{ prices.price01 }}</div>
        <div class="describe">{{ prices.describe01 }}</div>
      </div>
      <div class="element">
        <span class="title">{{ prices.title02 }}</span>
        <div class="price">{{ prices.price02 }}</div>
        <div class="describe">{{ prices.describe02 }}</div>
      </div>
      <div class="element">
        <span class="title">{{ prices.title03 }}</span>
        <div class="price">{{ prices.price03 }}</div>
        <div class="describe">{{ prices.describe03 }}</div>
      </div>
      <div class="element">
        <span class="title">{{ prices.title04 }}</span>
        <div class="price">{{ prices.price04 }}</div>
        <div class="describe">{{ prices.describe04 }}</div>
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
  mounted() {}
};
</script>
