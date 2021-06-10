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
    content: 'The internship was 5-day Internship that make new business.\n\n' +
      '- Research on potential needs in the agriculture industry and build a new business idea in a team\n\n' +
      '- Pitch our idea'
  },
  {
    year: '2018',
    event: 'Office system engineer internship at USEN-ICT-SOLUTIONS\n\n',
    duration: '2018/12 ~ 2019/02',
    image: require('~/assets/images/usen-ict-solutions.png'),
    location: 'Tokyo/Japan',
    content: 'The company had lots of data and mails of clients managed by G suite, and they had a lot of redundancies for using G suite.\n\n' +
      '- Build an automated mail system connected with Google spreadsheet by using GAS\n\n' +
      '- Build automated marketing analytics tool for finding potential customers'
  },
  {
    year: '2018',
    event: 'Founded volunteer "wander" with international students\n\n',
    duration: '2018/10 ~ 2019/02',
    image: require('~/assets/images/wander.jpg'),
    location: 'Tsukuba/Japan',
    content: 'Both Japanese and international students in my team help new international students to get' +
      ' household appliances and to find restaurants to their liking in Tsukuba. \n\n' +
      '- 10 people were shown around Tsukuba\n\n' +
      '- 5 people joined  my team',
  },
  {
    year: '2019',
    event: 'Full stack engineer internship at Unipro Inc\n\n',
    duration: '2019/02 ~ 2019/04',
    image: require('~/assets/images/unipro.png'),
    location: 'Tokyo/Japan',
    content: 'Unipro makes money by contracted development from big companies in Japan.\n\n' +
      '- Develop web applications agilely using Vue.js and Laravel in a team\n\n' +
      '- Execute as a test engineer along with app requirements'
  },
  {
    year: '2019',
    event: 'Business internship at Microsoft Japan\n\n',
    duration: '2019/08',
    image: require('~/assets/images/microsoft.png'),
    location: 'Tokyo/Japan',
    content: 'The internship was the business contest that make new business in a week hosted by Microsoft Japan.\n\n' +
      '- Research on technologies and communities which Microsoft has\n\n' +
      '- Create a business idea(Education service) from the perspective of the company vision and monetization\n\n' +
      '- Execute prototyping design of the service by Figma\n\n' +
      'Finally, we got 3rd place out of 10 teams'
  },
  {
    year: '2019',
    event: 'Developer internship at Btrax Inc\n\n',
    duration: '2019/10 ~ 2019/12',
    image: require('~/assets/images/btrax.png'),
    location: 'San Francisco/U.S.',
    content: 'Btrax is a design consulting company using design thinking methodology to find potential problems and build mock- up with clients.\n\n' +
      '- Build deploy environment for DevOps by connecting with Github and AWS\n\n' +
      '- Develop the websites using PHP with backend system by Zapier\n\n' +
      '- Create original tools for office system improvement by using Node.js with APIs'
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
    content: 'Locotabi has the app that Japanese staying in foreign countries provide Japanese staying in Japan with lots of services. \n\n' +
      '- Improve features and fix bugs in app using Ruby on Rails',
  },
  {
    year: '2021',
    event: 'CTO/Co-Founder at Here labs, Inc.\n\n',
    duration: '2020/12 ~ 2021/4',
    image: require('~/assets/images/here.png'),
    location: 'San Francisco/U.S.',
    content: 'More ⇊',
    atag: '#activity'
  },
  {
    year: '2021',
    event: 'Writer/Orgnizer at NeuratechJP blog site.\n\n',
    duration: '2021/5 ~ Present',
    image: require('~/assets/images/neurotechJp_icon.png'),
    location: ' ',
    content: 'More ⇊',
    atag: '#activity'
  }
]

export default carrerList
