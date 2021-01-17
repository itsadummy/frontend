<template>
  <div>
      <div>
          <b-button-group class="btn-group btn-group-sm">
              <b-button class="btn btn-outline-dark" variant="white">Day</b-button>
              <b-button class="btn btn-outline-dark text-white" variant="dark">Week</b-button>
              <b-button class="btn btn-outline-dark" variant="white">Mon</b-button>
              <b-button class="btn btn-outline-dark text-white" variant="dark">Year</b-button>
          </b-button-group>
      </div>

      <byWeekLine v-if="ChartConfig.labels.length" 
      :bar-data="ChartConfig" :chart-options="options"
      :style="{height: '290px'}"/>
  </div>
</template>

<script>
import byWeekLine from '../components/byWeekLine.js'
import axios from 'axios'
export default {
    components: {
        byWeekLine,
    },

    data() {
        return {
            ChartConfig: {
                labels: [],
                level: [],
                datasets: [
                    {
                    data: [], 
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    "fill": false,
                    
                    borderColor: 'lightpink',
                    pointBackgroundColor: 'red',
                    borderWidth: 1,
                    pointBorderColor: 'red',
                    label: "Amount "
                    },
                    {
                    data: [], 
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    "fill": false,
                    borderColor: 'lightblue',
                    pointBackgroundColor: 'lightblue',
                    borderWidth: 1,
                    pointBorderColor: 'lightblue',
                    label: "Level "
                   
                    },
                ]   
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  position: 'bottom'
                },
                layout: {
                  padding: {
                    left: 25,
                    right: 0,
                    bottom: 0
                  }
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Day'
                    }
                    }],
                    yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value per ticks'
                    }
                    }]
                }
            },
        }
    },
    mounted: function () {
        this.getListData();
    },

    methods: {
    getListData: async function () {

      this.status = "getting data...";
     // var that = this;
        
        await axios.get("https://mdrrmo-scl.herokuapp.com/api/v1/rainfall.json").then((response) => {
        //await axios.get("http://127.0.0.1:8000/api/appapi/").then((response) => {
        //await axios.get("https://api.covidtracking.com/v1/us/daily.json").then((response) => {
        //await axios.get("http://my-json-server.typicode.com/isogunro/jsondb/chartData").then((response) => {
        //await axios.get("https://my-json-server.typicode.com/isogunro/jsondb/IceCream").then((response) => {
        console.log(response.data)
        this.getChartData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getChartData: function (chartData) {
      //console.log(chartData);
      
      for (var i = 0; i < chartData.length; i++) {
        this.ChartConfig.labels.push(chartData[i].timestamp.split('T'))
        //this.$set(this.ChartConfig.labels,i,chartData[i].Flavor)
      }

      for (var v = 0; v < chartData.length; v++) {
       this.ChartConfig.datasets[0].data.push(chartData[v].amount)
       this.ChartConfig.datasets[1].data.push(chartData[v].amount) //di ko pa alam kung pano mababago
                                                                    // yun sa level dapat sa hover kita yun
                                                                    //Torrential kaso nag eerror pag string
        //this.$set(this.ChartConfig.labels,i,chartData[i].Vote)
      }

      console.log(this.ChartConfig);
    }
  }
}
</script>

<style scoped>
  .btn-group{
    float: right;
  }
</style>
