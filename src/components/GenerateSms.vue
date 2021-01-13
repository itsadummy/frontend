<template>
  <div id="client-lists">

      <b-button-group class="btns">
            <b-button variant="dark" @click="prevPage">Prev</b-button>
            <b-button variant="primary" @click="nextPage">Next</b-button>  
            </b-button-group>
        Current Page : <strong>{{currentPage}}</strong>

        <table class="table table-striped table-sm table-light table-hover mt-1"> 
            <thead id="thead">
                <tr>
                    <th >Name</th>
                    <th >Email</th>
                    <th >Content</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="sms in theSmsTableData" v-bind:key="sms.id">
                    <td :style="{width: '250px'}">{{sms.name}}</td>
                    <td :style="{width: '250px'}">{{sms.email}}</td>
                    <td :style="{width: '500px'}"> {{sms.body}}</td>
                </tr>
                </tbody>
        </table>
        
  </div>
</template>

<script>
export default{
    data() {
        return {
            smsTableData:[],
            currentPage: 1,
            pageSize: 5,
            totalRows: 0
        }
    },

    created:function() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(res => {
        this.smsTableData = res;
        })
  },

    methods:{
    
        nextPage:function() {
            if((this.currentPage*this.pageSize) < this.smsTableData.length) this.currentPage++;
        },
        prevPage:function() {
            if(this.currentPage > 1) this.currentPage--;
        }

    },
    
  computed:{
    theSmsTableData:function() {
      return this.smsTableData.filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  }


}
</script>
    
<style scoped>
    
</style>