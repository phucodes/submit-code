<template>
  <div class="container">
    <div class="left">
      <div class="head-space">
        <div class="dot-polka"></div>
        <nuxt-link class="head-navigation" to="timeline">CAPSTONE PROJECT</nuxt-link>
      </div>
      <p>Created for senior CAPSTONE project at Lindenwood Belleville, IL. Phu Nguyen 2018.</p>
      <nuxt-link class="navigation" to="about">Begin<i class='arrow down'></i></nuxt-link>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<style scoped>

.right {
  background-image: url("../assets/valentina-duo.png");
}

.head-navigation {
  letter-spacing: -2px;
}

.head-navigation:hover {
  padding-left: 10px;
  color: #dd5b65;
}

.dot-polka {
  background: linear-gradient(90deg, #f5f5f5, 20px, rgba(248, 237, 237, 0) 1%) center, linear-gradient(#f5f5f5 20px, rgba(254, 254, 254, 0) 1%) center, #dd2c2c;
  background-size: auto auto, auto auto, auto auto;
  background-size: 22px 22px;
  width: 15%;
  height: 28vh;
  position: absolute;
  -webkit-clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
  clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
}

</style>
