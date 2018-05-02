<template>
  <div class="container">
    <div class="left">
        <nuxt-link class="navigation" to="people">Previous Article<i class='arrow up'></i></nuxt-link>
      <div class="head-space">
        <div class="dot-polka"></div>
        <nuxt-link class="head-navigation" to="timeline-spread">From Satellites to Space Stations</nuxt-link>
      </div>
      <p>After the end of World War II and until the ultimate collapse of the Soviet Union, the two world superpowers were locked
        in a constant technological race. However, the goals are frequently convuluted and the players never just two. Discover the milestones
        and the tragedies of this dramatic techno-ideological confrontation.
      </p>
      <nuxt-link class="body-navigation" to="timeline-spread">Enter</nuxt-link>
      <nuxt-link class="navigation" to="mission">Next Article<i class='arrow down'></i></nuxt-link>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<style scoped>
.right {
  background-image: url("../assets/gemini.jpg");
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
  color: #77c9da;
}

.navigation:hover {
  color: #77c9da;
}


.dot-polka {
  background: linear-gradient(90deg, #f5f5f5, 20px, rgba(248, 237, 237, 0) 1%) center, linear-gradient(#f5f5f5 20px, rgba(254, 254, 254, 0) 1%) center, #77c9da;
  background-size: auto auto, auto auto, auto auto;
  background-size: 22px 22px;
  width: 15%;
  height: 30vh;
  position: absolute;
  -webkit-clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
  clip-path: polygon(0% 15%, 0 0, 15% 0%, 58% 0, 58% 38%, 100% 38%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
}

.body-navigation:hover {
  transform: scale(1.3);
  color: #77c9da;
}
</style>
