var config = {
    lang: 'en',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Knoxville, US',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '1d1a62855c20cde783365c8a0facf33a',
            cnt: 1
        }
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
            {
                symbol: 'calendar',
                url: 'https://calendar.google.com/calendar/ical/jrainwater%40thinkpyxl.com/private-655e36b3940502387eb7d70f1f792b8d/basic.ics'
            },
            {
                symbol: 'users',
                url: 'https://calendar.google.com/calendar/ical/joel.rain2o%40gmail.com/private-cde0ee996c297585a0530670386a379f/basic.ics'
            },
            {
                symbol: 'headphones',
                url: 'https://calendar.google.com/calendar/ical/5ajgolh6eeeq9vlo00tv3ve2aj58nfcr%40import.calendar.google.com/private-9d21bfc0ed342fe92d25923bf35d0409/basic.ics'
            }
		]
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
