<template>
  <section class="container">
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />

    <div id="first-page">
      <div class="bg-mask">
        <div id="head">
          <p>Hayato Waki</p>
        </div>
        <div id="title">
          <p>
            Entrepreneur, <br />
            Engineer and<br />
            Eventer
          </p>
        </div>
        <ul id="menu-box">
          <a href="#introduction" v-on:click="moveToItem('#introduction')">
            <li>Introduction</li>
          </a>
          <a href="#activity" v-on:click="moveToItem('#activity')">
            <li>Activities</li>
          </a>
          <a href="#skills" v-on:click="moveToItem('#skills')">
            <li>Skills</li>
          </a>
          <a href="#product" v-on:click="moveToItem('#product')">
            <li>Products</li>
          </a>
          <a href="#contact" v-on:click="moveToItem('#contact')">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>

    <!--    introduction-->
    <div id="introduction">
      <p class="subtitle">Introduction</p>
      <p class="name_of_intro">Hayato Waki</p>
      <p class="content_of_intro">Computer Science at University of Tsukuba</p>

      <!--        timeline-->
      <div class="timeline">
        <div v-scroll-inview:fadeIn>
          <span class="year">2017</span>
          <div
            class="timeline-list"
            v-for="career in careers"
            v-bind:key="`2017-${career.year}`"
            v-if="career.year === '2017'"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title_cluster">
                  <div class="event_title">
                    {{ career.event }}
                  </div>
                </div>
                <div class="timeline-item-duration">
                  {{ career.duration }} , {{ career.location }}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{ career.content }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-scroll-inview:fadeIn>
          <span class="year">2018</span>
          <div
            class="timeline-list"
            v-for="career in careers"
            v-bind:key="`2018-${career.year}`"
            v-if="career.year === '2018'"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title">
                  {{ career.event }}
                </div>
                <div class="timeline-item-duration">
                  {{ career.duration }} , {{ career.location }}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{ career.content }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-scroll-inview:fadeIn>
          <span class="year">2019</span>
          <div
            class="timeline-list"
            v-for="career in careers"
            v-bind:key="`2019-${career.year}`"
            v-if="career.year === '2019'"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title">
                  {{ career.event }}
                </div>
                <div class="timeline-item-duration">
                  {{ career.duration }} , {{ career.location }}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{ career.content }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-scroll-inview:fadeIn>
          <span class="year">2020</span>
          <div
            class="timeline-list"
            v-for="career in careers"
            v-bind:key="`2020-${career.year}`"
            v-if="career.year === '2020'"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title">
                  {{ career.event }}
                </div>
                <div class="timeline-item-duration">
                  {{ career.duration }} , {{ career.location }}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{ career.content }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-scroll-inview:fadeIn>
          <span class="year">2021</span>
          <div
            class="timeline-list"
            v-for="career in careers"
            v-bind:key="`2021-${career.year}`"
            v-if="career.year === '2021'"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title">
                  {{ career.event }}
                </div>
                <div class="timeline-item-duration">
                  {{ career.duration }} , {{ career.location }}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{ career.content }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    activity-->

    <div id="activity">
      <p class="subtitle">Activities</p>

      <div
        class="list_activities"
        v-for="act in activities"
        v-bind:key="act.period"
      >
        <div v-scroll-inview:fadeIn>
          <a :href="act.link">
            <div class="activity_title">
              <div class="activity_title_image">
                <img :src="act.image" />
              </div>
              <div class="activity_title_name">
                <p>{{ act.name }}</p>
              </div>
            </div>
          </a>
          <div class="activity_content">
            <div class="activity_content_date">
              <p class="activity_position">{{ act.position }}</p>
              <p class="activity_period">{{ act.period }}</p>
            </div>
            <div class="activity_content_explanation">
              <p>{{ act.content }}</p>
            </div>
            <div class="activity_achievment">
              <div>Achievement</div>
              <p style="white-space: pre-line">{{ act.achievement }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-scroll-inview:fadeIn>
      <div id="skills">
        <p class="subtitle">Skills</p>
        <div class="skills_list">
          <div class="skills_items">
            <div class="skills_items--category">Frontend</div>
            <div class="skills_items--items">
              Vue.js(Nuxt.js), React.js, Flutter, Typescript. HTML5/CSS3
            </div>
          </div>
          <div class="skills_items">
            <div class="skills_items--category">Backend</div>
            <div class="skills_items--items">
              Node.js, Express.js, Ruby on Rails,
            </div>
          </div>
          <div class="skills_items">
            <div class="skills_items--category">Data science</div>
            <div class="skills_items--items">Python, Matlab, R</div>
          </div>
          <div class="skills_items">
            <div class="skills_items--category">Database</div>
            <div class="skills_items--items">NoSQL, MySQL</div>
          </div>
          <div class="skills_items">
            <div class="skills_items--category">Infrastructure</div>
            <div class="skills_items--items">
              AWS(EC2, Codedeploy, Lambda,etc), GCP(Firebase)
            </div>
          </div>
          <div class="skills_items">
            <div class="skills_items--category">Others</div>
            <div class="skills_items--items">
              Java, C++(Arduino), C(Operating System), Git, Docker, Adobe XD,
              illustrator,
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    product-->
    <div id="product">
      <p class="subtitle">Products</p>

      <div class="products_list">
        <div v-scroll-inview:fadeIn v-for="product in products">
          <div class="products_list_items">
            <p class="items_title">
              <a :href="product.atag" target="_blank">{{ product.title }}</a>
            </p>
            <p class="items_contents">{{ product.content }}</p>
            <img :src="product.image" v-show="product.image" />
            <video
              :src="product.video"
              autoplay
              muted
              loop
              v-show="product.video"
            ></video>
            <p class="items_lang">{{ product.lang }}</p>
          </div>
        </div>
      </div>

      <p class="subtitle">Design</p>

      <div v-scroll-inview:fadeIn>
        <div class="design_list">
          <div class="design_list_items" v-for="design in designs">
            <div class="design_list_items--image" ontouchstart="">
              <a :href="design.atag" target="_blank">
                <img :src="design.image" />
                <div class="design_list_items--image__caption">
                  {{ design.title }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    contact-->
    <div v-scroll-inview:fadeIn>
      <div class="image">
        <img src="~assets/images/wakki3.jpg" />
      </div>
      <div id="contact">
        <p class="subtitle">Contact</p>
        <ul class="contact_list">
          <li class="contact_list_item">
            <a href="https://twitter.com/wakki_japan"
              ><i class="fab fa-twitter fa-3x"></i
            ></a>
          </li>
          <li class="contact_list_item">
            <a href="https://www.facebook.com/waki.hayato.1"
              ><i class="fab fa-facebook-square fa-3x"></i
            ></a>
          </li>
          <li class="contact_list_item">
            <a href="https://note.mu/wakkihaya"
              ><i class="fas fa-pen-square fa-3x"></i
            ></a>
          </li>
          <li class="contact_list_item">
            <a href="https://www.linkedin.com/in/wakkihaya/"
              ><i class="fab fa-linkedin fa-3x"></i
            ></a>
          </li>
          <li class="contact_list_item">
            <a href="https://github.com/wakkihaya"
              ><i class="fab fa-github-square fa-3x"></i>
            </a>
          </li>
          <li class="contact_list_item">
            <a href="https://qiita.com/wakki_haya"
              ><img src="~assets/images/qiita.png" />
            </a>
          </li>
        </ul>
        <p id="mailaccount">mail: wakkihaya@gmail.com</p>
      </div>
    </div>
  </section>
</template>

<script>
import "~/assets/sass/main.scss"
import Vue from "vue"
import carrerList from "~/data/carrer.js"
import activityList from "~/data/activity.js"
import productList from "~/data/product.js"
import designList from "~/data/design.js"

export default {
  name: "mycareer",
  methods: {
    moveToItem(id) {
      var Top = $(id).offset().top
      $("html, body").animate({ scrollTop: Top }, 500)
    },
  },
  data() {
    return {
      careers: carrerList,
      activities: activityList,
      products: productList,
      designs: designList,
    }
  },
}
</script>
