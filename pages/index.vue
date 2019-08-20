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
          <a href ="#introduction"><li>Introduction</li></a>
          <a href = "#activity"><li>Activity</li></a>
          <a href="#product"> <li>Products</li></a>
          <a href="#contact"><li>Contact</li></a>
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


        <table border="0" v-for = "career in careers" v-bind:key="career.year" id="mycareer">
          <tbody>
          <tr>
            <td class="td1">{{career.year}}</td>
            <td class="td2" style="white-space:pre-line">{{career.event }}</td>
          </tr>
          </tbody>
        </table>

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
        <div class="list_activities_title">
          {{act.title}}
        </div>

        <div class="list_activities_content">
          <div class="content_title">Period:</div>
          <p>{{act.period}} </p>  <br>

          <div class="content_title">Position:</div>
          <p>{{act.position}} </p> <br>

          <div class="content_title">Content: </div>
          <p>{{act.content}}  </p>   <br>

          <div class="content_title">Achievement:</div>
          <p>{{act.achievement}}</p>    <br>

          <div class="content_title">Link:</div>
          <p>{{act.link}} </p> <br>

          <img :src= "act.image"  width="30%" height="30%" />

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
          <p class="items_title" ><a :href="product.atag">{{product.title}}</a></p>
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
          <a href="https://github.com/wakkihaya"><i class="fab fa-github-square fa-3x"></i> </a>
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
  data() {
    return {

        /*introduction についてのdata*/
      careers: [
        {year: '1999', event: 'Born in Japan'},
        {year: '2014', event: 'Entered Seijo high school'},
        {year: '2017', event: 'Entered Computer Science in Univ of Tsukuba'},
        {
          year: '2018',
          event: '・ Interned as an engineer in USEN-NEXT-GROUP Inc\n\n' +
            '・ Interned as a web engineer in Unipro Inc\n\n' +
            '・ Started the volunteer activity with foreign students as a chief'
        },
        {year: '2019', event: '・Start up curation media business as CEO\n\n' +
        '・Join in the business contest of Microsoft in Japan'},
        {
          year: 'Now',
          event: '・Continue the media business\n\n' +
            '・Study CS in SF State Univ and work in San Francisco'
        }
      ],

        /*activity についてのdata*/
        activities: [
            {title:'1.  Volunteer activity with foreign students\n'
                ,period:'2018/10 ~ 2019/02', position:'Founder/chief',
                content:'Both Japanese and overseas students in my team help new overseas students to get' +
                    ' household appliances and to introduce restaurants to their liking in Tsukuba.',
            achievement:'・10 people that showed around Tsukuba\n\n' +
                '・5 people joined in my team',
            link: 'http://wanderjapan.site/wander1.html',
                image:'/wander.jpg'
            },
            {title:'2.  Start up curation media App company "Feedal"',
                period:'2019/02 ~',
                position:'Co-Founder/CEO',
                content:'If we have this app, we get whatever kinds of trend information that other users in the app share.' +
                    'This app has many segmented categories which users can create and edit, and good algorithm for trend information. ',
                achievement: '・We got 30 users as monitors of the β released app.',
                link:'https://feedal.com/about/',
                image:'/feedal.jpg'
            }
        ],
        products: [
            {title:'Remote-car',
            content:'This remote-car is composed of Arduino , LEGO , motor and an acceleration sensor .\n\n' +
                'If this is supposed to conflict something, this can turn the direction and run automatically.'
                ,
            image:'/remote-car.jpg',
            lang:'C++ (Arduino)'},
            {title:'"Tac"channel',
                atag:'http://wakkihaya.starfree.jp/test.php',
            content:'This is the bulletin board that anyone can say their real intentions.' +
                'Someone has many abuses for this world, but they don\'t have the opportunities to say them.\n' +
                '\n' +
                'That\'s why I make it for them to say everything.\n' +
                '\n',
            lang:'PHP,HTML,CSS'},
            {title:'Project "wander"',
            content: 'This is the web page for the projects with foreign students as I said.',
            atag:'http://wanderjapan.site/wander1.html',
            lang:'HTML,CSS,jQuery'},
            {title:'To do Application',
            content:'This is a simple todo application that can add and delete todo contents. ',
            lang: 'Flutter, dart',
            image:'/flutter_todo.png'},
            {title:'25 hours-drive strange clock',
            content:'You can spend 25hours instinctively in a day even though actually 24hours have passed.',
            lang:'JS, HTML, CSS',
            atag : 'https://protected-island-53136.herokuapp.com/'},
            {title:'Which is your Best toilet??',
            content:'If I go somewhere I haven\'t ever been, I have no idea which toilets I should go.\n' +
                '\n' +
                'And this case also occurs in University of Tsukuba.\n' +
                '\n' +
                'So, this is the App you can get the information of toilets in Univ and you all can make the comments for each toilets.',
            lang:'Rails , JS',
            image:'/toilet_2.png'},
            {title:'this my portfolio',
                content:'Update my portfolio',
            lang:'Nuxt.js'}
        ]


    };
  }
};

</script>

