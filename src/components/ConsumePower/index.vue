<template>
  <div></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    props: ['status'],
  data () {
    return {
        value: 0,
    }
  },
  mounted () {
      let id = ''
      switch(this.status) {
        case 1:
            id = 'ones'
            this.value = 70.2
            break;
        case 2:
            id = 'twos'
            this.value = 34
            break;
        case 3:
            id = 'threes'
            this.value = 52.8
            break;
        case 4:
            id = 'fours'
            this.value = 63.4
            break;
    } 
    console.log(id)
    this.inits(id) /// 初始化
  },
  methods: {
    inits (id) {
        let data = this.value;
        let visitorChart = echarts.init(document.getElementById(id))
        let option = {
            // title: {
            //     text: '业务完成率',
            //     textStyle: {
            //         color: '#22f5ff',
            //         fontSize: 48,
            //         fontWeight: 'normal',
            //     },
            //     x: 'center',
            //     y: '80%',
            // },
            tooltip: { show: false },
            legend: { show: false },
            polar: {
                radius: ['100%', '85%'],
                center: ['50%', '50%'],
            },
            angleAxis: { max: 100, show: false },
            radiusAxis: {
                type: 'category',
                show: true,
                axisLabel: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
            },

            series: [
                
                {
                    name: '业务完成率',
                    type: 'bar',
                    silent: true,
                    roundCap: true,
                    showBackground: true,
                    backgroundStyle: { color: '#0a3887' },
                    coordinateSystem: 'polar',
                    itemStyle: { color: '#22f5ff' },
                    data: [data],
                },
                {
                    type: 'pie',
                    silent: true,
                    color: '#0a3887',
                    data: [1],
                    label: {
                        show: true,
                        position: 'center',
                        color: '#fff',
                        fontSize: 12,
                        formatter: () => `${data}%`,
                    },
                    radius: ['0%', '0%'],
                    center: ['50%', '50%'],
                },
            ],
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