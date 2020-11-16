<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,500,600,700&display=swap');

#app {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.4rem;
  background-color: lightgray;
  height: 100%;
}

a {
  font-weight: bold;
  text-decoration: underline dotted black !important;
}

a:hover {
  text-decoration: underline black !important;
}
</style>
