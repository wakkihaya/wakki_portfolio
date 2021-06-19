<template>
  <div class="recent-works">
    <div class="recent-works--title">Recent Works</div>
    <div class="recent-works--category">
      <div
        class="recent-works--category-item"
        v-on:click="moveCategory('Projects')"
        v-bind:class="{ active: category === 'Projects' }"
      >
        Projects
      </div>
      <div
        class="recent-works--category-item"
        v-on:click="moveCategory('Develop')"
        v-bind:class="{ active: category === 'Develop' }"
      >
        Develop
      </div>
      <div
        class="recent-works--category-item"
        v-on:click="moveCategory('Neurotech')"
        v-bind:class="{ active: category === 'Neurotech' }"
      >
        Neurotech
      </div>
      <div
        class="recent-works--category-item"
        v-on:click="moveCategory('Events/Communities')"
        v-bind:class="{ active: category === 'Events/Communities' }"
      >
        Events/Communities
      </div>
    </div>
    <div class="recent-works--display">
      <div v-for="item in displayArray" v-bind:key="item.title">
        <RecentWorksItem v-bind:item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import events_communitiesList from "~/data/events_communities.js"
import developList from "~/data/develop.js"
import neurotechList from "~/data/neurotech.js"
import projectsList from "~/data/projects.js"

import RecentWorksItem from "~/components/RecentWorksItem.vue"

export default {
  components: {
    RecentWorksItem,
  },
  data() {
    return {
      category: "Projects",
      displayArray: projectsList,
    }
  },
  methods: {
    moveCategory(category) {
      this.category = category
      switch (category) {
        case "Develop":
          this.displayArray = developList
          break
        case "Neurotech":
          this.displayArray = neurotechList
          break
        case "Events/Communities":
          this.displayArray = events_communitiesList
          break
        case "Projects":
          this.displayArray = projectsList
          break
        default:
          break
      }
    },
  },
}
</script>
