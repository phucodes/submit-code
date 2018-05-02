<template>
  <div v-on:scroll="handleScroll">
    <nuxt/>
  </div>
</template>

<script>
export default {
methods: {
handleScroll: function (event) {
      console.log("Scrolled!");
      let dY = event.deltaY;
      /*this.$router.push({ path: 'about' }) */
      let pathUrl = ['/about', '/people', '/timeline', '/mission'];
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
}
}
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.page-enter-active, .page-leave-active {
  transition: all .54s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}

.head-space {
  width: 100%;
  display: flex;
}

.left {
  background-color: #f5f5f5;
}

.container {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-wrap: wrap;
  color: #424242;
  width: 100%;
  height: 100vh;
}

.left {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: 5em;
}

.head-navigation {
  width: 100%;
  font-size: 6em;
  font-weight: 700;
  color: #424242;
  position: relative;
  margin-left: 1em;
  text-decoration: none;
  text-transform: uppercase;
  transition: ease-in-out 0.6s;
}

.container p {
  width: 100%;
}

.side-image {
  width: 50%;
}

.right {
  width: 50%;
  background-size: cover;
}

.dot-polka {
  background-size: auto auto, auto auto, auto auto;
  background-size: 22px 22px;
  width: 10%;
  height: 37vh;
  position: absolute;
  -webkit-clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
  clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
}

.left p {
  width: 100%;
  margin: 20px;
  padding-left: 15%;
}

.navigation {
  width: 25%;
  margin: 1em;
  text-decoration: none;
  color: #494949;
  transition: ease-in-out 0.5s;
}

.arrow {
  border: solid #494949;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0 5px 2px 5px;
}

.navigation:hover {
  margin-left: 25px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.up {
  margin: 0 5px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

#card-template {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 3em;
  color: #424242;
  display: flex;
  flex-wrap: wrap;
}

.head-section {
  padding: 10px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}

#card-template h1 {
    height: 1.2em;
    font-size: 3.6em;
    width: 100%;
    margin-left: 80px;
}

.card {
    text-align: center;
    width: calc(100% /3 - 10em);
    height: 25vw;
    padding: 44px;
    margin: 5em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid #5f5353;
    list-style-type: none;
    -webkit-transition: opacity 0.4s ease-in-out;
    transition: opacity 0.4s ease-in-out;
}

.card li h2 {
    margin-top: 10px;
    margin-bottom: 10px;
}

.card-container:hover .card:not(:hover) {
  opacity: 0.4;
}

.character-handlings {
  text-decoration: none;
  color: #424242;
}

.character-handlings p {
    padding: 5px 0;
}

.photo {
  display: block;
  clip-path: circle(50% at 50% 50%);
  width: 125px;
  height: 125px;
  margin: 0 auto;
}

.photo_size {
  object-fit: cover;
  margin: 0 auto;
  width: 125px;
  height: 125px;
}

.return:hover {
    padding-left: 20px;
}
.return {
    margin-left: 80px;
    margin-top: 20px;
    text-decoration: none;
    transition: ease-in-out 0.6s;
}

.body-navigation {
    width: 100%;
    text-align: center;
    text-decoration: none;
    transition: ease-in-out 0.6s;
    text-transform: uppercase;
}

.body-navigation:hover {
  transform: scale(1.3);
}

a:visited,
a:link {
  color: #424242;
}
</style>
