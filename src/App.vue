<template>
  <div id="app">
    <Hh></Hh>
    <router-view></router-view>
    <Ff></Ff>
  </div>
</template>
<script>
import Hh from "./components/Hh";
import Ff from "./components/Ff";
export default {
  name: "app",
  components: {
    Hh,
    Ff
  }
};
</script>

<style>
.router-link-active {
  color: #f03d37;
}
</style>
