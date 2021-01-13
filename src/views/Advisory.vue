<template>
  <div class="advisory">
    <Navbar/>
    <Sidebar/>

    <b-container class="container-fluid">
        <b-row>
            <b-col>
                <div class="mt-3 ml-5">
                    <b-card no-body>
                    <b-tabs card
                    active-nav-item-class="font-weight-bold text-uppercase text-info"
                    >
                    <b-tab title="Automatic SMS?" disabled><p></p></b-tab>
                    <b-tab title="Enable">
                        <center>
                            <b-button size="md d-flex mt-3" class="btn btn-danger">Perform Task</b-button>
                        </center>
                        <Smslogs :style="{height: '450px'}"/>
                    </b-tab>
                    
                    <b-tab title="Disable">
                        <center>
                            <b-button size="md d-flex mt-3" class="btn btn-danger">Attach .csv file <b-icon class="ml-2" icon="download"></b-icon></b-button>
                        </center>
                        <GenerateSms :style="{height: '450px'}"/>
                    </b-tab>
                    </b-tabs>
                </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
    

  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Smslogs from '../components/Smslogs'
import GenerateSms from '../components/GenerateSms'

export default {
    name: 'Advisory',

    components: {
        Navbar,
        Sidebar,
        Smslogs,
        GenerateSms
    },
    
   
}
</script>

<style scope>

</style>