const carrerList = [
  { year: '1999', event: 'Born in Japan\n\n' },
  { year: '2014', event: 'Entered Seijo high school\n\n', location: 'Tokyo/Japan' },
  {
    year: '2017',
    event: 'Graduated from Seijo high school',
    duration: '~ 2017/03',
    image: require('~/assets/images/seijo.png'),
    location: 'Tokyo/Japan'
  },
  {
    year: '2017',
    event: 'Study computer science at Univ of Tsukuba\n\n',
    duration: '2017/04 ~ 2022/03',
    image: require('~/assets/images/univoftsukuba.png'),
    location: 'Tsukuba/Japan'
  },
  {
    year: '2018',
    event: 'Business internship at USEN-NEXT-GROUP Inc\n\n',
    duration: '2018/08',
    image: require('~/assets/images/usen-next-group.jpg'),
    location: 'Tokyo/Japan',
    content: 'This was 5-day Internship that make new business.\n\n' +
      '- Made the new app in agriculture industry\n\n' +
      '- Thought it logically and disruptively'
  },
  {
    year: '2018',
    event: 'Office system engineer internship at USEN-ICT-SOLUTIONS\n\n',
    duration: '2018/12 ~ 2019/02',
    image: require('~/assets/images/usen-ict-solutions.png'),
    location: 'Tokyo/Japan',
    content: 'This company had lots of data and mails of clients managed by G suite, and they had a lot of redundancies for using G suite.\n\n' +
      '- Made back office environment twice more efficient than before , by using Google App Script.\n\n' +
      '- Implemented the automatic mail system on G suite.'
  },
  {
    year: '2018',
    event: 'Founded volunteer "wander" with international students\n\n',
    duration: '2018/10 ~ 2019/02',
    image: require('~/assets/images/wander.jpg'),
    location: 'Tsukuba/Japan',
    content: 'Both Japanese and international students in my team help new international students to get' +
      ' household appliances and to find restaurants to their liking in Tsukuba. \n\n'+
    '- 10 people were shown around Tsukuba\n\n' +
      '- 5 people joined  my team',
  },
  {
    year: '2019',
    event: 'Full stack engineer internship at Unipro Inc\n\n',
    duration: '2019/02 ~ 2019/04',
    image: require('~/assets/images/unipro.png'),
    location: 'Tokyo/Japan',
    content: 'This company makes money by contracted development from big companies in Japan.\n\n' +
      '- Improved and developed the web app using Vue.js and Laravel\n\n' +
      '- Removed bugs of app by acting as a tester'
  },
  {
    year: '2019',
    event: 'Business internship at Microsoft Japan\n\n',
    duration: '2019/08',
    image: require('~/assets/images/microsoft.png'),
    location: 'Tokyo/Japan',
    content: 'This was the business contest that make new business in a week hosted by Microsoft Japan.\n\n' +
      '- Thought logically the solution for the problem which Microsoft has now\n\n' +
      '- Made the prototype of the app by using "Figma"'
  },
  {
    year: '2019',
    event: 'Developer internship at Btrax Inc\n\n',
    duration: '2019/10 ~ 2019/12',
    image: require('~/assets/images/btrax.png'),
    location: 'San Francisco/U.S.',
    content: 'This company is an innovation design company based in SanFrancisco.\n\n' +
      '- Created the web page integrated with 3rd party.\n\n' +
      '- Built the initial environment to develop with github and aws.\n\n' +
      '- Got APIs for the web page.\n\n' +
      '- Wrote the article in our blog.'
  },
  {
    year: '2020',
    event: 'Study computer science at San Francisco State Univ\n\n',
    duration: '2019/08 ~ 2020/05',
    image: require('~/assets/images/sfsu.jpg'),
    location: 'San Francisco/U.S.',
    content: 'Exchange student'
  },
  {
    year: '2020',
    event: 'Ex-CEO/Co-Founder at Feedal Inc.\n\n',
    duration: '2019/07 ~ 2020/10',
    image: require('~/assets/images/feedal_2.jpg'),
    location: 'Tsukuba/Japan',
    content: 'More ⇊',
    atag: '#activity'
  },
  {
    year: '2020',
    event: 'Software Engineer Internship at Locotabi Inc.\n\n',
    duration: '2020/09 ~ 2020/10',
    image: require('~/assets/images/locotabi.png'),
    location: 'Tokyo/Japan',
    content: 'This company has the app that Japanese staying in foreign countries provide Japanese staying in Japan with lots of services. \n\n' +
      '- Improve features and fix bugs in app using Ruby on Rails',
  },
  {
    year: '2021',
    event: 'Developer/Ex-Co-Founder at Here labs, Inc.\n\n',
    duration: '2020/12 ~ Current',
    image: require('~/assets/images/here.png'),
    location: 'San Francisco/U.S.',
    content: 'More ⇊',
    atag: '#activity'
  },
]

export default carrerList
