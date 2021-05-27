<template>
    <div class="home">
        <!-- 加载地图容器 -->
        <!-- <component ref="mychild" @changeShowRight="changeShowRight" :is="s"></component> -->
        <main-map 
        ref="mychild"
        :status="showRight" 
        @changeShowRight="changeShowRight" />

        <!-- <div  ref="s" v-show="showRight && tab != 'Building'" class="mainTitle animate__animated">{{mainTitle}}</div> -->
        

        <!-- 顶部头部 -->
        <div 
        v-if="showRight" 
        class="header animate__animated" 
        :class="animateHeader">
            <div class="left">
                <!-- <img class="logo" src="@/assets/icon/home/logo.png" alt="logo"> -->
                <ul class="nav">
                    <li 
                    :class="[{ active : index == headerNavIndex },{ animate__bounce : index == headerNavIndex }]" 
                    @click="navClass(index)"
                    class="li  animate__animated" v-for="(list,index) in headerNav" :key="index">
                        <span class="name">{{list.name}}</span> 
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="timeDate">
                    <div class="time">{{headerData.time}}</div>
                    <div class="text">
                        <span>{{headerData.data}}</span> 
                        <span>{{headerData.week}}</span>
                    </div>
                </div>
                <div class="weather">
                    <img class="weather01" src="@/assets/icon/home/weather01.png" alt="logo">
                    <div class="temperature">
                        <div class="num">16/23℃</div>  
                        <span class="text">晴转多云</span> 
                    </div>
                </div>
                <screenfull class="fullScreen"/>
                <!-- <div class="information">
                    <div class="region">
                        <div class="lis">空气指数: <span class="difference">38 优</span></div>
                        <div class="lis">风向: <span class="difference">东北风 3~14级</span></div>
                    </div>
                    <div class="region">
                        <div class="lis">PM2.5: <span class="difference">16</span></div>
                        <div class="lis">湿度: <span class="difference">16</span></div>
                    </div>
                </div> -->
            </div>
        </div>
        <!-- <transition 
            enter-active-class="animate__animated animate__bounceInRight"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <component v-if="showRight" :is="tab"></component>
        </transition> -->
        <transition>
            <component ref="myCallThePolice" v-if="showRight" :is="tab"></component>
        </transition>
    </div>
</template>


<script>
import countTo from 'vue-count-to';                                 /// 数字滚动
import Screenfull from '@/components/FullScreen'    //// 全屏组件
import MainMap from '@/components/MainMap'                          /// 主地图

import ReekoRight01 from '@/components/ReekoRight01'                /// 综合总览
import EpidemicSituation from '@/components/EpidemicSituation'      /// 疫情防控
import EventCenter from '@/components/EventCenter'                  /// 指挥中心

