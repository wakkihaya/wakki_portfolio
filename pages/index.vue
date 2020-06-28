<template>

  <section class="container">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">

    <!--   headタグ-->

    <div id="first-page">
      <div class="bg-mask">

<!--        初めの100vh-->
        <div id="head">
           <p>Hayato Waki</p>
        </div>

       <div id="title">
        <p>
      Entrepreneur, <br>
        Web engineer and<br>
         Eventer
       </p>
      </div>

<!--      <div class="arrow">-->
<!--&lt;!&ndash;        <i class="fas fa-chevron-down"></i>&ndash;&gt;-->
<!--      </div>-->
<!--        menu-box-->
        <ul id="menu-box">
          <a href ="#introduction" v-on:click="moveToItem('#introduction')">
            <li>Introduction</li>
          </a>
          <a href = "#activity" v-on:click="moveToItem('#activity')">
            <li>Activity</li>
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

        <p class="subtitle">
          Introduction
        </p>

        <p class="name_of_intro">
          Hayato Waki
        </p>

        <p class = "content_of_intro">
          Computer Science at University of Tsukuba
        </p>

<!--        timeline-->
        <div class = "timeline">

          <span class="year">2017</span>
          <div class="timeline-list" v-for ="career in careers" v-bind:key="career.year" v-if="career.year === '2017'">
            <div class="timeline-marker">
            </div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title_cluster">
                  <div class="event_title">
                    {{career.event}}
                  </div>
                </div>
                <div class="timeline-item-duration">
                  {{career.duration}}  ,           {{career.location}}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{career.content}}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span class="year">2018</span>
          <div class="timeline-list" v-for ="career in careers" v-bind:key="career.year" v-if="career.year === '2018'">
            <div class="timeline-marker">
            </div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title">
                  {{career.event}}
                </div>
                <div class="timeline-item-duration">
                  {{career.duration}}  ,           {{career.location}}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{career.content}}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span class="year">2019</span>
          <div class="timeline-list" v-for ="career in careers" v-bind:key="career.year" v-if="career.year === '2019'">
            <div class="timeline-marker">
            </div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title">
                  {{career.event}}
                </div>
                <div class="timeline-item-duration">
                  {{career.duration}}      ,           {{career.location}}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{career.content}}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span class="year">2020</span>
          <div class="timeline-list" v-for ="career in careers" v-bind:key="career.year" v-if="career.year === '2020'">
            <div class="timeline-marker">
            </div>
            <div class="timeline-item">
              <img v-bind:src="career.image" />
              <div class="flexbox">
                <div class="event_title">
                  {{career.event}}
                </div>
                <div class="timeline-item-duration">
                  {{career.duration}}      ,           {{career.location}}
                </div>
                <div class="event_content">
                  <a :href="career.atag">
                    {{career.content}}
                  </a>
                </div>
              </div>
            </div>
          </div>

       </div>
      </div>

<!--    activity-->
    <div class="image">
      <img src="/wakki_activity.jpg"/>
    </div>

    <div id = "activity">
        <p class="subtitle">
          Activities
        </p>

      <div class="list_activities" v-for="act in activities" v-bind:key="act.period">
        <a :href="act.link">
        <div class="activity_title">
            <img :src="act.image"  width="30%" height="100%"/>
            <div class="activity_title_name">
              <p>{{act.name}}</p>
            </div>

        </div>
        </a>
        <div class="activity_content">
          <div class="activity_content_date">
            <p class="activity_position">{{act.position}}</p>
            <p class="activity_period">{{act.period}}</p>
          </div>
          <div class="activity_content_explanation">
            <p>{{act.content}}</p>
          </div>
          <div class="activity_achievment">
            <div>Achievement</div>
            <p style="white-space:pre-line">{{act.achievement}}</p>
          </div>

        </div>
        </div>
      </div>
    </div>

<!--    product-->
    <div class="image">
      <img src="/wakki2.jpg" />
    </div>

    <div id="product">
      <p class="subtitle">
        Products
      </p>

      <div class="products_list">
        <div class="products_list_items"  v-for="product in products">
          <p class="items_title" ><a :href="product.atag" target="_blank">{{product.title}}</a></p>
          <p class="items_contents">{{product.content}}</p>
          <img :src ="product.image">
          <p class="items_lang">{{product.lang}}</p>
        </div>

      </div>

    </div>

