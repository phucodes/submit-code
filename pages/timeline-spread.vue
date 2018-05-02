<template>
  <div id="timeline">
  <ul class="timeline-container">
    <li class="list-items" v-for="item in items" v-bind:key="item.id">{{item.message}}
      <div class="timeline-card">
      <h1>{{item.title}}</h1>
      <p>{{item.text}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import data from "../assets/timeline.json";

export default {
  name: "timeline",
  data() {
    return { items: data };
  }
};
</script>

<style scoped>
.timeline-container {
  list-style-type: none;
  border-left: 10px solid #424242;
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin: 0 50%;
  background-color: milk;
}

.list-items {
  padding: 10px;
  margin: 10px;
  color: #424242;
  width: 100%;
  font-size: 1.6em;
}

.list-items:nth-of-type(even) {
  color: #f06262;
  margin-left: -100%;
  text-align: left;
}

.timeline-card {
  width: 80%;
  border-bottom: 1px solid;
  font-size: 1em;
  padding-bottom: 10px;
}
</style>
