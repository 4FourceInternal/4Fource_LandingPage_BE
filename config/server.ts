export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2', 'defaultKey3', 'defaultKey4']),
  },
  url: env('PUBLIC_URL', `http://${env('HOST', '0.0.0.0')}:${env.int('PORT', 1337)}`),
  proxy: true,
  cron: {
    enabled: false,
  },
});
