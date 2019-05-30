<template>
  <header id="header">
    <slot></slot>
    <h1>{{title||'猫猫影院'}}</h1>
  </header>
</template>

<script>
export default {
  name: "hh",
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
}
#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>
