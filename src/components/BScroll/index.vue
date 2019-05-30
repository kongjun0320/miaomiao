<template>
  <div class="wrap" ref="wrap">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "bscroll",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap, { click: true, tap: true });
  },
  methods: {
    toScrollTop(y) {
      this.scroll.scrollTo(0, y);
    }
  }
};
</script>
<style>
.wrap {
  height: 100%;
}
</style>
