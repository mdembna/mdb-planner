<template>
  <div id="app">
    <mdb-navbar class="navbar" expand="large" dark color="primary">
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item to="/preview" active>Preview</mdb-nav-item>
        <mdb-nav-item to="/">Code</mdb-nav-item>
        <mdb-nav-item  to="/conditional">Conditional rendering</mdb-nav-item>
        <mdb-nav-item  to="/looping">Looping</mdb-nav-item>
        <mdb-nav-item  to="/lifecycle">Lifecycle</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
    <router-view/>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
export default {
  name: 'App',
  components: {mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem}
}
</script>

<style>
#app {
  text-align: center;
}

.navbar {
  margin-bottom: 100px;
}
</style>
