<template>
  <div>
    <b-container fluid class="p-4 container_footer">
       <b-form>
      <b-row>
        <b-col class="contact_title">{{ footer.contact_title }}</b-col>
      </b-row>

      <b-row>
        <b-col>
          <span>Mon LinkedIn: <a href="https://www.linkedin.com/in/louis-allard-devweb/" target="_blank"><img src="../assets/linkedin.png" /></a></span>
        </b-col>
        <b-col>
          <span>Mon Github: <a href="https://github.com/Louis-Allard" target="_blank"><img src="../assets/github.png" /></a></span>
        </b-col>
        <div class="w-100"></div>
        <b-col>
          <span>Mon Twitter: <a href="https://twitter.com/lallard_59" target="_blank"><img src="../assets/twitter.png" width="50px" /></a></span>
        </b-col>
        <b-col>
          <span>Mon email: <img src="../assets/contact.png" width="50px"/> la.devweb@yahoo.com</span>
        </b-col>
        <div class="w-100"></div>
      </b-row>
       </b-form>
    </b-container>
    <b-container fluid class="p-4 container consollog">
      {{ footer.title }}
      <span class="version">Version : {{ version }}</span>
    </b-container>
  </div>
</template>

<script>
import packageJson from "../../package";
import { footer } from "../lng/fr";
import "../sass/footer.scss";

export default {
  name: "FooterNetwork",
  data() {
    return {
      footer,
      name: "",
      firstname: "",
      objmessage: "",
      message: "",
      email: ""
    };
  },
  computed: {
    version() {
      return packageJson.version;
    }
  }
};
</script>