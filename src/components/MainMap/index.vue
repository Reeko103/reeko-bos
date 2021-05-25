<template>
<div class="mainMap">
    <div id="fengMap"></div>
    <!-- <button @click="switchFloors(2)" style="position: absolute;top:200px">去室内</button>
    <button @click="switchFloors(1)" style="position: absolute;top:220px">去室外</button>
    <button @click="changeG2()" style="position: absolute;top:240px">去会议室</button>
    <button @click="drawText()" style="position: absolute;top:260px">文字标注</button>  
    <button @click="drawImg()" style="position: absolute;top:280px">图片标注</button>
    <button @click="drawPoint()" style="position: absolute;top:300px">定位标注</button> -->
</div>
    
</template>


<script>
import  '../../../public/map/lib/dat.gui.min.js' //注意路径
import  '../../../public/map/lib/fengmap.core.min.js' //注意路径
import  '../../../public/map/lib/fengmap.control.min.js' //注意路径
import  '../../../public/map/lib/fengmap.render.min.js' //注意路径
import  '../../../public/map/lib/fengmap.analyzer.min.js' //注意路径
import  '../../../public/map/lib/fengmap.navi.min.js' //注意路径
import  '../../../public/map/js/path.js' //注意路径
var fmapID = '1386480942031998978';
var effectRender = null;
var gui = null;     //gui控件对象
        var searchAnalyser;
        var groupControl;
        var clickCount = 0;
        var lastCoord = null;
        var naviLines = [];
        var radioVal;
        //控制文本标注层显示/隐藏
        var labelVisible = true;
        //控制POI标注层显示/隐藏
        var poiVisible = true;
        //控制extent显示/隐藏
        var extentVisible = true;
        //控制store显示/隐藏
        var storeVisible = true;
        var labelAllVisible = true;
        var poiAllVisible = true;
        var extentAllVisible = true;
        var storeAllVisible = true;
        var isClick = false;
        var isBestRoute = true;
        var isHideExternalModel = false;
        var hideExternalModels = [];
		var effectRender = null;
		var gui = null;     //gui控件对象
		var effectController = {
            exposure: 1.1,          //曝光强度
            bloomStrength: 0.5,     //发光强度：值越大越亮
            bloomThreshold: 0.1,   //发光阈值：建议取值范围：0-1，值越小越亮，1为不发光
            bloomRadius: 0.5    //发光半径：建议取值范围：0-1，值越大，发光范围越大
        };

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
        // 转动控制
        // turnControl(map,to){
        //     G_PAUSE = true
        //     map.rotateTo({to,duration:0.5,callback:()=>{
        //         G_NOW_ROTATE = to
        //         G_IS_ROTATE = false
        //     }})
        // },
        /// 室内-室外切换
        switchFloors(value){
            let map = this.map
            switch (value) {
                case '综合总览':
                case '指挥中心':
                    G_PAUSE = false         /// 开启旋转
                    map.moveTo({ x: 11583388.641292814, y: 3576021.0869054548, groupID:1, time:.5, callback:()=>{ }});
                    map.scaleTo({duration:.5,scale:2000,callback:()=>{
                        map.tiltAngle = 10      /// 倾斜角度
                    }}); // 缩放
                    
                    
                    break;
                case '人流量':
                
                    map.tiltTo({duration:.5,to:30,callback:()=>{}});/// 倾斜角度
                    map.moveTo({ x: 11583388.641292814, y: 3576021.0869054548, groupID:1, time:.5, callback:()=>{ }});
                    // map.moveTo({ x: 11583635.618584398, y: 3576562.1645018533, groupID:1, time:.5, callback:()=>{
                       // map.tiltAngle = 30      /// 倾斜角度
                    // map.scaleTo({duration:.5,scale:2000,update:()=>{
                    //     map.rotateAngle = 16    // 旋转角度
                    //     map.tiltAngle = 10      // 倾斜角度
                    // }}); // 缩放
                    // }}); /// 定位
                    
                    break;
                case '能耗环境':
                    G_PAUSE = true // 暂停旋转
                    map.moveTo({ x: 11583635.618584398, y: 3576562.1645018533, groupID:1, time:.5, callback:()=>{
                        
                    // map.scaleTo({duration:.5,scale:1500,update:()=>{
                    //     map.rotateAngle = 16    // 旋转角度
                    //     map.tiltAngle = 10      // 倾斜角度
                    // }}); // 缩放
                    }}); /// 定位
                    break;
                case '楼栋安全':
                    G_PAUSE = true                  // 暂停旋转
                    map.moveTo({ x: 11583388.641292814, y: 3576021.0869054548, groupID:1, time:.5, callback:()=>{ }});
                    // map.scaleTo({duration:.5,scale:1400,callback:()=>{
                    //    map.rotateAngle = 10    // 旋转角度
                    // }}); // 缩放
                    // map.rotateTo({to:20,duration:2,callback:()=>{
                    // }}); // 缩放
                    break;
                case '停车场':
                case '楼层管理':
                    G_PAUSE = true // 暂停旋转
                    map.moveTo({ x: 11583635.618584398, y: 3576562.1645018533, groupID:1, time:.5, callback:()=>{
                        
                    map.scaleTo({duration:.5,scale:2000,update:()=>{
                        map.rotateAngle = 16    // 旋转角度
                        map.tiltAngle = 10      // 倾斜角度
                    }}); // 缩放
                    }}); /// 定位
                    break;
                case '电梯管理':
                    G_PAUSE = true // 暂停旋转
                    map.moveTo({ x: 11583635.618584398, y: 3576562.1645018533, groupID:1, time:.5, callback:()=>{
                        
                    map.scaleTo({duration:.5,scale:2000,update:()=>{
                        map.rotateAngle = 16    // 旋转角度
                        map.tiltAngle = 10      // 倾斜角度
                    }}); // 缩放
                    }}); /// 定位
                    break;
            }
            
        },
        updateLevel(typeid){
            let map = this.map
            var groups = map.nodeManager._scenes[fmapID].groups;
            //for(var i in obj) {
            for(var i in groups){
                var group = groups[i];
                var target = group._layers['extent'][0];
                //console.log(target.scene);
                var models = group._layers['model'][0]._models;
                for (var ii in models){
                    var model = models[ii];
                    if((''+model.bdata.type) === (''+typeid)){
                        target.scene.add(model.renderNode.clone());
                        model.renderNode.visible=false;
                    }						
                }
            }
            map.setRenderList();
        },
        /// 加载地图
        openMap () {
            let that = this
            const fmapID = '1386480942031998978';
            let map = new fengmap.FMMap({
                container : document.getElementById("fengMap"), //设置显示地图容器
                mapServerURL:'./map/data/' + fmapID,//地图数据位置
                mapThemeURL: './map/data/theme',//设置主题
                defaultThemeName: '1386480942031998978',//设置默认主题
                defaultViewCenter: { x:11583388.641292814,y:11583388.641292814 },
                appName:'挪码室内停车场',           //开发者应用名称
                key:'811d64f99bbf27a006d418895c984dd9',  //开发者申请应用下web服务的key
                defaultVisibleGroups:[1],           //设置初始显示楼层，数组格式，可单个，可多个
                // defaultFocusGroup: 1,               //初始聚焦楼层
                
                mapScaleLevelRange: [16,29],//设置比例尺级别可缩放范围， 通常室内地图使用到的范围为16级到23级。即：[16,23]
                defaultMapScale: 5000,
                defaultMapScaleLevel: 18,//设置地图初始显示比例尺级别。范围为1-29之间的整数值。如29级的比例尺为1:1厘米。
                //是否开启对数深度缓存来处理巨大的比例差异带来的闪面问题
                logarithmicDepthBuffer: true,
                defaultControlsPose: 180,//地图默认旋转角度
                defaultTiltAngle: 90,	        //倾斜角，默认45度
            })
            this.map = map
            
            this.initEffectRender(map);
            map.openMapById(fmapID);//mapId

            //地图加载完成事件
            map.on('loadComplete', () => {
                const pnt = { x: 11583388.641292814, y: 3576021.0869054548, groupID:1, time:.1, callback:()=>{}};
                map.moveTo(pnt);
                this.updateLevel('200110');
                map.setBackground(require('./bg.jpg'))//加载背景图片
                map.setBackgroundColor('#FFFFFF', 0.0);

                
            });

            //外部模型加载完成事件
            map.on('gltfLoaded', () =>{
                this.addFlowLine(path); 
                this.$emit('changeShowRight', true)
                map.scaleTo({duration:2,scale:2000,callback:()=>{
                    map.tiltTo({to:10,duration:1, callback:()=>{
                        window.setInterval(()=>{
                            //console.log(G_PAUSE,G_IS_ROTATE)
                            if(G_PAUSE || G_IS_ROTATE) return;
                            if(G_NOW_ROTATE === 360) G_NOW_ROTATE = 0;
                            G_IS_ROTATE = true
                            map.rotateTo({to:G_NOW_ROTATE,duration:1,callback:()=>{
                                G_NOW_ROTATE += 5
                                G_IS_ROTATE = false
                            }})
                        },100)
                    }})
                }}); // 缩放


                //map.getAutoRotateBymodelSpeed(50); // 自转速度
                //map.setAutoRotateBymodel(true); // 开启自转
                
            });
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
        // 发光效果
        initEffectRender(map) {
            effectRender = map.getEffectRenderer();
            effectRender.enableBloom(true); //启用bloom发光效果
            //设置初始化参数，非必填，可使用sdk内部默认初始参数
            // effectRender.bloomPass.strength = 0.5;
            // effectRender.bloomPass.threshold = 0.02;
            // effectRender.bloomPass.radius = 0.5;
            // effectRender.renderer.toneMappingExposure = 1.2;
            effectRender.bloomPass.strength = 0.7;
            effectRender.bloomPass.threshold = 0.4;
            effectRender.bloomPass.radius = 0.7;
            effectRender.renderer.toneMappingExposure = 1.4;
        },
        // 流光线
        addFlowLine(pathdata) {
            let map = this.map
            var z = 0.5;
            var features = pathdata.features;
            var flowdata = {};
            var flowlength = {};
            for (var i = 0; i < features.length; i++) {
                var coordinates = features[i].geometry.coordinates;
                var points = [];
                var lineLength = 0;
                for (var ii = 0; ii < coordinates.length; ii++) {
                    points.push(coordinates[ii][0]);
                    points.push(coordinates[ii][1]);
                    points.push(z);
                    if (ii > 0) {
                        var dis_x = (coordinates[ii][0] - coordinates[ii - 1][0]);
                        var dis_y = (coordinates[ii][1] - coordinates[ii - 1][1]);
                        var length = Math.sqrt(dis_x * dis_x + dis_y * dis_y);
                        lineLength = lineLength + length;
                    }
                }
                flowdata['points' + (i + 10)] = points;
                if (lineLength < 50) {
                    flowlength['points' + (i + 10)] = 1;
                } else {
                    flowlength['points' + (i + 10)] = 20;
                }
            }
            console.log(flowdata);
            console.log(flowlength);
            var lineoption = {
                center: map.center,
                lineWidth: 4,
                color: "#d39c31",//流光线的流光色
                backgroundColor: "#20325b",//流光线的底色
                opacity: 1.0,
                lineLength: 100,
                speed: 1
            }
            var flowLineLayer = map.getFMGroup(map.focusGroupID).getOrCreateLayer('flmMarker');
            for (var key in flowdata) {
                var value = flowdata[key];
                lineoption.lineLength = flowlength[key];
                console.log(lineoption.lineLength);
                var optins = Object.assign(lineoption, { points: value });
                var flowLineMarker = new fengmap.FMFlowLineMarker(optins);
                flowLineLayer.addMarker(flowLineMarker);
            }
            effectRender.addBloomList(flowLineLayer);
			var modellayer = map.nodeManager._scenes[fmapID].groups[1]._layers.externalModel[0];
			effectRender.addBloomList(modellayer);
        },
  }
}
</script>
<style lang="scss" scoped>
// 地图
        .mainMap,#fengMap,#buildingMap{height: calc(100% - 2px);}
</style>