<template>
  <div>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{ $store.state.city.nm }}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/commingsoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <router-view name="detail"></router-view>
  </div>
</template>
<script>
import { messageBox } from "@/components/js";
export default {
  name: "movie",
  components: {},
  async mounted() {
    let result = await this.$axios.get("/api/getLocation");
    let data = result.data;
    if (data.msg == "ok") {
      if (this.$store.state.city.id != data.data.id) {
        messageBox({
          title: "定位",
          content: data.data.nm,
          cancel: "取消",
          ok: "切换",
          handleOk() {
            localStorage.setItem("nowNm", data.data.nm);
            localStorage.setItem("nowId", data.data.id);
            location.reload();
          }
        });
      }
    }
  }
};
</script>
<style scoped>
#content {
  flex: 1;
  overflow: auto;
  position: relative;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}

.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