<!--    contact-->
    <div class="image">
      <img src="/wakki3.jpg"/>
    </div>

    <div id ="contact">
      <p class="subtitle">
        Contact
      </p>

      <ul class="contact_list">
        <li class="contact_list_item">
          <a href="https://twitter.com/wakki_japan"><i class="fab fa-twitter fa-3x"></i></a>
        </li>

        <li class="contact_list_item">
          <a href="https://www.facebook.com/waki.hayato.1"><i class="fab fa-facebook-square fa-3x"></i></a>
        </li>

        <li class="contact_list_item">
          <a href="https://note.mu/wakkihaya"><i class="fas fa-pen-square fa-3x"></i></a>
        </li>

        <li class="contact_list_item">
          <a href = "https://www.linkedin.com/in/wakkihaya/"><i class="fab fa-linkedin fa-3x"></i></a>
        </li>

        <li class="contact_list_item">
          <a href="https://github.com/wakkihaya"><i class="fab fa-github-square fa-3x"></i> </a>
        </li>

        <li class="contact_list_item">
          <a href="https://qiita.com/wakki_haya"><img src="/qiita.png"> </a>
        </li>


      </ul>

      <p id="mailaccount"> mail: wakki@feedal.com</p>
    </div>

  </section>
</template>

<script>
import '~/assets/sass/main.scss';
import Vue from 'vue';


