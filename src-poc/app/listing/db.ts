import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Conference } from '../core/model/model';

export class ConfDataSource extends DataSource<Conference> {
  public constructor(private data: Conference[]) {
    super();
  }

  connect(): Observable<Conference[]> {
    return of(this.data);
  }

  disconnect() {}
}

export const conferencesData: Conference[] = [
  {
    name: 'NG Poland',
    location: [
      'Warsaw',
      'Poland'
    ],
    date: new Date('2017-11-21T00:00:00.000Z'),
    confDays: 1,
    website: 'http://www.ng-poland.pl/',
    price: 90,
    priceCurrency: 'EUR',
    confSize: 300,
    description: ['The biggest Angular Conference in Central/Estern Europe. Learn about the present and future of Angular and its ecosystem, TypeScript, tools and much more.'],
    speakers: [],
    tags: ['angular'],
    twitterHandle: undefined
  },
  {
    name: 'Nodevember',
    location: [
      'Nashville',
      'USA'
    ],
    date: new Date('2017-11-27T00:00:00.000Z'),
    confDays: 2,
    website: 'http://nodevember.org/',
    price: 436,
    priceCurrency: 'USD',
    confSize: undefined,
    description: ['Nodevember is a two-day conference touching on all aspects of Node and JavaScript.'],
    speakers: [],
    tags: ['NodeJS'],
    twitterHandle: '@nodevember'
  },
  {
    name: 'AWS re:INVENT',
    location: [
      'Las Vegas',
      'USA'
    ],
    date: new Date('2017-11-27T00:00:00.000Z'),
    confDays: 5,
    website: 'https://reinvent.awsevents.com/',
    price: 1600,
    priceCurrency: 'USD',
    confSize: undefined,
    description: [
      '5-day event for developers and engineers',
      'system administrators',
      'systems architects',
      'and technical decision makers.'
    ],
    speakers: [],
    tags: [],
    twitterHandle: '@awscloud'
  },
  {
    name: 'Clarity',
    location: [
      'San Francisco',
      'USA'
    ],
    date: new Date('2017-11-28T00:00:00.000Z'),
    confDays: 3,
    website: 'https://www.clarityconf.com/',
    price: undefined,
    priceCurrency: undefined,
    confSize: undefined,
    description: [],
    speakers: [],
    tags: [
      'UX',
      'design'
    ],
    twitterHandle: undefined
  },
  {
    name: 'dotJS',
    location: [
      'Paris',
      'France'
    ],
    date: new Date('2017-11-30T00:00:00.000Z'),
    confDays: 2,
    website: 'https://www.dotjs.io/',
    price: 299,
    priceCurrency: 'EUR',
    confSize: undefined,
    description: [],
    speakers: [],
    tags: [],
    twitterHandle: '@dotJS'
  },
  {
    name: 'dotCSS',
    location: [
      'Paris',
      'France'
    ],
    date: new Date('2017-11-30T00:00:00.000Z'),
    confDays: 2,
    website: 'https://www.dotcss.io/',
    price: 299,
    priceCurrency: 'EUR',
    confSize: undefined,
    description: [],
    speakers: [],
    tags: [],
    twitterHandle: '@dotCSS'
  },
  {
    name: 'DevTernity',
    location: [
      'Riga',
      'Latvia'
    ],
    date: new Date('2017-12-01T00:00:00.000Z'),
    confDays: 2,
    website: 'http://devternity.com/',
    price: undefined,
    priceCurrency: undefined,
    confSize: undefined,
    description: [
      'The place where forward-thinking developers',
      'pragmatic architects and engineering leaders grow.'
    ],
    speakers: [],
    tags: [
      'architecture',
      'security',
      'testing'
    ],
    twitterHandle: '@devternity'
  },
  {
    name: 'NationJS',
    location: [
      'Washington',
      'USA'
    ],
    date: new Date('2017-12-01T00:00:00.000Z'),
    confDays: 1,
    website: 'http://nationjs.com/',
    price: 200,
    priceCurrency: 'USD',
    confSize: undefined,
    description: ['NationJS is the Mid-Atlantic\'s JavaScript and Web Platform conference.'],
    speakers: [],
    tags: [],
    twitterHandle: '@nationjs'
  },
  {
    name: 'Spring One',
    location: [
      'San Francisco',
      'USA'
    ],
    date: new Date('2017-12-04T00:00:00.000Z'),
    confDays: 2,
    website: 'https://2017.springoneplatform.io',
    price: 1300,
    priceCurrency: 'USD',
    confSize: undefined,
    description: [
      'Conference for those who build',
      'deploy',
      'and run cloud-native software.'
    ],
    speakers: [],
    tags: [
      'Java',
      'Angular'
    ],
    twitterHandle: undefined
  },
  {
    name: 'ConFoo CA',
    location: [
      'Vancouver',
      'Canada'
    ],
    date: new Date('2017-12-04T00:00:00.000Z'),
    confDays: 2,
    website: 'https://confoo.ca/',
    price: 715,
    priceCurrency: 'USD',
    confSize: undefined,
    description: [
      'Multi-technology conference for web developers',
      'focused on pragmatic solutions for web developers.'
    ],
    speakers: [],
    tags: ['web-general'],
    twitterHandle: '@confooca'
  },
  {
    name: 'DevRelCon',
    location: [
      'London',
      'UK'
    ],
    date: new Date('2017-12-06T00:00:00.000Z'),
    confDays: 1,
    website: 'https://london-2017.devrel.net/',
    price: 199,
    priceCurrency: 'GBP',
    confSize: undefined,
    description: [
      'A one day conference about developer relations',
      'developer experience and developer marketing'
    ],
    speakers: [],
    tags: ['developer-experience'],
    twitterHandle: undefined
  },
  {
    name: 'HolyJS 2017',
    location: [
      'Moscow',
      'Russia'
    ],
    date: new Date('2017-12-10T00:00:00.000Z'),
    confDays: 2,
    website: 'https://holyjs-moscow.ru/',
    price: 240,
    priceCurrency: 'USD',
    confSize: 600,
    description: ['HolyJS is a unique conference dedicated to JavaScript only.'],
    speakers: ['Douglas Crockford'],
    tags: [
      'JavaScript',
      'NodeJS'
    ],
    twitterHandle: '@HolyJSconf'
  },
  {
    name: 'Frontend Love Conference',
    location: [
      'Amsterdam',
      'Netherlands'
    ],
    date: new Date('2018-01-15T00:00:00.000Z'),
    confDays: 1,
    website: 'http://frontenddeveloperlove.com/',
    price: 199,
    priceCurrency: 'EUR',
    confSize: undefined,
    description: [
      'The Vue.js Conference Amsterdam is the key event to discover',
      'engage',
      'learn & exchange with the Vue.js community.'
    ],
    speakers: ['EVAN YOU'],
    tags: ['VueJS'],
    twitterHandle: '@vuejsamsterdam'
  },
  {
    name: 'NG Europe',
    location: [
      'Paris',
      'France'
    ],
    date: new Date('2018-02-02T00:00:00.000Z'),
    confDays: 1,
    website: 'https://ngeurope.org/',
    price: 199,
    priceCurrency: 'EUR',
    confSize: 800,
    description: [],
    speakers: [],
    tags: ['angular'],
    twitterHandle: undefined
  },
  {
    name: 'Smashing Conf',
    location: [
      'Toronto',
      'Canada'
    ],
    date: new Date('2018-06-25T23:00:00.000Z'),
    confDays: 2,
    website: 'smashingconf.com/toronto-2018',
    price: 499,
    priceCurrency: 'USD',
    confSize: 500,
    description: [
      '#noslides conference full of interactive live sessions',
      'showing how web designers design and how web developers build.'
    ],
    speakers: [
      'Dan Mall',
      'Gemma O’Brien',
      'Lea Verou',
      'Sara Soueidan',
      'Yiying Lu',
      'Sarah Drasner',
      'Rachel Andrew',
      'Eva-Lotta Lamm',
      'Joe Leech',
      'Seb Lee-Delisle',
      'Nadieh Bremer',
      'Aaron Draplin',
      'Tim Kadlec'
    ],
    tags: ['web-general'],
    twitterHandle: undefined
  },
  {
    name: 'The Lead Developer',
    location: [
      'NY',
      'USA'
    ],
    date: new Date('2018-04-23T23:00:00.000Z'),
    confDays: 1,
    website: 'https://newyork2018.theleaddeveloper.com/',
    price: undefined,
    priceCurrency: undefined,
    confSize: undefined,
    description: [
      'The Lead Developer is a conference for tech leads',
      'featuring practical advice from experts on leading and motivating your team and high-level sessions on new and disruptive technologies. Designed to address the unique challenge faced by technical managers: when you’re busy leading a team',
      'coding and maintaining standards',
      'how do you find the time to stay ahead of new technologies and develop yourself as a technical lead?'
    ],
    speakers: [],
    tags: ['management'],
    twitterHandle: undefined
  },
  {
    name: 'Render Conf',
    location: [
      'Oxford',
      'UK'
    ],
    date: new Date('2018-03-23T00:00:00.000Z'),
    confDays: 1,
    website: 'https://2018.render-conf.com/',
    price: undefined,
    priceCurrency: undefined,
    confSize: undefined,
    description: ['A 1-day conference for front-end developers'],
    speakers: [],
    tags: ['web-general'],
    twitterHandle: undefined
  },
  {
    name: 'NG Conf',
    location: [
      'Salt Lake City',
      'USA'
    ],
    date: new Date('2018-04-17T23:00:00.000Z'),
    confDays: 3,
    website: 'https://www.ng-conf.org/',
    price: 1300,
    priceCurrency: 'USD',
    confSize: undefined,
    description: ['WORLD\'S ORIGINAL ANGULAR CONFERENCE'],
    speakers: [],
    tags: ['angular'],
    twitterHandle: undefined
  },
  {
    name: 'Devoxx UK',
    location: [
      'London',
      'UK'
    ],
    date: new Date('2018-05-09T23:00:00.000Z'),
    confDays: 2,
    website: 'https://www.devoxx.co.uk/',
    price: 325,
    priceCurrency: 'GBP',
    confSize: 1200,
    description: [],
    speakers: [],
    tags: ['web-general'],
    twitterHandle: undefined
  },
  {
    name: 'Angular UP',
    location: [
      'Tel Aviv',
      'Israel'
    ],
    date: new Date('2018-06-20T23:00:00.000Z'),
    confDays: 1,
    website: 'http://angular-up.com/',
    price: 160,
    priceCurrency: 'EUR',
    confSize: undefined,
    description: [
      'Hear top speakers from around the world. Learn about the present and future of Angular and its ecosystem. Join our Angular tour of Israel',
      'float in the dead sea',
      'walk in the streets of Jerusalem',
      'and eat great Hummus.'
    ],
    speakers: [],
    tags: ['angular'],
    twitterHandle: undefined
  },
  {
    name: 'SeleniumConf',
    location: [
      'Chicago',
      'USA'
    ],
    date: 'Q3 2018',
    confDays: 2,
    website: 'https://www.seleniumconf.de/',
    price: undefined,
    priceCurrency: undefined,
    confSize: undefined,
    description: ['Official Selenium Conference'],
    speakers: [],
    tags: ['testing'],
    twitterHandle: undefined
  },
  {
    name: 'Angular Connect',
    location: [
      'London',
      'UK'
    ],
    date: new Date('2018-11-06T00:00:00.000Z'),
    confDays: 2,
    website: 'angularconnect.com/2017',
    price: undefined,
    priceCurrency: undefined,
    confSize: 1000,
    description: [
      'Europe\'s Largest Angular Conference featuring the world’s leading Angular experts',
      'including the core Angular team at Google. This multi-track event features two main tracks of talks',
      'plus mini workshops',
      'and Office Hours and panel sessions with our speakers.'
    ],
    speakers: [
      'Alex Rickabaugh',
      'Filipe Silva',
      'Georgios Kalpakas',
      'Hans Larsen',
      'Igor Minar',
      'Jan Molak',
      'Jeff Cross',
      'Jules Kremer',
      'Minko Gechev',
      'Olivier Combe',
      'Rob Wormald',
      'Shai Reznik',
      'Tracy Lee',
      'Victor Savkin',
      'Ward Bell'
    ],
    tags: ['angular'],
    twitterHandle: undefined
  }
];