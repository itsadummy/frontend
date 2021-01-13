<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar_light" >
            <div class="container-fluid">
                <a href="" class="navbar-brand ml-5"> MDRRMO </a>
                <a class="navbar-brand ml-auto" href="#">Rainfall Advisory</a>
            </div>
        </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
    .navbar_light{
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        padding: 0.5rem 0.8rem;
    }
    .navbar-brand{ 
        padding-left: 10px;
    }
</style>