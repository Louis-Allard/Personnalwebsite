<template>
<div>
  <b-container class="prices">
    <div class="board">
      <span class="board-title">{{ prices.titleJumbotron }}</span>
      <hr class="my-4" />
      <p>
        {{ prices. pJumbotron}}
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
