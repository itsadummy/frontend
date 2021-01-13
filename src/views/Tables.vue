<template>
  <div class="tables">
    <Navbar/>
    <Sidebar/>

    <b-container class="container-fluid">
        <b-row class="ml-5">
            <b-col class="mt-5">
                <b-tabs active-nav-item-class="font-weight-bold text-uppercase text-info"
                    active-tab-class="font-weight-bold text-secondary"
                    content-class="mt-3"
                >
                    <b-tab title="Table Views" disabled><p></p></b-tab>
                    <b-tab title="Rainfall" active>
                        <RainfallLists :style="{height: '450px'}"/>
                    </b-tab>
                    <b-tab title="Humidity">
                        
                    </b-tab>
                    <b-tab title="Temperature">
                    
                    </b-tab>
                    <b-tab title="Sms logs">
                        <Smslogs :style="{height: '450px'}"/>
                    </b-tab>
                    <b-tab title="Recipients">
                        <RecipientsLists :style="{height: '450px'}"/>
                    </b-tab>
                    <b-tab title="List of Baranggays"></b-tab>
                    <b-tab title="Recent Activities"></b-tab>
                </b-tabs>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RainfallLists from '../components/RainfallLists'
import Smslogs from '../components/Smslogs'
import RecipientsLists from '../components/RecipientsLists'

export default {
    name: 'Tables',

    components: {
        Navbar,
        Sidebar,
        RainfallLists,
        Smslogs,
        RecipientsLists
    },
    
   
}
</script>

<style scope>
    .nav-tabs .nav-link {
    margin-bottom: -1px;
    color: black;
    }

 
    
</style>