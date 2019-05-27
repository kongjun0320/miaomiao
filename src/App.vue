<template>
  <div id="app">
    <Hh></Hh>
    <keep-alive>
      <router-view class="box"></router-view>
    </keep-alive>
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
.box {
  padding-bottom: 52px;
}
</style>
