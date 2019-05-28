<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li v-for="(item, index) in hotList" :key="index">{{ item.nm }}</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_detail">
        <div v-for="(item, index) in cityList" :key="index">
          <h2>{{ item.index }}</h2>
          <ul>
            <li v-for="(city, index) in item.list" :key="index">{{ city.nm }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li
          v-for="(item, index) in cityList"
          :key="index"
          @touchstart="toCityDetail(index)"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      cityList: [],
      hotList: []
    };
  },
  methods: {
    async fetch() {
      let result = await this.$axios.get("/api/cityList");

      if (result.data.msg === "ok") {
        let cityData = result.data.data.cities;
        let { hotList, cityList } = this.formatCityList(cityData);
        this.cityList = cityList;
        this.hotList = hotList;
      }
    },
    formatCityList(cityData) {
      let cityList = []; //[{index:'A',list:[{nm:'',id:123}]}]
      let hotList = [];
      for (let i = 0; i < cityData.length; i++) {
        let firstLetter = cityData[i].py.substring(0, 1).toUpperCase();
        if (compareFirstLetter(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ nm: cityData[i].nm, id: cityData[i].id }]
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cityData[i].nm, id: cityData[i].id });
            }
          }
        }
      }
      function compareFirstLetter(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else {
          return -1;
        }
      });
      for (var i = 0; i < cityData.length; i++) {
        if (cityData[i].isHot === 1) {
          hotList.push(cityData[i]);
        }
      }

      return {
        cityList,
        hotList
      };
    },
    toCityDetail(index) {
      var h2List = this.$refs.city_detail.getElementsByTagName("h2");
      this.$refs.city_detail.parentNode.scrollTop =
        h2List[index].offsetTop - 50;
    }
  },
  mounted() {
    this.fetch();
  }
};
</script>
<style scoped>
.city_body {
  margin-top: 51px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}

.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}

.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
