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

          <div class="content_title" >Achievement:</div>
          <p style="white-space:pre-line">{{act.achievement}}</p>    <br>

          <div class="content_title">Link:</div>
          <p><a :href = "act.link">{{act.link}}</a> </p> <br>

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
          <a href = "https://www.linkedin.com/in/wakkihaya/"><i class="fab fa-linkedin fa-3x"></i></a>
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
          event: '・ Interned of making new service at USEN-NEXT-GROUP Inc\n\n' +
            '・Interned as an office system engineer at USEN-ICT-SOLUTIONS\n\n' +

            '・ Started the volunteer activity with foreign students as a chief'
        },
        {year: '2019', event: '・ Interned as a web engineer at Unipro Inc\n\n'+
                '・Start up curation media business as CEO\n\n' +
        '・Join the business contest at Microsoft Japan'},
        {
          year: 'Now',
          event: '・CEO at Feedal Inc.\n\n' +
            '・Study CS in SF State Univ.\n\n'+
            '・Intern as a developer at Btrax Inc'
        }
      ],

        /*activity についてのdata*/
        activities: [
            {title:'1.  Volunteer activity with foreign students\n'
                ,period:'2018/10 ~ 2019/02', position:'Founder/chief',
                content:'Both Japanese and overseas students in my team help new overseas students to get' +
                    ' household appliances and to find restaurants to their liking in Tsukuba.',
            achievement:'・10 people were showed around Tsukuba\n\n' +
                '・5 people joined  my team',
            link: 'http://wanderjapan.site/index',
                image:'/wander.jpg'
            },
            {title:'2.  Start up curation media App company "Feedal"',
                period:'2019/02 ~',
                position:'Co-Founder/CEO',
                content:'If we have this app, we get whatever kinds of trend information that other users in the app share.' +
                    'This app has many segmented categories which users can create and edit, and good algorithm for trend information. ',
                achievement: '・Got 30 users as monitors of the β released app.\n\n'+
                '・Trying to brush up the product to achieve PMF',
                link:'https://corp.feedal.com/',
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
            content:'This is the bulletin board that anyone can say their real intentions. ' +
                'Someone has many abuses for this world, but they don\'t have the opportunities to say them.\n' +
                '\n' +
                'That\'s why I make it for them to say everything.\n' +
                '\n',
                image:'/tacchanel.jpg',
            lang:'PHP,HTML,CSS'},
            {title:'Project "wander"',
            content: 'This is the web page for the projects with foreign students as I said.',
            atag:'http://wanderjapan.site/index',
            lang:'HTML,CSS,jQuery'},
            {title:'To do Application',
            content:'This is a simple todo application that can add and delete todo contents. ',
            lang: 'Flutter, dart',
            image:'/flutter_todo.png'},
            {title:'25 hours-drive strange clock',
            content:'You can spend 25hours instinctively in a day even though actually 24hours have passed.',
                image:'/25watch.jpg',
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
            {title:'This my portfolio',
                content:'Update my portfolio',
            lang:'Nuxt.js'},
            {title:'Funbrella',
            content:'This is the team project in the class. We develop umbrella that project screen of smartphone for HW and the game using umbrella for SW ' +
                'to make rainy day enjoyable. \n'+'I make the game that can detect inclination of the umbrella and avoid enemies.',
            lang:'jQuery, phina.js, HTML, CSS',
            image:'/funbrella.png'},
        ]


    };
  }
};

</script>

