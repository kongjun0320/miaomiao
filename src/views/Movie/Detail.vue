<template>
  <div id="detain_container" class="animate">
    <Hh title="影片详情">
      <i class="iconfont icon-right" @touchstart="$router.back()"></i>
    </Hh>
    <div id="content" class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailData.img|setImgWH('120.180')" alt>
          </div>
          <div class="detail_list_info">
            <h2>{{ detailData.nm }}</h2>
            <p>{{ detailData.enm }}</p>
            <p>{{ detailData.sc }}</p>
            <p>{{ detailData.cat }}</p>
            <p>{{ detailData.src }} / {{ detailData.dur }}分钟</p>
            <p>{{ detailData.pubDesc }}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{ detailData.dra }}</p>
      </div>
      <div class="detail_player swiper-container" ref="swiperContainer">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item, index) in detailData.photos" :key="index">
            <div>
              <img :src="item|setImgWH('200.180')" alt>
            </div>
            <p>陈建斌</p>
            <p>马先勇</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Hh from "@/components/Hh";
export default {
  name: "detail",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      detailData: null
    };
  },
  components: {
    Hh
  },
  async mounted() {
    let result = await this.$axios.get("/api/detailmovie?movieId=" + this.id);
    let data = result.data;
    if (data.msg == "ok") {
      this.detailData = data.data.detailMovie;
      this.$nextTick(() => {
        new Swiper(this.$refs.swiperContainer, {
          slidesPerView: "auto",
          freeMode: true,
          freeModeSticky: true
        });
      });
    }
  }
};
</script>
<style scoped>
.animate {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
#detain_container {
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
}
#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background: url(/images/movie_1.jpg) 0 40%;
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}
.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.8;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: solid 1px #f0f2f3;
  margin: 20px;
}
.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list .detail_list_info {
  margin-top: 20px;
}
.detail_list .detail_list_info h2 {
  font-size: 20px;
  color: white;
  font-weight: normal;
  line-height: 40px;
}
.detail_list .detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}

#content .detail_intro {
  padding: 10px;
}
#content .detail_player {
  margin: 20px;
}
.detail_player .swiper-slide {
  width: 70px;
  margin-right: 20px;
  text-align: center;
  font-size: 14px;
}
.detail_player .swiper-slide img {
  width: 100%;
  margin-bottom: 5px;
}
.detail_player .swiper-slide p:nth-of-type(2) {
  color: #999;
}
</style>
