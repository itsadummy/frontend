<template>
  <div id="app">
    <router-view/>
    <!--<table class="table">
      <thead>
        <th>Type</th>
        <th>Status</th>
        <th>Measurement</th>
      </thead>
      <tbody>
        <tr v-for="rainfall in rainfall" v-bind:key="rainfall.id">
          <td>{{ rainfall.raintype }}</td>
          <td>{{ rainfall.status }}</td>
          <td>{{ rainfall.measurement }}</td>
        </tr>
      </tbody>
    </table> -->

  </div>
</template>

<script>


export default {
  name: 'App',
/*  data() {
    return {
      rainfall: []
    }
  },
  async created() {
    var response = await fetch('http://127.0.0.1:8000/api/appapi/')
    this.rainfall = await response.json();
  }, */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.card-body{
        box-shadow: 4px 8px 8px 4px rgba(0,0,0,0.14), 2px 10px 3px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
}
.table{
    border-collapse: collapse;
    width: 100%;
    
}
.table>:not(:last-child)>:last-child>* {
    background-color: #343a40;
    text-align: center;
    color: white;
    font-family: sans-serif;
    position: sticky;
    top:0%;
}

td {
    display: table-cell;
    vertical-align:inherit;
    color:#333;
    border: 1px solid;
    font-size: 14px;
}
.table-light{
    --bs-table-hover-bg: rgba(13,110,253,.25);
}

.table-light td, .table-light tbody + tbody {
    border-color: #fbfcfc;
    height: 50px;
    font-weight: normal
    ;
}
</style>
