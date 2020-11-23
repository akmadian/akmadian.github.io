<template>
  <div>
    <a-row>
      <a-col :span="12" :offset="6">
        <Header :level="0"/>
        <a-row id="bio">
          Hey! I'm Ari Madian. 
          <b>I'm Informatics Major at the University of Washington</b> aiming to graduate in June 2022. 
          I've <b>been working with and contributing to <a href="https://creativecommons.org/">Creative Commons</a> for a while in various roles since May 2019</b> 
          when I started as a <a href="https://g.co/gsoc">Google Summer of Code</a> Student, and have dabbled in (but not stuck with) freelance web development.

          <br/><br/>
          I enjoy data science and full stack development. Outside of software, I'm a tea enthusiast and cinephile : )
          <br/><br/>
          You can find more details in <b><router-link to="/resume">my resume</router-link></b> or my site's <b><router-link to="/details">details page</router-link></b>.
        </a-row>
        <Footer/>
      </a-col>
    </a-row>
  </div>
</template>
<style scoped>
#bio {
  margin-top: 20%;
}
</style>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
