<template>

  <section class="container">
<!--   headタグ-->
    <div id="first-page">
      <div class="bg-mask">

<!--        初めの100vh-->
        <div id="head">
           <p>Hayato Waki</p>
        </div>

       <div id="title">
        <p>
      Entrepreneur and <br>
        Web engineer <br>
      who join some projects and hold some events.
       </p>
      </div>

<!--      <div class="arrow">-->
<!--&lt;!&ndash;        <i class="fas fa-chevron-down"></i>&ndash;&gt;-->
<!--      </div>-->
<!--        menu-box-->
        <ul id="menu-box">
          <li>Introduction</li>
          <li>Activity</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>

      </div>
    </div>

<!--    introduction-->
      <div id="introduction">

        <p class="subtitle">
          Introduction
        </p>

        <p class="name_of_intro">
          Hayato Waki
        </p>

        <p class = "content_of_intro">
          Computer Science in University of Tsukuba
        </p>

    <p>
      {{ message }}
    </p>

<!--        <table border="0" v-for = "career in careers" v-bind:key="career.year" id="mycareer">-->
<!--          <tbody>-->
<!--          <tr>-->
<!--            <td class="td1">a</td>-->
<!--&lt;!&ndash;            <td class="td1">{{career.year}}</td>&ndash;&gt;-->
<!--            <td class="td2" style="white-space:pre-line">{{career.event }}</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->

      </div>

<!--    activity-->
    <div class="image">
      <img src="/wakki_activity.jpg"/>
    </div>

    <div id = "activity">
        <p class="subtitle">
          Activities
        </p>

      <div>

      </div>

    </div>


  </section>
</template>

<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">

<script>
import '~/assets/sass/main.scss';
import Vue from 'vue';

export default {
  name: "introduction",
  data(){
    return{
      message:'unti'
    }
  }
}


//   name: 'career_div',
//   data: function () {
//     return{
//       message: 'unti',
//     }
//   }
// }


// export default {
//   name: 'mycareer',
//   data() {
//     return {
//       careers: [
//         {year: '1999', event: 'Born in Japan'},
//         {year: '2014', event: 'Entered Seijo high school'},
//         {year: '2017', event: 'Entered Computer Science in Univ of Tsukuba'},
//         {
//           year: '2018',
//           event: '・ Interned as an engineer in USEN-NEXT-GROUP Inc\n\n' +
//             '・ Interned as a web engineer in Unipro Inc\n\n' +
//             '・ Started the volunteer activity with foreign students as a chief'
//         },
//         {year: 'now', event: 'Start up curation media business'},
//         {
//           year: 'future',
//           event: '・Continue the media business\n\n' +
//             '・Join in the business contest of Microsoft in Japan\n\n' +
//             '・Study CS in SF State Univ and work in San Francisco'
//         }
//       ],
//       message:"unti"
//     };
//   }
// };

</script>

