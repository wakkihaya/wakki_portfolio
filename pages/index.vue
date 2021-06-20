<template>
  <div class="container">
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <Top />
    <AboutMe />
    <Experiences />
    <Skills />
    <RecentWorks />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Top from "~/components/Top.vue"
import AboutMe from "~/components/AboutMe.vue"
import Experiences from "~/components/Experiences.vue"
import Skills from "~/components/Skills.vue"
import RecentWorks from "~/components/RecentWorks.vue"
import Contact from "~/components/Contact.vue"
import Footer from "~/components/Footer.vue"

export default {
  components: {
    Top,
    AboutMe,
    Experiences,
    Skills,
    RecentWorks,
    Contact,
    Footer,
  },
  name: "Container",
  // methods: {
  //   moveToItem(id) {
  //     var Top = $(id).offset().top
  //     $("html, body").animate({ scrollTop: Top }, 500)
  //   },
  // },
}
</script>
