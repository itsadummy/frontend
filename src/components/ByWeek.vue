<template>
  <div class="byweek">
      <byWeekLine
      :chartData="datacollection"
      >
      </byWeekLine>
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
            datacollection: null,
            loaded: false,
            temperature: [0,1,2,3,4,5,6,7,8,9],
            humidity: [9,8,7,6,5,4,3,2,1,0],
            pressure: [4,6,4,6,4,6,4,6,4,6],
            time: [0,1,2,3,4,5,6,7,8,9]
        }
    },
    
    async mounted() {
        this.fillData()
        await this.fetchAPI()
    },
    
    methods: {
        fillData(){
            this.datacollection = {
                labels: this.time,
                datasets: [
                    {
                        label: "Temperature",
                        backgroundColor: 'rgba(255, 0, 0, 0.2)',
                        borderColor: 'lightpink',
                        pointBackgroundColor: 'red',
                        borderWidth: 1,
                        pointBorderColor: 'red',
                        data: this.temperature
                    },
                    {
                        label: "Humidity",
                        backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        borderColor: 'lightblue',
                        pointBackgroundColor: 'blue',
                        borderWidth: 1,
                        pointBorderColor: 'blue',
                        data: this.humidity
                    },
                    {
                        label: "Potentio",
                        backgroundColor: 'rgba(255, 255, 0, 0.2)',
                        borderColor: 'orange',
                        pointBackgroundColor: 'orange',
                        borderWidth: 1,
                        pointBorderColor: 'orange',
                        data: this.pressure
                    }
                ]
            }
        },
        fetchAPI(){
            var url = 'https://apiv2.favoriot.com/v2/streams?device_developer_id=weatherapi@sgslvna&max=5 '
            var headers = {
                headers: {
                    'Content-type': 'application/json',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNnc2x2bmEiLCJyZWFkX3dyaXRlIjp0cnVlLCJpYXQiOjE2MTA1MTUxMDd9.GClpxC9eQCPejGBVvkrG0wVEdtwv3Vb2J-OByiW5Hb8'
                }
            }

            axios.get(url, headers)
            .then((x) => {
                //console.log(x.data.results)
                var results = x.data.results
                var temp = []
                var hum = []
                var pres = []
                var time = []

                for(var i=2; i>=0; i--){
                    var t = parseInt(results[i].data.temperature)
                    var h = parseInt(results[i].data.humidity)
                    var p = parseInt(results[i].data.pressure)
                    var ti = results[i].data.strea_created_at.split('T')

                    temp.push(t)
                    hum.push(h)
                    pres.push(p)
                    time.push(ti)
                }
                this.temperature = temp
                this.humidity = hum
                this.pressure = pres
                this.time = ti
                this.fillData()
            })
            .catch((x) => {
                console.log(x)
            })
        },

        postAPI(){

        }
    },

}
</script>

<style>

</style>