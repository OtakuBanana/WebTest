<template>
    <div style="z-index: 1; position: relative;">
        <div>
            <h1 class="imgTxt">海上花园，诗意厦门</h1>
            <!-- <a href="#start" ><button class="imgBtn">∨</button></a> -->
            <img src="../assets/images/bg.png" alt="" width="100%">
        </div>
        <div class="boxList" id="start">
            <div class="listUl">
                <h2 style="padding-bottom: 30px; border-bottom: 2px solid #5076c9;">厦门旅游</h2>
                <ul style="padding-top: 5px;">
                    <router-link to="/index/list1" tag="li">鼓浪屿景区</router-link>
                    <router-link to="/index/list2" tag="li">闽台风情之旅</router-link>
                    <router-link to="/index/list3" tag="li">大同鸭肉粥店</router-link>
                    <router-link to="/index/list4" tag="li">厦门天元酒店</router-link>
                    <router-link to="/index/list5" tag="li">宝龙一城</router-link>
                </ul>
            </div>
            <div class="listImg">
                <transition :name="transitionName">  
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <div class="boxList2">
            <div class="list2H2">
                <h2 style="display: inline-block; margin-right: 150px; color: white;">精品路线</h2>
                <button>金砖雅游</button>
                <button>夜游厦门</button>
                <button>鼓浪屿世界经典遗产</button>
                <button>自驾游</button>
                <button>周边游</button>
            </div>
            <div class="list2Ul">
                <li>
                    <img src="../assets/images/index/list6.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>01 </span><h3> 赏经典华屋</h3><br />
                        <p style="color: rgb(121, 121, 121);">设计博采中西文化之长，堪称中西合璧之经典</p>    
                    </div>
                </li>
                <hr />
                <li>
                    <img src="../assets/images/index/list7.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>02 </span><h3> 街巷寻味、体旅研学</h3><br />
                        <p style="color: rgb(121, 121, 121);">六大精品运动休闲旅游线路，带你玩转暖冬思明</p>    
                    </div>
                </li>
                <hr />
                <li>
                    <img src="../assets/images/index/list8.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>03 </span><h3> 海上看厦门</h3><br />
                        <p style="color: rgb(121, 121, 121);">鼓浪屿犹如一张美丽的画卷展现在眼前，美不胜收</p>    
                    </div>
                </li>
                <hr />
                <li>
                    <img src="../assets/images/index/list9.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>04 </span><h3> 万国建筑世遗之旅</h3><br />
                        <p style="color: rgb(121, 121, 121);">荟萃了上千座中西合璧、 风格各异的中外建筑</p>    
                    </div>
                </li>
            </div>
        </div>
        <div class="boxList3">
            <div>
                <h2 style="color: #333; cursor: default; padding-bottom: 30px">———— 旅游向导 ————</h2>
            </div>
            <div>
                <div class="divBox">
                    <h3>景区</h3>
                </div>
                <div class="divBox">
                    <h3>线路</h3>
                </div>
                <div class="divBox">
                    <h3>美食</h3>
                </div>
                <div class="divBox">
                    <h3>酒店</h3>
                </div>
            </div>
        </div>
        <div class="boxList3">
            <div>
                <h2 style="color: #333; cursor: default; padding-bottom: 30px">———— DEMO ————</h2>
            </div>
            <div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
            </div>
        </div>
        <div class="boxList3">
            <div>
                <h2 style="color: #333; cursor: default; padding-bottom: 30px">———— DEMO ————</h2>
            </div>
            <div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
                <div class="divBox">
                    <h3>暂无</h3>
                </div>
            </div>
        </div>
        <div class="boxList2" style="padding-top: 100px;">
            <div class="list2H2">
                <h2 style="display: inline-block; margin-right: 150px; color: white;">DEMO</h2>
            </div>
            <div class="list2Ul">
                <li>
                    <img src="../assets/images/index/list6.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>01 </span><h3> 暂无内容</h3><br />
                        <p style="color: rgb(121, 121, 121);">字数补丁字数补丁字数补丁字数补丁字数补丁字数补丁</p>    
                    </div>
                </li>
                <hr />
                <li>
                    <img src="../assets/images/index/list7.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>02 </span><h3> 暂无内容</h3><br />
                        <p style="color: rgb(121, 121, 121);">字数补丁字数补丁字数补丁字数补丁字数补丁字数补丁</p>    
                    </div>
                </li>
                <hr />
                <li>
                    <img src="../assets/images/index/list8.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>03 </span><h3> 暂无内容</h3><br />
                        <p style="color: rgb(121, 121, 121);">字数补丁字数补丁字数补丁字数补丁字数补丁字数补丁</p>    
                    </div>
                </li>
                <hr />
                <li>
                    <img src="../assets/images/index/list9.jpg" alt="">
                    <div style="position: relative; top: -60px;">
                        <span>04 </span><h3> 暂无内容</h3><br />
                        <p style="color: rgb(121, 121, 121);">字数补丁字数补丁字数补丁字数补丁字数补丁字数补丁</p>    
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
            data(){
                return {
                    transitionName:''
                }
            },
            watch: {
                $route(to, from) {
                if(to.meta.index > from.meta.index){
                    this.transitionName = 'img-left';
                }else{
                    this.transitionName = 'img-right';
                }
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/index.css";
</style>