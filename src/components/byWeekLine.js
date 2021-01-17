import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    props: ['barData', 'chartOptions'],
    mounted(){
    this.renderChart(this.barData, this.chartOptions);
    },
}
    