import ReekoRight02 from '@/components/ReekoRight02'                /// 能耗环境
import ReekoRight03 from '@/components/ReekoRight03'                /// 楼栋安全
import ReekoRight04 from '@/components/ReekoRight04'                /// 异常警报
import ReekoRight05 from '@/components/ReekoRight05'                /// 停车场
import Building from '@/components/Building'                        /// 楼层管理
import ElevatorManagement from '@/components/ElevatorManagement'    /// 电梯管理
import PeopleCounting from '@/components/PeopleCounting'            /// 人流量
export default {
    components: { MainMap,countTo,ReekoRight01,ReekoRight02,ReekoRight03,ReekoRight04,ReekoRight05,Building,
    EventCenter,PeopleCounting,ElevatorManagement,EpidemicSituation,Screenfull },
    name: "home",
    data() {
        return {
            animateHeader: 'animate__bounceInDown', //* 头部进入效果
            headerNav: [{name: '综合总览',},{name: '疫情防控',},{name: '指挥中心',},{name: '能耗环境',},{name: '楼栋安全',},{name: '停车场',},{name: '电梯管理',},{name: '人流量',},{name: '楼层管理',}],
            headerNavIndex: 0,
            headerData: {data: '',week: '',time:''},  /// 头部日期
            s: 'MainMap',
            tab: 'ReekoRight01',  //* 右部分显示组件
            showRight: false, //* 右部分组件是否显示
            websock: null,
            mainTitle: '综合总览', /// 主标题
        }
    },
    created() {
        this.currentTime() /// 获取日期时间
        if (this.websock) {
            this.websock.close(); // 关闭websocket连接
        }
        this.initWebSocket(); // 长链接
    }, 
    mounted(){
    },
    methods: {
        changeShowRight(status){
            this.showRight = true
        },
        // mainTitles(){
        //     this.$refs.s.classList.add('animate__fadeIn');
        //     setTimeout(()=>{
        //         this.$refs.s.classList.remove('animate__fadeIn');
        //     }, 800);
        // },
        /// 头部导航切换
        navClass (index) {
            this.headerNavIndex = index
            this.mainTitle = this.headerNav[index].name
            //this.mainTitles()
            switch(index){
                case 0:
                    if(this.tab != 'ReekoRight01'){
                        this.tab = 'ReekoRight01'
                        this.$refs.mychild.switchFloors('综合总览')
                    }
                    break;
                case 1:
                    if(this.tab != 'EpidemicSituation'){
                        this.tab = 'EpidemicSituation'
                        this.$refs.mychild.switchFloors('疫情防控')
                    }
                    break;
                case 2:
                    if(this.tab != 'EventCenter'){
                        this.tab = 'EventCenter'
                        this.$refs.mychild.switchFloors('指挥中心')
                    }
                    break;
                case 3:
                    if(this.tab != 'ReekoRight02'){
                        this.tab = 'ReekoRight02'
                        this.$refs.mychild.switchFloors('能耗环境')
                    }
                    break;
                case 4:
                    if(this.tab != 'ReekoRight03'){
                        this.tab = 'ReekoRight03'
                        this.$refs.mychild.switchFloors('楼栋安全')
                    }
                    break;
                case 5:
                    if(this.tab != 'ReekoRight05'){
                        this.tab = 'ReekoRight05'
                        this.$refs.mychild.switchFloors('停车场')
                    }
                    break;
                case 6:
                    if(this.tab != 'ElevatorManagement'){
                        this.tab = 'ElevatorManagement'
                        this.$refs.mychild.switchFloors('电梯管理')
                    }
                    break;
                case 7:
                    if(this.tab != 'PeopleCounting'){
                        this.tab = 'PeopleCounting'
                        this.$refs.mychild.switchFloors('人流量')
                    }
                    break;
                case 8:
                    if(this.tab != 'Building'){
                        this.tab = 'Building'
                        this.$refs.mychild.switchFloors('楼层管理')
                    }
                    break;
            }
        },
        /// 开启定时器
        currentTime() {
            setInterval(this.formatDate, 1000);
        },
        /// 获取日期时间
        formatDate() {
            let date = new Date();
            let year = date.getFullYear(); // 年
            let month = date.getMonth() + 1; // 月
            let day = date.getDate(); // 日
            let week = date.getDay(); // 星期
            let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
            let hour = date.getHours(); // 时
            hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
            let minute = date.getMinutes(); // 分
            minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
            let second = date.getSeconds(); // 秒
            second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
            this.headerData = {
                data: `${year}.${month}.${day}`,
                week: `${weekArr[week]}`,
                time: `${hour}:${minute}:${second}`
            }
        },
        //初始化weosocket
        initWebSocket() {
            if (typeof WebSocket === "undefined") {
                alert("您的浏览器不支持WebSocket");
                return false;
            }
            //const wsuri = 'ws://www.bos.com:9502' // websocket地址
            const wsuri = 'ws://demo.bos.nuomayun.com:9502' // websocket地址
            //const wsuri = 'ws://192.168.100.166:9502'
            
            this.websock = new WebSocket(wsuri);
            this.websock.onopen = this.websocketonopen;
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onerror = this.websocketonerror;
            this.websock.onclose = this.websocketclose;
        },
        //连接成功
        websocketonopen() {
            console.log("WebSocket连接成功");
            // 添加心跳检测，每30秒发一次数据，防止连接断开（这跟服务器的设置有关，如果服务器没有设置每隔多长时间不发消息断开，可以不进行心跳设置）
            let self = this;
            this.timer = setInterval(() => {
                try {
                    self.websock.send('tests')
                    console.log('发送消息');
                }catch(err){
                    console.log('断开了：' + err);
                    self.connection()
                }
            }, 30000)
        },
        //接收后端返回的数据，可以根据需要进行处理
        websocketonmessage(e) {
            // var vm = this;
            // let data1Json = JSON.parse(e.data);
            console.log(e.data.length,'长连接返回值');
            switch (e.data) {
                case '高空抛物':
                    this.navClass (2);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.transmitOne();
                    })
                    break;
                case '危险人物':
                    this.navClass (2);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.transmitWxrw();
                    })
                    break;
                case '人群聚集':
                    this.navClass (7);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.transmitRqjj();
                    })
                    break;
                case '电梯气压':
                    this.navClass (6);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.transmitDtqy();
                    })
                    break;
                case '灯光未关':
                    this.navClass (8);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.transmitDgwg();
                    })
                    break;
                case '资产移走':
                    this.navClass (8);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.transmitZcyz();
                    })
                    break;
                case '灭火器移走':
                    this.navClass (8);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.transmitMhq();
                    })
                    break;
            }
            if(e.data.length > 20){
                let Data = JSON.parse(e.data)
                if(Data.msg_type == '资产'){
                    this.navClass (8);
                    this.$nextTick(()=>{
                        this.$refs.myCallThePolice.unicode = Data.unicode
                        this.$refs.myCallThePolice.sing();
                    })
                }
                //myCallThePolice
            }
        },
        //连接建立失败重连
        websocketonerror(e) {
            console.log(`连接失败的信息：`, e);
            this.initWebSocket(); // 连接失败后尝试重新连接
        },
        //关闭连接
        websocketclose(e) {
            console.log("断开连接", e);
        },
    },
    destroyed() {
        
    },
    // 销毁定时器
    beforeDestroy() {
        //页面销毁时关闭ws连接
        if (this.websock) {
            console.log(111)
            this.websock.onclose
            
            (); // 关闭websocket
        }
        if (this.formatDate) {
            clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器  
        }
    }
};
</script>
<style lang="scss" scoped>
    //.home{font-size: 130px;}
    // @include ellipsis(1);
    //@import "@/assets/scss/home.scss";
    .home{
        height: 100%;position: relative;
        overflow-y: hidden;overflow-x: hidden;
        background: #000000;
        // 主标题
        .mainTitle{position: absolute;top: 80px;left: calc(50% - 183px);z-index: 1;width: 365px;height: 41px;display: flex;align-items: center;justify-content: center;font-size: 28px;color:#ffffff;background:url("../../assets/icon/home/Operation/numBg.png") no-repeat;background-size: 100% 100%;}
        // 进入楼宇
        .getInto{position: absolute;top: 160px;left: 44px;z-index: 1;width: 124px;height: 62px;cursor: pointer;}
        // 顶部
        .header{position: absolute;top: 0;left: 0;z-index: 1;width: 100%;height: 64px;background:url("../../assets/icon/home/headerBg.png") no-repeat;background-size: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .left{
                padding-left: 489px;
                display: flex;
                align-items: center;
                .logo{width: 281px;height: 33px;margin: 0 330px 0 22px;}
                .nav{display: flex;align-items: center;
                    .li{
                        margin-right: 15px;color: #ffffff;cursor: pointer;width: 100px;line-height: 34px;font-size: 12px;background:url("../../assets/icon/home/headerNavN.png") no-repeat;background-size: 100% 100%;
                        .name{padding-left: 34px;}
                    }
                    .li:hover{
                        background:url("../../assets/icon/home/headerNavY.png") no-repeat;color: #2adaf3;background-size: 100% 100%;
                    }
                    .active{
                        background:url("../../assets/icon/home/headerNavY.png") no-repeat;color: #2adaf3;background-size: 100% 100%;
                    }
                }
            }
            .right{
                display: flex;align-items: center;color: #F7F7F7;
                .timeDate{
                    .time{font-size: 29px;color: #2EDADA;padding-bottom: 2px;font-family: 'DIGITAL 7MONO';}
                    .text{font-size: 12px;display: flex;align-items: center;justify-content: space-between;}
                }
                .weather{
                    padding-left: 20px;
                    margin: 0 20px;
                    height: 43px;
                    border-left: 1px solid #2ED9DA;
                    display: flex;
                    align-items: center;
                    .weather01{width: 40px;height: 33px;}
                    .temperature{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        .num{font-family: 'DIGITAL 7MONO';font-size: 24px;color: #2EDADA;padding-bottom: 2px;}
                        .text{font-size: 14px;}
                    }
                }
                .information{
                    height: 43px;
                    font-size: 12px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .region{
                        display: flex;
                        .lis{width: 150px;
                            .difference{color: #3CF4F5;padding-left: 4px;}
                        }
                    }
                    
                }
            }
        }
    }   
    // 动画设置
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .8s;
        //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-leave-active {
        transition: all .3s;
        //transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
