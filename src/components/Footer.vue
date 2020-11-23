<template>
  <div id="footer">
    <div class="left">
      <p>Designed and built by me :)</p>
      <p>Built with Vue, hosted by GitHub</p>
    </div>
    <div class="right">
      
    </div>
  </div>
</template>
<style scoped>

#footer {
  position: fixed;
  bottom: 0;
  height: 3rem;
  filter: opacity(.4);
  margin-bottom: 3rem;
  padding: 1rem 2rem;
}

#footer:hover {
  filter: opacity(1);
}

p {
  font-size: 1rem;
  margin-bottom: 0rem;
  line-height: 1.5rem;
}

.left { float: left; }
.right { float: right; }
</style>
<script>
export default {
  name: 'Footer'
}
</script>
