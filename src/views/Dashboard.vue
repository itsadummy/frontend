<template>
    <div id="dashboard">
        <Navbar/>
        <Sidebar/>

        <b-container class="container">
            <b-row class="mt-1 ml-3">
                <b-col class="sm-6">
                    <div class="rainfall-activities">
                        <b-card class="mt-1">
                            <div>
                                <RainfallActivities :style="{height: '300px', width:'550px'}"/>
                            </div>
                        </b-card>
                    </div>

                    <div class="daily-forecast mt-3">
                        <strong>Daily Forecast</strong>
                        <b-card>
                            GRAPH TO
                        </b-card>
                    </div>

                    <div class="hourly-forecast mt-3">
                        <strong>Hourly Forecast</strong>
                        <b-card>
                            GRAPH TO
                        </b-card>
                    </div>
                    
                </b-col>

                <b-col class="sm-6">
                    <b-row>
                        <b-dropdown
                            text="Export Files  "
                            block
                            variant="dark"
                            class="m-0 mt-3"
                            menu-class="w-100"
                            >
                            <b-dropdown-item href="#">Current Month</b-dropdown-item>
                            <b-dropdown-item href="#">Last Month</b-dropdown-item>
                            <b-dropdown-item href="#">Current Year</b-dropdown-item>
                            <b-dropdown-item href="#">Last Year</b-dropdown-item>
                        </b-dropdown>
                    </b-row>
                    <br>
                    <div class="current-time mt-0">

                        <b-card>
                            <CurrentWeather/>
                        </b-card>
                    </div>

                    <div class="rainfall-list mt-3">
                        <RainfallLists/>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RainfallActivities from '../components/RainfallActivities'
import RainfallLists from '../components/RainfallLists'
import CurrentWeather from '../components/CurrentWeather'
//import ByWeek from '../components/ByWeek'

export default {
    name: 'Dashboard',

    components: {
        Navbar,
        Sidebar,
        RainfallLists,
        RainfallActivities,
        CurrentWeather,
//        ByWeek
    },

  methods: {
      
  },
}
</script>

<style scoped>
    .current-time {
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
        font-family: 'montserrat', sans-serif;
    }
</style>
