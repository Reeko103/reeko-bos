<template>
    <div>
    <div class="reekoRight animate__animated animate__bounceInRight">
        <div class="content">
        <img class="Title" src="@/assets/icon/home/reekoRight04/img01.png">
        <div class="situation">
            <span class="decorate"></span>
            <div class="up">
                <div class="left">
                    <img class="" src="@/assets/icon/home/reekoRight04/img01-1.png">
                    <div class="alarmRate">
                        <span>消防报警率</span>
                        <span class="num"><countTo :decimals="2" :startVal='0' :endVal='79.4' :duration='10000'></countTo>%</span>
                    </div>
                </div>
                <div class="right">
                    <div class="equipmentAlarm">
                        <span>设备报警</span>
                        <span class="num"><countTo :decimals="2" :startVal='0' :endVal='26.4' :duration='10000'></countTo>%</span>
                        <span class="text">2分钟内处理</span>
                    </div>
                    <ul class="degree">
                        <li>
                            <span>严重</span>
                            <span><countTo :decimals="2" :startVal='0' :endVal='87.9' :duration='10000'></countTo>%</span>
                        </li>
                        <li>
                            <span>较重</span>
                            <span><countTo :decimals="2" :startVal='0' :endVal='23.7' :duration='10000'></countTo>%</span>
                        </li>
                        <li>
                            <span>一般</span>
                            <span><countTo :decimals="2" :startVal='0' :endVal='10.4' :duration='10000'></countTo>%</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="up difference">
                <div class="left">
                    <img class="img01-2" src="@/assets/icon/home/reekoRight04/img01-2.png">
                </div>
                <div class="right">
                    <div class="equipmentAlarm">
                        <span>运行报警</span>
                        <span class="num"><countTo :decimals="2" :startVal='0' :endVal='65.3' :duration='10000'></countTo>%</span>
                        <span class="text">2分钟内处理</span>
                    </div>
                    <ul class="degree">
                        <li>
                            <span>严重</span>
                            <span><countTo :decimals="2" :startVal='0' :endVal='87.9' :duration='10000'></countTo>%</span>
                        </li>
                        <li>
                            <span>较重</span>
                            <span><countTo :decimals="2" :startVal='0' :endVal='23.7' :duration='10000'></countTo>%</span>
                        </li>
                        <li>
                            <span>一般</span>
                            <span><countTo :decimals="2" :startVal='0' :endVal='10.4' :duration='10000'></countTo>%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

            <!-- 异常记录 -->
        <img class="Title" src="@/assets/icon/home/reekoRight04/img02.png">
        <ul class="abnormal">
            <li>
                <div class="lef">
                    <span class="tips"></span>
                    <span class="text special">【维修部】 加压器DC92829出现异常</span>
                    <span class="see">查看</span>
                </div>
                <span class="time">2021-03-30</span>
            </li>
            <li>
                <div class="lef">
                    <span class="tips tipsOne"></span>
                    <span class="text">【行政部】 发电机DC928122129出现异常</span>
                    <span class="see">查看</span>
                </div>
                <span class="time">2021-03-30</span>
            </li>
            <li>
                <div class="lef">
                    <span class="tips"></span>
                    <span class="text">【维修部】 机床DC92829出现异常</span>
                    <span class="see">查看</span>
                </div>
                <span class="time">2021-03-30</span>
            </li>
            <li>
                <div class="lef">
                    <span class="tips"></span>
                    <span class="text">【维修部】 机床DC92829出现异常</span>
                    <span class="see">查看</span>
                </div>
                <span class="time">2021-03-30</span>
            </li>
        </ul>

        <!-- 视频检测 -->
        <img class="Title" style="width: 330px;" src="@/assets/icon/home/reekoRight04/img03.png">
        <ul class="video">
                    <!-- <li>
                    <video src="./as.mp4" autoplay="autoplay" loop="loop" controls="controls"></video>
                    </li>
                    <li>
                    <video src="./as.mp4" autoplay="autoplay" loop="loop" controls="controls"></video>
                    </li>
                    <li>
                    <video src="./as.mp4" autoplay="autoplay" loop="loop" controls="controls"></video>
                    </li>
                    <li>
                    <video src="./as.mp4" autoplay="autoplay" loop="loop" controls="controls"></video>
                    </li> -->
        </ul>
        <!-- 能耗管理 -->
        <img class="Title" style="width: 330px;" src="@/assets/icon/home/reekoRight04/img04.png">
        <div class="consumption">
            <img class="" src="@/assets/icon/home/reekoRight04/img04-1.png">
            <span class="one"><countTo :startVal='0' :endVal='65' :duration='10000'></countTo>%  <span class="tips">日能耗使用率</span></span>
            <div class="two">
                <span class="num"><countTo :startVal='0' :endVal='86' :duration='10000'></countTo>%</span>
                <span class="tips">周能耗使用率</span>
            </div>
            <div class="three">
                <span class="num"><countTo :startVal='0' :endVal='24' :duration='10000'></countTo>%</span>
                <span class="tips">月能耗使用率</span>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'; /// 数字滚动
