<template>
  <div>
    <b-container fluid class="p-4 container">
      <b-row>
        <b-col sm="2">
          <div class="grayscale">
            <div>
              <div>
                <b-img
                  thumbnail
                  rounded
                  left
                  fluid
                  :src="require('../assets/me_color.jpg')"
                  alt="Profile"
                  class="profile mediasm"
                ></b-img>
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
            <p style="margin-top:20px">
              <b-button variant="info"
                ><a href="../../../public/cv.pdf" download="cv.pdf">pdf</a></b-button
              >
            </p>
          </div>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col>
          <h2>{{ cv.xp }}</h2>
        </b-col>
      </b-row>
      <ul class="experiences_list">
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
          <span class="item_title">{{ cv.datexp02 }} {{ cv.titlexp02 }}</span>
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
          <span class="item_title">{{ cv.datexp04 }} {{ cv.titlexp04 }}</span>
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
                <img src="../assets/php.png" title="PhP" alt="PhP" />&nbsp;
                <img src="../assets/php.png" title="PhP" alt="PhP" />
              </b-popover>
            </div>
          </div>
        </li>
        <li class="item_list">
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
          <span class="item_describe">{{ cv.describetraining2 }}</span>
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
  </div>
</template>

<script>
import { cv } from "../lng/fr";
import axios from "axios";
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
  components: {},
  methods: {
    load_experiences() {
      axios.get("http://localhost:8081/cv").then(response => {
        for (let i = 0; i < response.data.length; i++) {
          this.experiences.push(response.data[i]);
          this.experiences = this.experiences.reverse();
        }
      });
    },
    load_training() {
      axios.get("http://localhost:8081/training").then(response => {
        for (let i = 0; i < response.data.length; i++) {
          this.trainings.push(response.data[i]);
        }
      });
    }
  },
  mounted() {
    this.load_experiences();
    this.load_training();
  }
};
</script>
