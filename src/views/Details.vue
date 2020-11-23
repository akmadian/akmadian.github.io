<template>
  <div>
    <a-row id="content">
      <a-col :span="12" :offset="6">
        <Header :level="1"/>
        <a-row id="details">
          <h2>Summer of Code Internship</h2>
          <ul>
            <li><a href="https://docs.google.com/document/d/1MgVXGX2lKSJJevqGnECIG0_cUeumnEAwE95Y08RMga8/edit?usp=sharing">Proposal</a></li>
            <li><a href="https://drive.google.com/file/d/1k-FNo04NC-nfQ74EHvQbKI63CRs7dEPg/view?usp=sharing">Proof of Acceptance</a></li>
            <li><a href="https://drive.google.com/file/d/1Quilf41hoxAlhoohKjHp6G7YHeAimBOb/view?usp=sharing">Proof of Completion</a></li>
            <li><a href="https://github.com/creativecommons/chooser">Project Repo</a></li>
            <li><a href="https://chooser-beta.creativecommons.org/">Live Site</a></li>
          </ul>

          <h2>NZXTSharp</h2>
          <ul>
            <li><a href="https://www.nuget.org/packages/NZXTSharp">NuGet Page</a></li>
            <li><a href="https://github.com/akmadian/NZXTSharp">GitHub Repo</a></li>
            <li><a href="https://arimadian.info/NZXTSharp">Docs</a></li>
          </ul>

          <h2>QnA</h2>
          <b>Q: What kind of tea do you like?</b>
          <p>A: I mostly like whites, blacks, and ripe Pu Erhs :)</p>
  
          <b>Q: What's your favorite movie?</b>
          <p>A: I don't really have a favorite, but Inglorius Basterds, The Godfathers, and everything in the Breaking Bad universe are all top of my list. Pretty much anything with a bombastic, over the top, or dramatic story.</p>

          <h2>My Keyboard</h2>
          <img 
            id="keeb-image"
            src="https://raw.githubusercontent.com/akmadian/qmk_firmware/personal_maps/personal_build_pic.jpg">
          <ul>
            <li>Nullbits Nibble 65% with Nullbits FR4 plate and Nullbits Bit-C</li>
            <li>NP(XDA) PBT Crayon caps with O rings</li>
            <li>Holy Pandas with Tribosys 3204 on everything but legs, Deskeys films</li>
            <li>Durock V1 screw-ins, Tribosys 3204 on housings, Permatex 81150 on ends and bends</li>
            <li>Mill-Max 0305 sockets</li>
          </ul>
          <a href="https://github.com/akmadian/qmk_firmware/tree/personal_maps/keyboards/nullbitsco/nibble/keymaps/akmadian">My Keymap</a>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<style scoped>
#header {
  margin-top: 2rem;
}

#content {
  background-color: lightgray;
}

#keeb-image {
  margin: 0 auto;
  width: 80%;
  height: auto;
  margin-bottom: 1.1rem;
}

#details {
  margin-top: 10%;
  font-size: 1.1rem;
  margin-bottom: 10%;
}
</style>
<script>
import Header from '@/components/Header'

export default {
  name: 'Details',
  components: {
    Header,
  }
}
</script>