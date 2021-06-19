//TODO: change font family.
//TODO: change image of recent works.
//TODO: Responsive.
<template>
  <div class="container">
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
    />
    <Top />
    <AboutMe />
    <Experiences />
    <Skills />
    <RecentWorks />
  </div>
</template>

<script>
import Top from "~/components/Top.vue"
import AboutMe from "~/components/AboutMe.vue"
import Experiences from "~/components/Experiences.vue"
import Skills from "~/components/Skills.vue"
import RecentWorks from "~/components/RecentWorks.vue"

export default {
  components: {
    Top,
    AboutMe,
    Experiences,
    Skills,
    RecentWorks,
  },
  name: "Container",
  methods: {
    moveToItem(id) {
      var Top = $(id).offset().top
      $("html, body").animate({ scrollTop: Top }, 500)
    },
  },
}
</script>
