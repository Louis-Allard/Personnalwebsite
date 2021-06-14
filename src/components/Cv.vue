<template>
  <div>
    <b-container fluid class="p-4 container">
      <b-row>
        <b-col sm="2">
          <div class="grayscale">
            <div>
              <div>
                <img src="../assets/me_color.jpg" alt="Photo" class="profile" />
              </div>
            </div>
          </div>
        </b-col>
        <b-col sm="10">
          <div class="content mediasm-content">
            <h1>{{ cv.name }} - {{ cv.work }}</h1>
            <ul>
              <li>
                <span class="title-el mediasm">{{ cv.email_title }}</span>
                <a>{{ cv.email }}</a>
              </li>
              <li>
                <span class="title-el mediasm">{{ cv.adress_title }}</span>
                {{ cv.adress }}
              </li>
            </ul>
            <span id="trade">{{ cv.trade }}</span
            ><br />
            <div style="margin-top:20px">
              >
              <a
                href="https://cvdesignr.com/p/5e415998a2cbb?hl=fr_FR"
                target="_blank"
                ><b>Télécharger mon cv en pdf</b></a
              >
            </div>
          </div>
        </b-col>

        <b-col>
          <div class="content mediasm-content">
            <div class="alltxt">
              <p class="text" v-html="cv.job_content">
                {{ cv.job_content }}
              </p>
              <p class="text" v-html="cv.job_ccl">{{ cv.job_ccl }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col>
          <h2>{{ cv.xp }}</h2>
        </b-col>
      </b-row>
      <ul class="experiences_list"> <!-- xeno -->
        <li class="item_list">
          <span class="item_title">{{ cv.datexp01 }} {{ cv.titlexp01 }}</span>
          <br />
          <div class="item_describe">
            <div class="my-3">
              <span id="popover-target-1">{{ cv.describexp01 }}</span>
              <b-popover
                target="popover-target-1"
                triggers="hover"
                placement="top"
              >
                <template #title>{{ cv.titlepopover }}</template>
                <img
                  src="../assets/vuejs.png"
                  title="Vuejs"
                  alt="VueJS"
                />&nbsp;
                <img
                  src="../assets/rails-logo.png"
                  title="RubyOnRails"
                  alt="RubyOnRails"
                />
              </b-popover>
            </div>
          </div>
        </li>
        <li class="item_list">
          <span class="item_title">{{ cv.datexp02 }} {{ cv.titlexp02 }}</span> <!-- xeno stage -->
          <br />
          <div class="item_describe">
            <div class="my-3">
              <span id="popover-target-2">{{ cv.describexp02 }}</span>
              <b-popover
                target="popover-target-2"
                triggers="hover"
                placement="top"
              >
                <template #title>{{ cv.titlepopover }}</template>
                <img
                  src="../assets/vuejs.png"
                  title="Vuejs"
                  alt="VueJS"
                />&nbsp;
                <img
                  src="../assets/rails-logo.png"
                  title="RubyOnRails"
                  alt="RubyOnRails"
                />
              </b-popover>
            </div>
          </div>
        </li>
        <li class="item_list">
          <span class="item_title">{{ cv.datexp03 }} {{ cv.titlexp03 }}</span>
          <br />
          <span class="item_describe">{{ cv.describexp03 }}</span>
        </li>
        <li class="item_list">
          <span class="item_title">{{ cv.datexp04 }} {{ cv.titlexp04 }}</span> <!-- td -->
          <br />
          <div class="item_describe">
            <div class="my-3">
              <span id="popover-target-3">{{ cv.describexp04 }}</span>
              <b-popover
                target="popover-target-3"
                triggers="hover"
                placement="top"
              >
                <template #title>{{ cv.titlepopover }}</template>
                <img src="../assets/php.png" title="PhP" alt="PhP" />
              </b-popover>
            </div>
          </div>
        </li>
        <li class="item_list"> <!-- cours  -->
          <span class="item_title">{{ cv.datexp05 }} {{ cv.titlexp05 }}</span>
          <br />
          <span class="item_describe">{{ cv.describexp05 }}</span>
        </li>
        <li class="item_list">
          <span class="item_title">{{ cv.datexp06 }} {{ cv.titlexp06 }}</span>
          <br />
          <span class="item_describe">{{ cv.describexp06 }}</span>
        </li>
      </ul>
      <hr />
      <b-row>
        <b-col>
          <h2>{{ cv.training }}</h2>
        </b-col>
      </b-row>
      <ul class="experiences_list">
        <li class="item_list">
          <span class="item_title"
            >{{ cv.datetraining }} {{ cv.titletraining }}</span
          >
          <br />
          <span class="item_describe">{{ cv.describetraining }}</span>
          <br />
          <span class="item_describe" v-html="cv.describetraining2">{{ cv.describetraining2 }}</span> <!-- mes formations -->
        </li>
      </ul>
      <hr />
      <b-row>
        <b-col>
          <h2>{{ cv.stack }}</h2>
        </b-col>
      </b-row>

      <div class="sub-title">
        <b-row>
          <b-col>
            <h3>{{ cv.frontend }}</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="logo">
              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/html.png')"
                      alt="html"
                      title="HTML"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/css.png')"
                      alt="css"
                      title="CSS"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/bootstrap.png')"
                      alt="boostrap"
                      title="Bootstrap"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/js.png')"
                      alt="js"
                      title="JavaScript"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/reactjs.png')"
                      alt="ReactJs"
                      title="ReactJS"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/vuejs.png')"
                      alt="VueJs"
                      title="VueJS"
                    ></b-img>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h3>{{ cv.backend }}</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="logo">
              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/mysql.png')"
                      alt="mysql"
                      title="MySql"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/node.png')"
                      alt="node"
                      title="Node"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/rails-logo.png')"
                      alt="Ruby On Rails"
                      title="Ruby On Rails"
                    ></b-img>
                  </div>
                </div>
              </div>

              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/redux.png')"
                      alt="Redux"
                      title="Redux"
                    ></b-img>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h3>{{ cv.others }}</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="logo">
              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/linux.png')"
                      alt="linux"
                      title="Linux"
                    ></b-img>
                  </div>
                </div>
              </div>
              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/git.png')"
                      alt="git"
                      title="Git"
                    ></b-img>
                  </div>
                </div>
              </div>
              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/github.png')"
                      alt="github"
                      title="Github"
                    ></b-img>
                  </div>
                </div>
              </div>
              <div class="zoom">
                <div>
                  <div>
                    <b-img
                      left
                      fluid
                      :src="require('../assets/python.png')"
                      alt="python"
                      title="Python"
                    ></b-img>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <hr />
      <b-row>
        <b-col>
          <h2>{{ cv.softkills }}</h2>
        </b-col>
      </b-row>

      <ul class="experiences_list">
        <li class="item_list" v-for="(softskill, key) in softskills" :key="key">
          {{ softskill }}
        </li>
      </ul>
    </b-container>
        <FooterNetwork />
  </div>
</template>

<script>
import { cv } from "../lng/fr";
import FooterNetwork from "./FooterNetwork.vue";
import "../sass/cv.scss";
import "../sass/main.scss";

export default {
  name: "Cv",
  data() {
    return {
      cv,
      experiences: [],
      trainings: [],
      softskills: [
        "Voyages",
        "Littérature",
        "Musique",
        "Informatique",
        "Airsoft"
      ]
    };
  },
  components: {
    FooterNetwork
  },
  methods: {
  },
  mounted() {
  }
};
</script>
