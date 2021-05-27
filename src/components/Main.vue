<template>
  <div id="main">
    <b-container fluid class="p-4 container">
      <b-row>
        <b-col sm="8">
          <div class="content mediasm-content">
            <span class="job">{{ main.job_title }}</span>
            <h1>{{ main.job_name }}</h1>
            <div class="alltxt">
              <p class="text" v-html="main.job_content">
                {{ main.job_content }}
              </p>
              <p class="text" v-html="main.job_ccl">{{ main.job_ccl }}</p>
            </div>
          </div>
        </b-col>
        <b-col sm="4">
          <div class="shine">
            <div>
              <div>
                <img src="../assets/me_color.jpg" alt="Photo" class="profile mediasm" />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="mediasm">
        <b-col>
          <b-button class="btn-cv">
            <router-link :to="{ name: 'Cv' }">{{ main.btn_cv }}</router-link>
          </b-button>
        </b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col sm="4">
          <b-img
            fluid
            :src="require('../assets/conseils.png')"
            alt="Conseils"
            class="picto mediasm"
          ></b-img>
          <p class="title-picto">{{ main.first_picto_title }}</p>
          <p class="text_picto">{{ main.first_picto }}</p>
        </b-col>
        <b-col sm="4">
          <b-img
            fluid
            :src="require('../assets/web.png')"
            alt="Web"
            class="picto mediasm"
          ></b-img>
          <p class="title-picto">{{ main.second_picto_title }}</p>
          <p class="text_picto">{{ main.second_picto }}</p>
        </b-col>
        <b-col sm="4">
          <b-img
            fluid
            :src="require('../assets/professionnalisme.png')"
            alt="professionnalisme"
            class="picto mediasm"
          ></b-img>
          <p class="title-picto">{{ main.third_picto_title }}</p>
          <p class="text_picto">{{ main.third_picto }}</p>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="p-4 container">
      <b-row class="xp-row">
        <b-col class="mediasm-xp">
          <div class="content">
            <span class="job" v-html="main.xp_name">{{ main.xp_name }}</span>
            <h1>{{ main.xp_title }}</h1>
            <div class="alltxt">
              <p class="text" v-html="main.xp_content">{{ main.xp_content }}</p>
            </div>
          </div>
        </b-col>
        <b-col class="mediasm">
          <b-row class="xp-row">
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/html.png')"
                    alt="html"
                    title="HTML"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/bootstrap.png')"
                    alt="bootstrap"
                    title="Bootsrap"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/css.png')"
                    alt="css"
                    title="CSS"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/js.png')"
                    alt="js"
                    title="JavaScript"
                  ></b-img>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row class="xp-row">
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/vuejs.png')"
                    alt="VueJs"
                    title="VueJS"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/mysql.png')"
                    alt="mysql"
                    title="MySql"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/node.png')"
                    alt="node"
                    title="Node"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/rails-logo.png')"
                    alt="ROR"
                    title="RubyOnRails"
                  ></b-img>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row class="xp-row">
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/reactjs.png')"
                    alt="ReactJS"
                    title="ReactJS"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/redux.png')"
                    alt="Redux"
                    title="Redux"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/linux.png')"
                    alt="linux"
                    title="Linux"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/git.png')"
                    alt="git"
                    title="Git"
                  ></b-img>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row class="xp-row">
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/github.png')"
                    alt="Github"
                    title="Github"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div>
                  <b-img
                    fluid
                    class="xp-picto"
                    :src="require('../assets/python.png')"
                    alt="Python"
                    title="Python"
                  ></b-img>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div></div>
              </div>
            </b-col>
            <b-col>
              <div class="rounded">
                <div></div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <FooterNetwork />
  </div>
</template>

<script>
import { main } from "../lng/fr";
import FooterNetwork from "./FooterNetwork.vue";
import "../sass/main.scss";

export default {
  name: "Main",
  data() {
    return {
      main,
      main_text: [],
      xp_text: []
    };
  },
  components: {
    FooterNetwork
  }
};
</script>
