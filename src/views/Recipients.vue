<template>
  <div class="recipients">
    <Navbar/>
    <Sidebar/>

    <b-container class="container-fluid">
        <b-row>
            <b-col>
                <b-card class="mt-3">
                    <RecipientsLists/>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import RecipientsLists from '../components/RecipientsLists'

export default {
    name: 'Recipients',

    components: {
        Navbar,
        Sidebar,
        RecipientsLists
    }
}
</script>