<template>
  <div class="container">
    <div class="left">
        <nuxt-link class="navigation" to="timeline">Previous Article<i class='arrow up'></i></nuxt-link>
      <div class="head-space">
        <div class="dot-polka"></div>
        <nuxt-link class="head-navigation" to="mission-spread">From Sputnik to Apollo</nuxt-link>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est venenatis, varius dolor vitae, interdum lectus.
        Phasellus ipsum elit, consectetur a varius non, posuere eu nunc. Pellentesque vestibulum libero metus, id condimentum
        arcu vestibulum ac. Ut rutrum dapibus lectus vel malesuada. Quisque sodales iaculis nunc vel egestas. Etiam sed sem
        quis erat tempor fermentum. Morbi arcu massa, blandit non condimentum ut, sagittis ut eros. Mauris ipsum ante, efficitur
        eget neque sed, dictum viverra nulla. </p>
      <nuxt-link class="body-navigation" to="mission-spread">Enter</nuxt-link>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<style scoped>
.right {
  background-image: url("../assets/aldrin.jpg");
}

.head-space {
  margin-bottom: 3em;
}

.head-navigation {
  font-size: 3.9em;
  letter-spacing: -4px;
}

.head-navigation:hover {
  padding-left: 10px;
  color: #dda866;
}

.navigation:hover {
  color: #dda866;
}

.dot-polka {
  background: linear-gradient(90deg, #f5f5f5, 20px, rgba(248, 237, 237, 0) 1%) center, linear-gradient(#f5f5f5 20px, rgba(254, 254, 254, 0) 1%) center, #dda866;
  background-size: auto auto, auto auto, auto auto;
  background-size: 22px 22px;
  width: 15%;
  height: 34vh;
  position: absolute;
  -webkit-clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
  clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
}

.body-navigation:hover {
  transform: scale(1.3);
  color: #dda866;
}
</style>
