<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isShowLoading"></Loading>
    <ul v-else>
      <li v-for="(item, index) in movieList" :key="index">
        <div class="pic_show">
          <img :src="item.img|setImgWH('120.180')" @tap="toDetail(item.id)">
        </div>
        <div class="info_list">
          <h2>{{ item.nm }}</h2>
          <p>
            观众评
            <span class="grade">{{ item.sc }}</span>
          </p>
          <p>{{ item.star }}</p>
          <p>{{ item.showInfo }}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "nowplaying",
  data() {
    return {
      movieList: [],
      isShowLoading: true,
      preCityId: -1
    };
  },
  async activated() {
    let cityId = this.$store.state.city.id;

    if (this.preCityId == cityId) return false;

    this.isShowLoading = true;
    let result = await this.$axios.get("/api/movieOnInfoList?cityId=" + cityId);
    if (result.data.data.movieList) {
      this.preCityId = cityId;
      this.isShowLoading = false;
      this.movieList = result.data.data.movieList;
      //当组件数据渲染完毕才执行回调
      this.$nextTick(() => {
        new BScroll(this.$refs.movie_body, { click: true, tap: true });
      });
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push("/movie/detail/" + id);
    }
  }
};
</script>
<style scoped>
.movie_body {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.movie_body ul {
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>
