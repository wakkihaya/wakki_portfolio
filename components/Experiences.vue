<template>
  <div class="experiences">
    <div class="experiences--title">Experiences</div>
    <div class="experiences--education">
      <div class="experiences--education-title">
        <i class="fas fa-graduation-cap fa-2x"></i>
        <div class="experiences--education-title-text">Education</div>
      </div>
      <div class="experiences--education-content education">
        <div class="education--item">
          <div class="education--item-title">
            B.S. Computer Science <br />
            at Univeristy of Tsukuba
          </div>
          <div class="education--item-location">
            Tsukuba/Japan, Apr 2017 - Present
          </div>
          <div class="education--item-desc">
            Conducting a research project of BCI. <br />
            Founded a volunteer group for international students.
          </div>
        </div>
        <div class="education--divider"></div>
        <div class="education--item">
          <div class="education--item-title">
            B.S. Computer Science <br />
            at San Francisco State University
          </div>
          <div class="education--item-location">
            SanFrancisco/U.S., Aug 2019 - May 2020
          </div>
          <div class="education--item-desc">
            Exchange program. <br />
            A member of Japanese Students Association.
          </div>
        </div>
      </div>
    </div>

    <div class="experiences--work_container">
      <div class="experiences--work">
        <div class="experiences--work-title">
          <i class="fas fa-briefcase fa-2x"></i>
          <div class="experiences--work-title-text">Work</div>
        </div>
        <div class="experiences--work-content work">
          <span class="work--year">2018</span>
          <div
            class="work--list"
            v-for="career in filterCareer('2018')"
            v-bind:key="`2018-${career.year}`"
          >
            <div class="work--timeline-marker"></div>
            <div class="work--list-item">
              <div class="work--list-item-title">
                <a :href="career.atag" target="_blank">
                  {{ career.event }}
                </a>
              </div>
              <div class="work--list-item-location-and-date">
                {{ career.location_and_date }}
              </div>
              <div class="work--list-item-content">
                {{ career.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="experiences--work-content work">
          <span class="work--year">2019</span>
          <div
            class="work--list"
            v-for="career in filterCareer('2019')"
            v-bind:key="`2019-${career.year}`"
          >
            <div class="work--timeline-marker"></div>
            <div class="work--list-item">
              <div class="work--list-item-title">
                <a :href="career.atag" target="_blank">
                  {{ career.event }}
                </a>
              </div>
              <div class="work--list-item-location-and-date">
                {{ career.location_and_date }}
              </div>
              <div class="work--list-item-content">
                {{ career.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- TODO: bind-key重複 -->
      <div class="experiences--work experiences--work__no-title">
        <div class="experiences--work-content work">
          <span class="work--year">2020</span>
          <div
            class="work--list"
            v-for="career in filterCareer('2020')"
            v-bind:key="`2020-${career.year}`"
          >
            <div class="work--timeline-marker"></div>
            <div class="work--list-item">
              <div class="work--list-item-title">
                <a :href="career.atag" target="_blank">
                  {{ career.event }}
                </a>
              </div>
              <div class="work--list-item-location-and-date">
                {{ career.location_and_date }}
              </div>
              <div class="work--list-item-content">
                {{ career.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="experiences--work-content work">
          <span class="work--year">2021</span>
          <div
            class="work--list"
            v-for="career in filterCareer('2021')"
            v-bind:key="`2021-${career.year}`"
          >
            <div class="work--timeline-marker"></div>
            <div class="work--list-item">
              <div class="work--list-item-title">
                <a :href="career.atag" target="_blank">
                  {{ career.event }}
                </a>
              </div>
              <div class="work--list-item-location-and-date">
                {{ career.location_and_date }}
              </div>
              <div class="work--list-item-content">
                {{ career.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import careerList from "~/data/career.js"
export default {
  data() {
    return {
      careers: careerList,
    }
  },
  computed: {
    filterCareer: function () {
      return function (year) {
        return this.careers.filter((item) => {
          return item.year === year
        })
      }
    },
  },
}
</script>
