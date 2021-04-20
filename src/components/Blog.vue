<template>
  <div>
    <b-container fluid class="p-4 container">
      <div id="colcount">
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title08 }}</div>
                <div class="lead">Publié le {{ blog.date08 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content08">
                  {{ blog.content08 }}
                </div>
              </b-jumbotron> 
        </li>           
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title07 }}</div>
                <div class="lead">Publié le {{ blog.date07 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content07">
                  {{ blog.content07 }}
                </div>
              </b-jumbotron> 
        </li>           
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title06 }}</div>
                <div class="lead">Publié le {{ blog.date06 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content06">
                  {{ blog.content06 }}
                </div>
              </b-jumbotron> 
        </li>              
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title05 }}</div>
                <div class="lead">Publié le {{ blog.date05 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content05">
                  {{ blog.content05 }}
                </div>
              </b-jumbotron> 
        </li>          
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title04 }}</div>
                <div class="lead">Publié le {{ blog.date04 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content04">
                  {{ blog.content04 }}
                </div>
              </b-jumbotron> 
        </li>            
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title03 }}</div>
                <div class="lead">Publié le {{ blog.date03 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content03">
                  {{ blog.content03 }}
                </div>
              </b-jumbotron> 
        </li>          
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title02 }}</div>
                <div class="lead">Publié le {{ blog.date02 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content02">
                  {{ blog.content02 }}
                </div>
              </b-jumbotron> 
        </li>          
        <li class="posts-list">
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <div class="header">{{ blog.title01 }}</div>
                <div class="lead">Publié le {{ blog.date01 }}</div>
                <hr class="my-4" />
                <div class="p-justify" v-html="blog.content01">
                  {{ blog.content01 }}
                </div>
              </b-jumbotron> 
        </li>      
      </div>
    </b-container>
  </div>
</template>

<script>
import { blog } from "../lng/fr";
import "../sass/blog.scss";
import "../sass/main.scss";

export default {
  name: "Blog",
  data() {
    return {
      blog,
    };
  },
};
</script>