export default {
  components: { countTo  },
  data () {
    return {
        playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
            autoplay: false, // 如果为true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 是否视频一结束就重新开始。
            preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: "zh-CN",
            aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [
                {
                    type: "video/mp4", // 类型
                    src:
                        "./as.mp4" // url地址
                }
            ],
            poster: "", // 封面地址
            notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
                timeDivider: true, // 当前时间和持续时间的分隔符
                durationDisplay: true, // 显示持续时间
                remainingTimeDisplay: false, // 是否显示剩余时间功能
                fullscreenToggle: true // 是否显示全屏按钮
            },
        },
    }
  },
  mounted () {
  },
  methods: {
    /// 切换上班模式
    workModeChange (e) {
        console.log(e)
    },
    /// 切换下班模式
    offModeChange (e) {
        console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: calc(100% - 100px); background:url("../../assets/icon/home/reekoRightBg.png") no-repeat;color: #FFFFFF;background-size: 100% 100%;
  .content{padding: 0 16px 40px; height: calc(100% - 40px);display: flex; flex-direction: column; justify-content: space-around; 
    .Title{width: 358px;height: 26px;margin: 10px 0;}
    // 今日预警处理情况
    .situation{font-size: 12px;
    padding:20px 0;border-top: 1px solid rgba(105,112,128, 0.55);position: relative;
        .decorate{position: absolute;top: -1px;left: 0;z-index: 1;width: 19px;height: 1px;background: #00E5FF;}
        .up{display: flex;align-items: center;justify-content: space-between;
            .left{display: flex;align-items: center;justify-content: center;
            width: 50%;
            border-right: 1px solid #175FB3;
                .img01-2{width: 111px;height: 79px;}
                img{width: 46px;height: 46px;}
                .alarmRate{padding-left: 13px;display: flex;flex-direction: column;justify-content: center;
                    .num{font-size: 26px;color: #61D2E1;padding-top: 20px;}
                }
            }
            .right{
                width: 50%;display: flex;justify-content: center;
                .equipmentAlarm{display: flex;flex-direction: column;padding-right: 20px;
                    .num{color: #61D2E1;font-size: 22px;padding: 11px 0 6px;}
                    .text{color: #B9B9B9;font-size: 10px;}
                }
                .degree{width: 80px; font-size: 10px;color: #61D2E1;display: flex;flex-direction: column;justify-content: space-between;
                    li{display: flex;justify-content: space-between;}
                }
            }
        }
        .difference{padding-top: 30px;
            .left{border-right: none;}
        }
    }
    // 异常记录
    .abnormal{
        font-size: 12px;
        li{
            display: flex;align-items: center;justify-content: space-between;padding-bottom: 10px;
            .lef{display: flex;align-items: center;color: #1FEED5;
                .tips{width: 6px;height: 6px;border-radius: 50%;background: #FF0048;margin-right: 10px;}
                .tipsOne{background: #EE9C0E;}
                .see{padding: 4px 6px;font-size: 10px;border-radius: 4px;background: rgba(255,255,255, 0.27);margin-left: 5px;}
                .special{color: #FF5F67;}
                .text{@include ellipsis(1)}
            }
            .time{color: #AAAAAA;}
        }
    }
    // 视频检测
    .video{display: flex;align-items: center;flex-wrap: wrap;justify-content: space-between;
        li{width: 49%;height: 100px;border: 1px solid #61D2E1;
        margin-bottom: 5px;
            video{width: 100%;height: 100%;}
        }
    }
    // 能耗管理
    .consumption{
        position: relative;
        text-align: center;
        font-size: 12px;
        color: #F1F6FF;
        img{width: 136px;height: 117px;}
        .one{position: absolute;top: 0;left: 200px;z-index: 1;}
        .two{display: flex;flex-direction: column;align-items: flex-end;position: absolute;bottom: -24px;left: 50px;z-index: 1;}
        .three{display: flex;flex-direction: column;align-items: flex-start;position: absolute;bottom: -24px;right: 50px;z-index: 1;}
        .num{padding-bottom: 7px;}
        .tips{color: rgba(241,246,255, 0.47);}
    }
  }
}
</style>