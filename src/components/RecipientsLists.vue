<template>
  <div class="recipients-list">

    <b-container class="container-fluid">
        <b-row>
            <b-col>
                    <table class="table table-striped table-sm table-light table-hover mt-1"> 
                        <thead id="thead">
                            <tr>
                                <th >Name</th>
                                <th >Phone</th>
                                <th >Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="recipient in recipientsTableData" v-bind:key="recipient.id">
                                <td :style="{width: '250px'}">{{recipient.name}}</td>
                                <td :style="{width: '250px'}">{{recipient.phone}}</td>
                                <td :style="{width: '500px'}"> {{recipient.address}}</td>
                            </tr>
                            </tbody>
                    </table>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
    name: 'RecipientsLists',


    data() {
        return {
            recipients:[],
            currentPage: 1,
            pageSize: 7,
            totalRows: 0
        }
    },

    created:function() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
        this.recipients = res;
        })
  },

    methods:{
    
        nextPage:function() {
            if((this.currentPage*this.pageSize) != this.recipients.length) this.currentPage++;
        },
        prevPage:function() {
            if(this.currentPage > 1) this.currentPage--;
        }

    },
    
  computed:{
    recipientsTableData:function() {
      return this.recipients.filter((row, index) => {
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