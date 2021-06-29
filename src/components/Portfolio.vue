<template>
  <div id="main">
    <b-container fluid="sm" class="container">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="title">{{ portfolio.title }}</h1>
          </div>
        </div>
        <b-row class="mb-4">
          <b-col class="mediasmall">
            <b-card
              title="Calculatrice"
              img-src="../assets/p_calc.png"
              img-alt="Calculatrice"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project08desc }}</p>
                <p>{{ portfolio.project08st }}</p>
              </b-card-text>
              <b-button class="btn-cv" target="_parent"
                ><router-link :to="{ name: 'Calc' }">{{
                  portfolio.seemore
                }}</router-link></b-button
              > </b-card
            >"
          </b-col>

          <b-col class="mediasmall">
            <b-card
              title="Ballons"
              img-src="../assets/p_ballons.png"
              img-alt="Ballons"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project07desc }}</p>
                <p>{{ portfolio.project07st }}</p>
              </b-card-text>
              <b-button
                class="btn-cv"
                href="https://github.com/Louis-Allard/ballon"
                target="_blank"
                >Voir les sources</b-button
              > </b-card
            >"
          </b-col>

          <b-col class="mediasmall">
            <b-card
              title="MazeRunner"
              img-src="../assets/p_labyrinthe.png"
              img-alt="MazeRunner"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project06desc }}</p>
                <p>{{ portfolio.project06st }}</p>
              </b-card-text>
              <b-button
                class="btn-cv"
                href="https://github.com/Louis-Allard/labyrinthe"
                target="_blank"
                >Voir les sources</b-button
              > </b-card
            >"
          </b-col>
        </b-row>
        <!-- -->
        <b-row class="mb-4">
          <b-col class="mediasmall">
            <b-card
              title="Xeno"
              img-src="../assets/p_xeno.png"
              img-alt="Xeno"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project05desc }}</p>
                <p>{{ portfolio.project05st }}</p>
              </b-card-text>
              <b-button
                class="btn-cv"
                href="https://www.xenoapp.com"
                target="_blank"
                >{{ portfolio.seemore }}</b-button
              > </b-card
            >"
          </b-col>

          <b-col class="mediasmall">
            <b-card
              title="Trenois Decamps"
              img-src="../assets/p_td.png"
              img-alt="Trenois Decamps"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project04desc }}</p>
                <p>{{ portfolio.project04st }}</p>
              </b-card-text>

              <b-button
                class="btn-cv"
                href="https://www.trenois.com"
                target="_blank"
                >{{ portfolio.seemore }}</b-button
              > </b-card
            >"
          </b-col>

          <b-col class="mediasmall">
            <b-card
              title="Watcha"
              img-src="../assets/p_watcha.png"
              img-alt="Watcha"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project02desc }}</p>
                <p>{{ portfolio.project02st }}</p>
              </b-card-text>

              <b-button
                class="btn-cv"
                href="https://upbeat-lumiere-02bb22.netlify.app/"
                target="_blank"
                >{{ portfolio.seemore }}</b-button
              > </b-card
            >"
          </b-col>
        </b-row>
        <!-- -->
        <b-row class="mb-4">
          <b-col class="mediasmall">
            <b-card
              title="PongGame"
              img-src="../assets/p_pong.png"
              img-alt="PongGame"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project01desc }}</p>
                <p>{{ portfolio.project01st }}</p>
              </b-card-text>

              <b-button
                class="btn-cv"
                href="https://kind-borg-d58179.netlify.app/"
                target="_blank"
                >{{ portfolio.seemore }}</b-button
              >
            </b-card>
          </b-col>
          <b-col class="mediasmall">
            <b-card
              title="EasterEggFight"
              img-src="../assets/p_eastereggfight.png"
              img-alt="EasterEggFight"
              img-top
              tag="article"
              class="article"
            >
              <b-card-text>
                <p>{{ portfolio.project03desc }}</p>
                <p>{{ portfolio.project03st }}</p>
              </b-card-text>

              <b-button
                class="btn-cv"
                href="https://nervous-minsky-7b53b9.netlify.app/"
                target="_blank"
                >{{ portfolio.seemore }}</b-button
              > </b-card
            >"
          </b-col>
        </b-row>
      </div>
    </b-container>
    <FooterNetwork />
  </div>
</template>

<script>
import { portfolio } from "../lng/fr";
import FooterNetwork from "./FooterNetwork.vue";
import "../sass/portfolio.scss";

export default {
  name: "Portfolio",
  components: {
    FooterNetwork
  },
  data() {
    return {
      portfolio,
      projects: []
    };
  },
  mounted() {  
    document.title = "Louis Allard - Mes projets";  
  },   
};
</script>
