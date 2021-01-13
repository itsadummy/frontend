<template>
    <div class="rainfall_list">
        <strong>Rainfall Activity List</strong>
        <b-card> 
            
            <table class="table table-striped table-sm table-light table-hover mt-1"> 
            <thead id="thead">
                <tr>
                    <th >Type</th>
                    <th >Status</th>
                    <th >Measurement</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="rainfall in rainfallsData" v-bind:key="rainfall" :style="{height: '20px'}">
                    <td :style="{width: '250px'}">{{rainfall.raintype}}</td>
                    <td :style="{width: '250px'}">{{rainfall.status}}</td>
                    <td :style="{width: '500px'}"> {{rainfall.measurement}}</td>
                </tr>
                </tbody>
            </table> 
            Current Page : <strong>{{currentPage}}</strong>
            <div class="btns mt-1">
                <b-button-group size="sm">
                <b-button variant="dark" @click="prevPage" >Prev</b-button>
                <b-button @click="nextPage">Next</b-button>
                </b-button-group>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'RainfallList',

    data() {
        return {
            rainfalls:[],
            currentPage: 1,
            pageSize: 5,
            totalRows: 0
        }
    },

    created:function() {
        fetch('http://127.0.0.1:8000/api/appapi/')
        .then(res => res.json())
        .then(res => {
        this.rainfalls = res;
        })
  },

    methods:{
    
        nextPage:function() {
            if((this.currentPage*this.pageSize) != this.rainfalls.length) this.currentPage++;
        },
        prevPage:function() {
            if(this.currentPage > 1) this.currentPage--;
        }

    },
    
  computed:{
    rainfallsData:function() {
      return this.rainfalls.filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  }
}
</script>

<style scoped>
.btns{
    float: right;
}
</style>