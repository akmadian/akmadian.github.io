<template>
  <div>
    <div @click="active = !active" id="header">Some boring stuff you might want to look at</div>
    <div v-if="active" id="content">
      <a-row>
        <a-col>
          Summer of Code Internship
        </a-col>
        <a-col>
          <a href="https://docs.google.com/document/d/1MgVXGX2lKSJJevqGnECIG0_cUeumnEAwE95Y08RMga8/edit?usp=sharing">Proposal</a>
          <a href="https://drive.google.com/file/d/1k-FNo04NC-nfQ74EHvQbKI63CRs7dEPg/view?usp=sharing">Proof of Acceptance</a>
          <a href="https://drive.google.com/file/d/1Quilf41hoxAlhoohKjHp6G7YHeAimBOb/view?usp=sharing">Proof of Completion</a>
          <a href="https://github.com/creativecommons/chooser">Project Repo</a>
          <a href="https://chooser-beta.creativecommons.org/">Live Site</a>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          NZXTSharp
        </a-col>
        <a-col>
          <a href="https://www.nuget.org/packages/NZXTSharp">NuGet Page</a>
          <a href="https://github.com/akmadian/NZXTSharp">GitHub Repo</a>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'BioCollapse',
  data: function() {
    return {
      active: false
    }
  }
}
</script>