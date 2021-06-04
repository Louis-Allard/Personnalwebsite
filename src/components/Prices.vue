<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>&nbsp;</b-col>
      <b-col>{{ prices.title01 }}</b-col>
      <b-col>{{ prices.title02 }}</b-col>
      <b-col>{{ prices.title03 }}</b-col>
      <b-col>{{ prices.title04 }}</b-col>
    </b-row>
    <b-row>
      <b-col>{{ prices.el01 }}</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
    </b-row>    
    <b-row>
      <b-col>{{ prices.el02 }}</b-col>
      <b-col>N</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
    </b-row>     
    <b-row>
      <b-col>{{ prices.el03 }}</b-col>
      <b-col>N</b-col>
      <b-col>N</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
    </b-row>
    <b-row>
      <b-col>{{ prices.el04 }}</b-col>
      <b-col>N</b-col>
      <b-col>N</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
    </b-row>        
    <b-row>
      <b-col>{{ prices.el05 }}</b-col>
      <b-col>N</b-col>
      <b-col>N</b-col>
      <b-col>Y</b-col>
      <b-col>Y</b-col>
    </b-row>
    <b-row>
      <b-col>{{ prices.el06 }}</b-col>
      <b-col>N</b-col>
      <b-col>N</b-col>
      <b-col>N</b-col>
      <b-col>Y</b-col>
    </b-row>       
  </b-container>
</template>

<script>
import { prices } from "../lng/fr";
import "../sass/prices.scss";
export default {
  name: "Prices",
  data() {
    return {
      prices,
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>
