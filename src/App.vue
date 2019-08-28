<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input
          type="text"
          v-model="keyWord"
          @keyup.enter="queryMusic"
      />
      <button>
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <router-link
            tag="a"
            class="bar-item"
            to="/results"
        >搜索结果
        </router-link>
        <router-link
            tag="a"
            class="bar-item"
            to="/player"
        >歌曲播放
        </router-link>
        <router-link
            tag="a"
            class="bar-item"
            to="/video"
        >mv
        </router-link>
        <router-link
            tag="a"
            class="bar-item"
            to="comment"
        >歌曲评论
        </router-link>
      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        keyWord: '',
      }
    },
    methods: {
      queryMusic() {
        this.axios
          .get(`https://autumnfish.cn/search?keywords=${this.keyWord}`)
          .then(res => {
            //成功执行
            console.log(res);
          })
      }
    }
  }
</script>

<style>
  @import url('assets/css/index.css');
  @import url('assets/css/iconfont.css');

</style>