export default {
  name: 'mycareer',
  methods:{
    moveToItem(id){
        var Top =$(id).offset().top;
        $("html, body").animate({ scrollTop: Top }, 500);
    },
  },
  data() {
    return {

        /*introduction についてのdata*/
      careers: [
        {year: '1999', event: 'Born in Japan\n\n'},
        {year: '2014', event: 'Entered Seijo high school\n\n', location: 'Tokyo/Japan'},
        {year: '2017', event: 'Graduated from Seijo high school', duration: '~ 2017/03',image:'seijo.png',location: 'Tokyo/Japan'},
        {year: '2017', event: 'Study computer science at Univ of Tsukuba\n\n',duration:'2017/04 ~ 2022/03',image:'/univoftsukuba.png',location: 'Tsukuba/Japan'},
        {year: '2018', event: 'Business internship at USEN-NEXT-GROUP Inc\n\n',duration:'2018/08',image:'/usen-next-group.jpg',
            location: 'Tokyo/Japan', content:'This was 5-day Internship that make new business.\n\n' +
                '- Made the new app in agriculture industry\n\n' +
                '- Thought it logically and disruptively'},
        {year: '2018', event: 'Office system engineer internship at USEN-ICT-SOLUTIONS\n\n',duration:'2018/12 ~ 2019/02',image:'/usen-ict-solutions.png',
            location:'Tokyo/Japan',content:'This company had lots of data and mails of clients managed by G suite, and they had a lot of redundancies for using G suite.\n\n' +
                '- Made back office environment twice more efficient than before , by using Google App Script.\n\n' +
                '- Implemented the automatic mail system on G suite.'},
        {year: '2018', event: 'Founded volunteer "wander" with international students\n\n',duration:'2018/10 ~ 2019/02',image:'/wander.jpg',
            location:'Tsukuba/Japan' ,content:'More ⇊', atag:'#activity'},
        {year: '2019', event: 'Full stack engineer internship at Unipro Inc\n\n',duration:'2019/02 ~ 2019/04',image:'/unipro.png',
            location:'Tokyo/Japan',content:'This company makes money by contracted development from big companies in Japan.\n\n' +
            '- Improved and developed the web app using Vue.js and Laravel\n\n' +
            '- Removed bugs of app by acting as a tester'},
          {year: '2019', event: 'Business internship at Microsoft Japan\n\n',duration:'2019/08',image:'/microsoft.png',
              location:'Tokyo/Japan',content:'This was the business contest that make new business in a week hosted by Microsoft Japan.\n\n' +
              '- Thought logically the solution for the problem which Microsoft has now\n\n' +
              '- Made the prototype of the app by using "Figma"'},
          {year: '2019', event: 'Developer internship at Btrax Inc\n\n',duration:'2019/10 ~ 2019/12',image:'/btrax.png',
              location:'San Francisco/U.S.',content: 'This company is an innovation design company based in SanFrancisco.\n\n' +
                  '- Created the web page integrated with 3rd party.\n\n' +
                  '- Built the initial environment to develop with github and aws.\n\n' +
                  '- Got APIs for the web page.\n\n' +
                  '- Wrote the article in our blog.'},
          {year: '2020', event: 'Study computer science at San Francisco State Univ\n\n',duration:'2019/08 ~ 2020/05',image:'/sfsu.jpg',
              location: 'San Francisco/U.S.', content: 'Exchange student'},
          {year: '2020', event: 'CEO/Co-founder at Feedal Inc.\n\n',duration:'2019/07 ~ Present',image:'/feedal_2.jpg',
              location:'Tsukuba/Japan',content:'More ⇊', atag:'#activity'},

      ],

        /*activity についてのdata*/
        activities: [
            {title:'Volunteer activity with foreign students\n',
                name: 'wander',
                period:'2018/10 ~ 2019/02', position:'Founder/chief',
                content:'Both Japanese and international students in my team help new international students to get' +
                    ' household appliances and to find restaurants to their liking in Tsukuba.',
            achievement:'・10 people were shown around Tsukuba\n' +
                '・5 people joined  my team',
                image:'/wander.jpg'
            },
            {title:'Start up media app company "Feedal"',
                name:'Feedal',
                period:'2019/02 ~',
                position:'Co-Founder/CEO',
                content:'Feedal has clear vision that make the world "anyone can get whatever kinds of information immediately with no stress." ' +
                    "And we're trying to create services in terms of collecting information.",
                achievement: "・Got 30 users as monitors of the β released app 'Feedal'.\n"+
                "・Released 'vs.corona by Feedal' that curate coronavirus-information of public organization like government.",
                link:'https://corp.feedal.com/',
                image:'/feedal.jpg'
            },
            {title: "Silicon Valley student's meetup\n",
                name:"Silicon Valley students' meetup"
            ,period: "2020/01 ~ 2020/03", position: "Co-organizer",
            content:"We host idea-thon and meetups for Japanese students in Silicon Valley who have variety of backgrounds, " +
                "passion for their dream and who like to think new disruptive ideas in a team ",
            achievement:"・Host idea-thon, which 12 people joined, at Btrax,Inc \n" +
                "・Host meetups, which 15 people joined, at Sales Force Park.",
            image:"/SV_meetup.jpg"}
        ],
        products: [
            {title:'Remote-car',
            content:'This remote-car is composed of Arduino , LEGO , motor and an acceleration sensor .\n\n' +
                'If this is supposed to conflict something, this can turn the direction and run automatically.'
                ,
            image:'/remote-car.jpg',
            lang:'C++ (Arduino)'},
            {title:'"Tac"channel',
            content:'This is the bulletin board that anyone can say their real intentions. ' +
                'Someone has many abuses for this world, but they don\'t have the opportunities to say them.\n' +
                '\n' +
                'That\'s why I made it for them to say everything.\n' +
                '\n',
                image:'/tacchanel.jpg',
            lang:'PHP,HTML,CSS'},
            {title:'25 hours-driven clock',
            content:'If you use the app, you can spend 25 hours instinctively in a day.',
                image:'/25watch.png',
            lang:'JS, HTML, CSS',
            atag : 'https://serene-jennings-1c823e.netlify.com/'},
            {title:'Your toilet',
            content:'If I go somewhere I haven\'t ever been, I have no idea which toilets I should go.\n' +
                '\n' +
                'And this case also occurs in University of Tsukuba.\n' +
                '\n' +
                'So, this is the app you can find the best toilets in Univ and also you all can review for each toilets.',
            lang:'Ruby on Rails , JS',
            image:'/yourtoilet.png',
            atag: 'https://yourtoilet.herokuapp.com/'},
            {title:'This my portfolio',
                content:'Update my portfolio',
            lang:'Nuxt.js'},
            {title:'Funbrella',
            content:'This is the team project in the class. We develop umbrella that project screen of smartphone for HW and the game using umbrella for SW ' +
                'to make rainy day enjoyable. \n'+'I made the game that can detect inclination of the umbrella and avoid enemies with my members.',
            lang:'jQuery, phina.js, HTML, CSS',
            image:'/funbrella.png'},
            {title:'GatorTrader',
                content:'This is the team project in the class at SFSU. We created the app C2C EC site for SFSU students especially. I was in charge of the backend system.'
                    ,
                lang:'Express.js, Node.js, bootstrap',
                image:'/gatortrader_formal.png'
            },

        ]


    };
  }
};

</script>

