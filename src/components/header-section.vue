<template>
  <div class="navbar">
    <ul>
      <li><router-link to="/">Orders</router-link></li>
    </ul>
  </div>
</template>
<style scoped>
.navbar {
  margin: 10px 0;
}
.navbar ul {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  border-bottom: 1px solid #a3a3a3;
  margin: 0;
  padding: 0;
}
.navbar ul li a {
  color: #454545;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  padding: 8px 12px;
}
</style>