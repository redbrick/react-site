const path = require(`path`);
const { name, description, author, homepage } = require('./package.json');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: name,
    description,
    author,
    siteUrl: homepage,
    committee: {
      year: '2020/21',
    },
    uptimeRobot: {
      apiKey: process.env.UPTIME_ROBOT_APIKEY,
    },
    menu: [
      { name: 'Home', to: '/' },
      { name: 'Events', to: '/events' },
      { name: 'About', to: '/about' },
      { name: 'Help', to: '/help' },
      { name: 'Services', to: '/services' },
      { name: 'Discord', to: 'https://discord.gg/3aRU5BQ', external: true },
    ],
    social: [
      {
        link: 'https://github.com/redbrick',
        icon: 'github',
      },
      {
        link: 'https://www.facebook.com/dcuredbrick/',
        icon: 'facebook',
      },
      { link: 'https://www.instagram.com/redbrickDCU/', icon: 'instagram' },
      {
        link: 'https://twitter.com/RedbrickDCU/',
        icon: 'twitter',
      },
    ],
    services: [
      { link: 'https://git.redbrick.dcu.ie', icon: 'fab git', label: 'Git' },
      { link: 'https://webmail.redbrick.dcu.ie', icon: 'envelope', label: 'Mail' },
      { link: 'https://wiki.redbrick.dcu.ie', icon: 'info', label: 'Wiki' },
      { link: 'https://paste.redbrick.dcu.ie', icon: 'paste', label: 'Hastebin' },
      { link: 'https://md.redbrick.dcu.ie', icon: 'file', label: 'HackMD' },
      { link: 'https://mastodon.redbrick.dcu.ie', icon: 'share-alt-square', label: 'Mastodon' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        short_name: name,
        start_url: '/',
        name: description,
        icon: 'src/images/brick.png',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        apiKey: process.env.GOOGLE_API_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: 'Slurp', allow: '/', crawlDelay: 5 },
        ],
      },
    },
  ],
};
