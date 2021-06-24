<template>
  <div class="about-me">
    <div class="about-me--title">About me</div>
    <div class="about-me--container" v-scroll-inview:fadeIn>
      <div class="about-me--container-icon_flex">
        <div class="about-me--container-icon">
          <img src="~assets/images/top/wakki.jpg" />
        </div>
      </div>
      <div class="about-me--container-detail about-me-detail">
        <div class="about-me-detail--desc">
          I am Hayato Waki, PM and engineer from Japan. I have rich experiences
          in managing projects and developing products with agility.
        </div>
        <div class="about-me-detail--graph">
          <div class="about-me-detail--graph_box">
            <div class="about-me-detail--graph-index">
              <div class="about-me-detail--graph-index-category">
                Engineering
              </div>
              <div class="about-me-detail--graph-index-amount">85%</div>
            </div>
            <div class="about-me-detail--graph-bar">
              <img src="~/assets/images/about-me/orange-bar.png" />
            </div>
          </div>
          <div class="about-me-detail--graph_box">
            <div class="about-me-detail--graph-index">
              <div class="about-me-detail--graph-index-category">
                Project Mangement
              </div>
              <div class="about-me-detail--graph-index-amount">80%</div>
            </div>
            <div class="about-me-detail--graph-bar">
              <img src="~/assets/images/about-me/red-bar.png" />
            </div>
          </div>
          <div class="about-me-detail--graph_box">
            <div class="about-me-detail--graph-index">
              <div class="about-me-detail--graph-index-category">
                Business Development
              </div>
              <div class="about-me-detail--graph-index-amount">60%</div>
            </div>
            <div class="about-me-detail--graph-bar">
              <img src="~/assets/images/about-me/blue-bar.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-me--neurotech-passion">
      Click
      <a href="https://wakkihaya.com/My_passion_for_neurotech.pdf" target="_blank">here</a> to see my passion for
      Neurotech.🔥
    </div>
  </div>
</template>
