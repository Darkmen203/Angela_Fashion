module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
//   url: 'http://api.localhost:3000',
//   URL: "https://YOUR_URL.com/api",
//   admin:{
//     auth: {
//         xxx: env("xxx", "???")
//     }
//   },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
