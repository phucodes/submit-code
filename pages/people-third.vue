<template>
  <div id="card-template">
    <h1>Astronauts and Cosmonauts</h1>
    <nuxt-link class="return" to="people">Return to main page</nuxt-link>
    <div class="card-container">
      <ul class="card" v-for='info in infos.slice(6, 9)' v-bind:key="info.id">
        <li>
          <a class="character-handlings" v-bind:href='info.link'>
          <span class="photo">
            <img v-bind:src='info.url' alt='image' class='photo_size' />
          </span>
          <h2>{{info.title}}</h2>
          <p>{{info.text}}</p>
          <p>{{info.year}}</p>
          <p>Nationality: {{info.nationality}}</p>
          </a>
        </li>
      </ul>
      </div>
      <!-- <nuxt-link class="navigation" to="people-second"><i class='arrow down'></i></nuxt-link> -->
    </div>
</template>

<script>
import data from "../assets/people.json";

export default {
    methods: {
handleScroll: function (event) {
      console.log("Scrolled!");
      let dY = event.deltaY;
      /*this.$router.push({ path: 'about' }) */
      let pathUrl = ['/people-first', '/people-second', '/people-third'];
      var currentUrl = this.$route.path;
      // console.log(pathUrl.includes(currentUrl, 0));
      // console.log(currentUrl);
      var i = pathUrl.indexOf(currentUrl);
      // console.log(i);
      if (pathUrl.includes(currentUrl, 0)){
        console.log('yeah');
        if (dY < 0) {
          i = i - 1;
          this.$router.push(pathUrl[i])
        }
          i = i + 1;
          this.$router.push(pathUrl[i])
      }
  }
},
created: function () {
  if (process.browser) {
    window.addEventListener('wheel', this.handleScroll);
  }
},

destroyed: function () {
  if (process.browser) {
    window.removeEventListener('wheel', this.handleScroll);
  }
},
  name: "card-template",
  data() {
    return {
      infos: data,
    };
  },
};
</script>

<style scoped>
.navigation {
  width: 45%;
  text-align: center;
  margin: 0 auto;
}

.arrow {
  border: solid #494949;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  margin: 0 5px 2px 5px;
  transition: ease-in-out 0.5s;
}

.navigation:hover {
  transform: scale(2);
}
</style>
