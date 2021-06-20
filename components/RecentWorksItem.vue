<template>
  <div class="recent-works-item">
    <div class="recent-works-item--image">
      <div v-if="item.image" class="recent-works-item--image-box">
        <img :src="item.image" />
      </div>
      <div
        v-else-if="!item.image && item.video"
        class="recent-works-item--image-box"
      >
        <video :src="item.video" autoplay muted loop></video>
      </div>
      <div v-else class="recent-works-item--image-box">
        <img src="~/assets/images/recent-works/no-image.png" />
      </div>
    </div>
    <div class="recent-works-item--desc">
      <div class="recent-works-item--desc-title">
        {{ item.title }}
      </div>
      <div class="recent-works-item--desc-content">
        {{ item.content }}
      </div>
      <div class="recent-works-item--desc-move" v-show="item.atag">
        <a :href="item.atag" target="_blank"> Move</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
}
</script>
