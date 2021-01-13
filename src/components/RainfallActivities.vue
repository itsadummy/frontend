<template>
  <div class="rainfall_activities">
            <div class="linechart" v-if="arrPositive.length > 0">
                <line-chart :chartData="arrPositive" :options="chartOptions" label="Legend" />
            </div>
  </div>
</template>

<script>
import LineChart from '../components/LineChart'
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'RainfallActivities',

    components: {
        LineChart,
    },

    data() {
        return {
            arrPositive: [],
            arrHospitalized: [],
            arrInIcu: [],
            arrOnVentilator: [],
            arrRecovered: [],
            arrDeath: []
        }
    },

    async created(){
        const {data} = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
        //console.log(data)
        data.forEach(d => {
            const date = moment(d.date, "YYYYMMDD").format("MM/DD");

            const {
                positive,
                hospitalizedCumulative,
                inIcuCurrently,
                onVentilatorCumulative,
                recovered,
                death
            } = d;

            this.arrPositive.push({date, total: positive});
            this.arrHospitalized.push({date, total: hospitalizedCumulative});
            this.arrInIcu.push({date, total: inIcuCurrently});
            this.arrOnVentilator.push({date, total: onVentilatorCumulative});
            this.arrRecovered.push({date, total: recovered});
            this.arrDeath.push({date, total: death});
           

            console.log(this.arrPositive);
            console.log(this.arrHospitalized);
            console.log(this.arrInIcu);
            console.log(this.arrOnVentilator);
            console.log(this.arrRecovered);
            console.log(this.arrDeath);
        }) 
        
    }
}
</script> 

<style scoped>
    
</style>