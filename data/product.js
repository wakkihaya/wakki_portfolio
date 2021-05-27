const productList = [
        {
          title: 'Neuro-focused LED system',
          content: 'This is a LED switcher system based on brain waves using Muse. LED is OFF while you are focusing. LED is ON while you are relaxing.\n\n' +
            'After training your mental activities for both relaxing and focusing with SVM, the application will classify your test mental activities and change LED state.'
          ,
          video: require('~/assets/video/neuro-focus-led.mp4'),
          lang: 'Python, C++ (Arduino)'
        },
        {
          title: 'Remote-car',
          content: 'This remote-car is composed of Arduino ,LEGOs ,a motor and an acceleration sensor .\n\n' +
            'If the censors detect conflicts to some objects, the car can turn the direction and keep running automatically.'
          ,
          image: require('~/assets/images/remote-car.jpg'),
          lang: 'C++ (Arduino)'
        },
        {
          title: '25 hours-driven clock',
          content: 'If you use the app, you can spend 25 hours instinctively in a day.',
          image: require('~/assets/images/25watch.png'),
          lang: 'JS, HTML, CSS',
          atag: 'https://serene-jennings-1c823e.netlify.com/'
        },
        {
          title: 'Your toilet(in Univ of Tsukuba)',
          content: 'You might have experiences that you have no ideas for toilets to go in somewhere you have not been.\n' +
            '\n' +
            'In the app, you can find the best toilets based on reviews that other users do.',
          lang: 'Ruby on Rails , JS',
          image: require('~/assets/images/yourtoilet.png'),
        },
        {
          title: 'This my portfolio',
          content: 'Update my portfolio',
          lang: 'Nuxt.js'
        },
        {
          title: 'Funbrella',
          content: "This was the team project in the class at Univ of Tsukuba. `Funbrella` is the umbrella that projects a screen of your smartphone, and also you can play the game only for 'Funbrella' we released.",
          lang: 'JS, phina.js, HTML, CSS',
          image: require('~/assets/images/funbrella.png')
        },
        {
          title: 'GatorTrader',
          content: "This was the team project in the class at SFSU. 'GatorTrader' is C2C EC site for SFSU students especially. I was in charge of the backend system."
          ,
          lang: 'Express.js, Node.js, bootstrap',
          image: require('~/assets/images/gatortrader_formal.png')
        },
        {
          title: 'Frontend stuff',
          content: 'I implemented LP, HP and so on. \n\n' +
            'Here is a few examples:  https://neurotechjp.com , https://mokuhub.work, https://corp.feedal.com, ',
          lang: 'Nuxt.js, Vue.js, React.js',
        },
      ]

      export default productList
