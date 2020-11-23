<template>
  <div>
    <a-page-header
      id="header"
      title="Ari Madian">
      <template slot="extra" id="links">
        <router-link to="/resume">
          <a-icon type="file" theme="filled" />
        </router-link>
        <a href="https://www.linkedin.com/in/arimadian/">
          <a-icon type="linkedin" theme="filled"/>
        </a>
        <a href="https://www.github.com/akmadian">
          <a-icon type="github" theme="filled"/>
        </a>
        <a href="mailto:akmadian@gmail.com">
          <a-icon type="mail" theme="filled"/>
        </a>
      </template>
    </a-page-header>
  </div>
</template>
<style>
#header {
  margin-top: 2rem;
}

#links i, svg {
  width: 1.3rem;
  height: 1.3rem;
  fill:black;
  margin-top: 2px;
}

#links i:hover, svg:hover {
  transform: translate(0px, -1px);
}

#links a {
  color: black;
}
</style>
<script>
export default {
  props: ['level'],
  name: 'Header'
}
</script>
