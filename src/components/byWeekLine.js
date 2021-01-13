import {Line, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Array,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted() {
        const dates = this.chartData.map(d => d.date).reverse();
        const totals = this.chartData.map(d => d.total).reverse();
    
            this.renderChart({
              labels: dates,
              datasets: [
                  {
                  label: this.label,
                  data: totals
                  }
              ]
          },
          this.options
            );
    },
}