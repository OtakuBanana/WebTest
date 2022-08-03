<template>
    <div id="app" style="position: relative;">
      <div class="headMenu">
        <router-link to="/index" tag="div" class="logo">
          <h1>厦 门</h1>
          <img src="./assets/logo.png" alt="LOGO" width="50px">
        </router-link >
        <div class="headmenuList">
          <router-link to="/index" tag="span">首页</router-link>
          <router-link to="/xmgk" tag="span">厦门概况</router-link>
          <router-link to="/lyzx" tag="span">旅游资讯</router-link>
          <router-link to="/jq" tag="span">景区</router-link>
          <router-link to="/ms" tag="span">美食</router-link>
        </div>
      </div>
      <transition :name="transitionName" mode="out-in">   
        <router-view></router-view>
      </transition>
      <div class="footer">
        <div>
          <h1>厦门旅游网</h1>
          <p>全国十佳旅游网站</p>
          <p>文旅宣传官方网站</p>
        </div>
        <hr color="gray" />
        <div>
          <h3>WWW.XIAMENLVYOU.COM</h3>
          <ul>
            <li>厦门概况</li>
            <li>旅游资讯</li>
            <li>景区</li>
            <li>线路</li>
            <li>美食</li>
            <li>酒店</li>
          </ul>
          <ul style="margin-top: -10px; clear: both;">
            <li>节庆活动</li>
            <li>旅游攻略</li>
            <li>旅游贴士</li>
            <li>厦门市文旅局</li>
          </ul>
        </div>
        <hr color="gray" />
        <div>
          <h3>联系我们</h3>
          <p>> 邮 箱: 123456@qq.com</p>
          <p>> 电 话: 400-000-000</p>
        </div>
      </div>
      <div style="padding: 5px 100px 20px; text-align: center; background-color: #333">
        <hr color="gray" />
        <br />
        <p style="color: white;">闽ICP备00000001号-2, Copyright © 2021 All Right Reserved, <a href="javascript:;" style="color: white;">xiamenlvyou.com</a></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          transitionName:''
      }
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left';
        if(to.meta.index != 0)
        window.scrollTo(0, 0)
      }else{
        this.transitionName = 'slide-right';
        if(to.meta.index != 0)
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style>
  @import "assets/css/styles.css";
</style>