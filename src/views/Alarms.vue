<template>
  <div class="alarms">
    <Navbar/>
    <Sidebar/>

    <b-container class="container-fluid">
        <b-row>
            <b-col>
                <b-card class="mt-3">
                    
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default {
    name: 'Alarms',

    components: {
        Navbar,
        Sidebar,
    },
    
   
}
</script>

<style>

</style>