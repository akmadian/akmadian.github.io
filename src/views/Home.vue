<template>
  <div>
    <a-row>
      <a-col :span="12" :offset="6">
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
        <a-row id="bio">
          Hey! I'm Ari Madian. 
          <b>I'm Informatics Major at the University of Washington</b> aiming to graduate in June 2022. 
          I've <b>been working with and contributing to <a href="https://creativecommons.org/">Creative Commons</a> for a while in various roles since May 2019</b> 
          when I started as a <a href="https://g.co/gsoc">Google Summer of Code</a> Student, and have dabbled in (but not stuck with) freelance web development.

          <br/><br/>
          I enjoy data science and full stack development. Outside of software, I'm a tea enthusiast and cinephile : )
          <br/><br/>
          You can find more details in <b><router-link to="/resume">my resume</router-link></b>.

          <div style="display:none">
          <br/><br/>
          I was a Google Summer of Code student with Creative Commons in mid year 2019, 
          in which I designed and built a modern, more usable version of their License Chooser. 
          I have continued to work with CC as an Open Source Community Coordinator, and a 
          mentor for both Summer of Code and Outreachy on CC's Search and License Chooser projects, respectivelly. 
          
          I also made NZXTSharp, a .NET SDK for NZXT PC components.
          <br/><br/>
          Outside of programming, I am a tea enthusiast and cinephile.
          </div>
        </a-row>
        <a-row style="display:none">
          <br><br>
          <a-collapse :bordered="false" id="collapse">
            <a-collapse-panel header="Some boring stuff you might want to look at">

Summer of Code Internship Proposal Proof of Acceptance Proof of Completion Project Repo Live Site
NZXTSharp NuGet page GitHub repo
Other Things akmadian@gmail.com github.com/akmadian
Stuff I'm Good At Using

C# and the .NET Framework, HTML and (S)CSS, JavaScript, Python, Some of AWS (EC2, S3, Lambda, API Gateway, SES, DynamoDB), Vue, React, Node.js, Git and Git CLI, GitHub
Q: What kind of tea do you like?

A: I mostly like whites, blacks, and ripe Pu Erhs :)

Q: What's your favorite movie?

A: I don't really have a favorite, but Inglorius Basterds, The Godfathers, and everything in the Breaking Bad universe are all top of my list. Pretty much anything with a bombastic, over the top, or dramatic story.

            </a-collapse-panel>
          </a-collapse>
          <BioCollapse/>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<style>
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

#bio {
  margin-top: 20%;
}

#header {
  margin-top: 2rem;
}

#collapse {
  background-color: rgba(0, 0, 0, 0);
  border-bottom: none;
}
</style>
<script>
import BioCollapse from '@/components/BioCollapse'

export default {
  name: 'Home',
  components: {
    BioCollapse
  }
}
</script>
