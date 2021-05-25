<template>
<div class="mainMap">
    <div id="MapOne"></div>
</div>
    
</template>

<script>
import  '../../../public/map/lib/fengmap.map.min.js' //注意路径
var map;
var onAnimate = false;


let G_PAUSE = false;
let G_IS_ROTATE = false;
let G_NOW_ROTATE = 180;
export default {
  props: ['status'],
  data () {
    return {
        map: '',
        top:0,
    }
  },
  mounted(){
    this.openMap() /// 加载地图
  },
  methods: {
        /// 室内-室外切换
        switchFloors(value){
            let map = this.map
        },
        /// 加载地图
        openMap () {
            let that = this
            const fmapID = '1386480942031998978';
            let map = new fengmap.FMMap({
                appName: '挪码室内停车场',
                key: '811d64f99bbf27a006d418895c984dd9',
                mapID: '1395322273965740033',
                container: document.getElementById('MapOne'),
            })
            this.map = map
            map.openMapById(fmapID);//mapId

            // map.on('loadComplete', ()=> {
            //     console.log(1)
            //     /**
            //      * 向地图场景中添加模型文件
            //      */
            //     var marker = new fengmap.FMDynamicModel({
            //     url: '../../../public/map/data/1386480942031998978/models/1004.glb',
            //     x: 11584740.039132884,
            //     y: 3555758.308686555,
            //     callback: function() {
            //         console.log('模型加载完成。');
            //     }
            //     });
            //     var level = map.getLevel()
            //     console.log(level)
            //     var floor = map.getFloor(level);
            //     console.log(floor)
            //     /* 将 Marker 添加到地图的指定楼层上 */
            //     marker.addTo(floor);
            // });

            //地图加载完成事件
            // map.on('loadComplete', () => {
            //     const pnt = { x: 11583388.641292814, y: 3576021.0869054548, groupID:1, time:.1, callback:()=>{}};
            //     map.moveTo(pnt);
            //     this.updateLevel('200110');
            //     //map.setBackground(require('./bg.jpg'))//加载背景图片
            //     map.setBackgroundColor('#FFFFFF', 0.0);

                
            // });

            // //外部模型加载完成事件
            // map.on('gltfLoaded', () =>{
            //     this.addFlowLine(path); 
            //     this.$emit('changeShowRight', true)
            //     map.scaleTo({duration:2,scale:2000,callback:()=>{
            //         map.tiltTo({to:10,duration:1, callback:()=>{
            //             window.setInterval(()=>{
            //                 //console.log(G_PAUSE,G_IS_ROTATE)
            //                 if(G_PAUSE || G_IS_ROTATE) return;
            //                 if(G_NOW_ROTATE === 360) G_NOW_ROTATE = 0;
            //                 G_IS_ROTATE = true
            //                 map.rotateTo({to:G_NOW_ROTATE,duration:1,callback:()=>{
            //                     G_NOW_ROTATE += 5
            //                     G_IS_ROTATE = false
            //                 }})
            //             },100)
            //         }})
            //     }}); // 缩放


            //     //map.getAutoRotateBymodelSpeed(50); // 自转速度
            //     //map.setAutoRotateBymodel(true); // 开启自转
                
            // });
            //点击地图事件
            map.on('mapClickNode', function (event) {
                const target = event.target;
                switch (event.nodeType) {
                case fengmap.FMNodeType.FLOOR:
                    break;
                case fengmap.FMNodeType.MODEL:
                    break;
                case fengmap.FMNodeType.IMAGE_MARKER:
                    break;
                case fengmap.FMNodeType.TEXT_MARKER:
                    break;
                case fengmap.FMNodeType.POLYGON_MARKER:
                    break;
                case fengmap.FMNodeType.FACILITY:
                    break;
                }
                console.log(event)
                //alert("你点击了"+target.name);
            });
        },
  }
}
</script>
<style lang="scss" scoped>
// 地图
        .mainMap,#MapOne{height: calc(100% - 2px);}
</style>