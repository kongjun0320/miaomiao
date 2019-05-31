<template>
  <div class="msgBox">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div>
      <div v-if="cancel" @touchstart="handleCancle">{{ cancel }}</div>
      <div v-if="ok" @touchstart="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.msgBox {
  width: 200px;
  height: 120px;
  background-color: #ccc;
  box-shadow: 3px, 2px, 3px, 2px #ccc;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
}
.msgBox h2 {
  text-align: center;
}
.msgBox p {
  text-align: center;
  margin: 7px 0px;
}
.msgBox > div {
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
  position: absolute;
  bottom: 0px;
}
.msgBox > div div {
  flex: 1;
  text-align: center;
  padding: 10px 4px;
  background-color: green;
}
</style>
