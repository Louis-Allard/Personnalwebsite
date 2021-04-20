<template>
  <div>
    <b-container fluid class="p-4 container_footer">
       <b-form @submit.prevent="send()">
      <b-row>
        <b-col class="contact_title">{{ footer.contact_title }}</b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-input id="input-name" required  ref="name" v-model="name" placeholder="Votre nom"></b-form-input>
        </b-col>
        <b-col>
          <b-form-input id="input-lastname" required ref="firstname" v-model="firstname" placeholder="Votre prénom"></b-form-input>
        </b-col>
        <div class="w-100"></div>
        <b-col>
          <b-form-input id="input-object" required ref="objmessage" v-model="objmessage"  placeholder="Objet du message"></b-form-input>
        </b-col>
        <b-col>
          <b-form-input id="input-email" required ref="email" v-model="email"  placeholder="Votre email"></b-form-input>
        </b-col>
        <div class="w-100"></div>

        <b-col>
          <b-form-textarea
            id="textarea"
            placeholder="Votre message..."
            ref="message"
            v-model="message" 
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button type="submit" class="btn-cv_footer">Envoyer</b-button>
        </b-col>
      </b-row>
       </b-form>
    </b-container>
    <b-container fluid class="p-4 container">
      {{ footer.title }}
      <span class="version">Version : {{ version }}</span>
    </b-container>
  </div>
</template>

<script>
import packageJson from "../../package";
import axios from 'axios';
import { footer } from "../lng/fr";
import "../sass/footer.scss";
const nodemailer = require("nodemailer");

export default {
  name: "Footer",
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
/** */
  methods: {
    send() {
      const name = this.$refs.name.value;
      const firstname = this.$refs.firstname.value;
      const objmessage = this.$refs.objmessage.value;
      const message = this.$refs.message.value;
      const email = this.$refs.email.value;
      axios
        .post(
          `http://localhost:8080/send/${name}/${firstname}/${objmessage}/${message}/${email}`,(req,res) => {
    async function main() {
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            service: 'yahoo',
            host: "smtp.mail.yahoo.com",
            port: 465,
            secure: false, // true for 465, false for other ports
            auth: {
                user: `l.allard@yahoo.fr`, // generated ethereal user
                pass: `69PdMq59`, // generated ethereal password
            },
        });
        let info = await transporter.sendMail({
            from: req.params.email, // sender address
            to: "la.devweb@yahoo.com", // list of receivers
            subject: req.params.objmessage, // Subject line
            text: req.params.message, // plain text body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        return res + testAccount;
    }
    main().catch(console.error);
}
        )
        .then(response => {
          console.log(response.config);
        })
        .catch(error => {
          console.error("!!! ERROR !!! ", error);
        });
    }
  },
  computed: {
    version() {
      return packageJson.version;
    }
  }
};
</script>