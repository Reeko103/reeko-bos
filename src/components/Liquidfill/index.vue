<template>
  <div></div>
</template>

<script>
import * as echarts from 'echarts';
import "echarts-liquidfill";
export default {
    props: ['status'],
  data () {
    return {
        Rgba: '',
        value: 0,
        symbol: '',
    }
  },
  mounted () {
      let id = ''
      switch(this.status) {
        case 1:
            id = 'one'
            this.Rgba = '132,162,221'
            this.value = 0.30
            this.symbol = '℃'
            break;
        case 2:
            id = 'two'
            this.Rgba = '131,224,122'
            this.value = 0.31
            this.symbol = '%'
            break;
        case 3:
            id = 'three'
            this.Rgba = '231,201,142'
            this.value = 0.80
            this.symbol = ''
            break;
        case 4:
            id = 'four'
            this.Rgba = '239,157,157'
            this.value = 0.58
            this.symbol = ''
            break;
    } 
    console.log(id)
    this.inits(id) /// 初始化
  },
  methods: {
    inits (id) {
        let Rgba = this.Rgba
        let visitorChart = echarts.init(document.getElementById(id))
        let value = this.value;
        let data = [value, value, value,];
        let option = {
          title: {
            text: (value * 100).toFixed(0) + `{a|${this.symbol}}`,
            textStyle: {
              fontSize: 20,
              fontFamily: 'Microsoft Yahei',
              fontWeight: 'normal',
              color: '#ffffff',
              rich: {
                a: {
                  fontSize: 20,
                }
              }
            },
            x: 'center',
            y: '35%'
          },
          series: [{ /// 内圈样式
            type: 'liquidFill',
            radius: '94%',
            center: ['50%', '50%'],
            //  shape: 'roundRect',
            data: data,
            backgroundStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                globalCoord: false
              },
            },
            outline: { /// 外圈颜色
              borderDistance: 0,
              itemStyle: {
                borderWidth: 5,
                borderColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: `rgba(${Rgba}, 0.5)`
                  }, {
                    offset: 0.5,
                    color: `rgba(${Rgba}, 0.8)`
                  }, {
                    offset: 1,
                    color: `rgba(${Rgba}, 1)`
                  }],
                  globalCoord: false
                },
                shadowBlur: 10,
                shadowColor: '#000',
              }
            },
            itemStyle: { // 波纹设置
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: `rgba(${Rgba}, 0)`
                }, {
                  offset: 0.5,
                  color: `rgba(${Rgba}, .2)`
                }, {
                  offset: 0,
                  color: `rgba(${Rgba}, 1)`
                }],
                globalCoord: false
              },
            },
            label: {
                formatter: '',
            }
          },]
        };
      // 使用刚指定的配置项和数据显示图表。
      visitorChart.setOption(option);
          //随着屏幕大小调节图表
          window.addEventListener("resize", () => {
            visitorChart.resize();
      });
    }
  }
}
</script>