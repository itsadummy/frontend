<template>
  <div class="sidebar">
      <aside class="sidebar">
            <nav>
                <b-nav class="sidebar">
                    <img src="../assets/mdrrmo_logo.png" class="ml-1 mt-2 mb-4 my-2" alt="">
                    
                    <b-nav-item class="sidebar_icon">
                            <router-link :to="{ name: 'Dashboard' } " exact> <b-icon icon="display-fill" variant="dark" class="mb-3 my-2" font-scale="2" animation=""></b-icon> </router-link>
                            <router-link :to="{ name: 'Advisory' } " exact> <b-icon icon="envelope-fill" variant="dark" class="mb-3 my-2" font-scale="2" animation=""></b-icon> </router-link>
                            <router-link :to="{ name: 'Recipients' } " exact> <b-icon icon="people-fill" variant="dark" class="mb-3 my-2" font-scale="2" animation=""></b-icon> </router-link>
                            <router-link :to="{ name: 'Alarms' } " exact> <b-icon icon="clock-fill" variant="dark" class="mb-2 my-3" font-scale="2" animation=""></b-icon> </router-link>
                            <router-link :to="{ name: 'Tables' } " exact> <b-icon icon="table" variant="dark" class="mb-2 my-3" font-scale="2" animation=""></b-icon> </router-link>
                            <router-link :to="{ name: 'Information' } " exact> <b-icon icon="info-circle-fill" variant="dark" class="mb-5 my-2" font-scale="2" animation=""></b-icon> </router-link>
                    </b-nav-item>

                    <footer> <br>
                        <b-button variant="light" class="btn btn-block mb-2">
                            <b-icon icon="power" variant="danger" font-scale="2" 
                                aria-hidden="true" animation="" @click="logoutAcc()"></b-icon> Logout
                        </b-button>  
                    </footer>

                </b-nav>
            </nav>
            
        </aside>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',

    methods: {
        logoutAcc(){
            this.$router.push("/mdrrmo")
        }
    },
}
</script>

<style scoped>
    aside.sidebar{
        position: fixed;
        width: 75px;
        background: #fff;
        left: 0;
        top: 0;
        height: 100vh;
        box-shadow: 6px 0 6px rgba(126, 121, 121, 0.14), 0 3px 1px -2px rgba(104, 101, 101, 0.12), 0 1px 5px 0 rgba(179, 178, 178, 0.233);
    }

    .sidebar img{
        width: 65px;
    }

    li.nav-item.sidebar_icon svg{
        border-bottom: 2px solid white;
    }

    li.nav-item.sidebar_icon svg:hover,
    li.nav-item.sidebar_icon g:hover{
        color: darkgrey;
        border-color: grey;
        margin-left: 20px;
    }
</style>