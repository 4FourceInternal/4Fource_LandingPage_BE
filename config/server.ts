export default ({ env }) => {
  const port = env.int('PORT', 10000); // Use Render's default port
  const host = env('HOST', '0.0.0.0');
  
  console.log(`Starting Strapi server on ${host}:${port}`);
  
  return {
    host,
    port,
    app: {
      keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2', 'defaultKey3', 'defaultKey4']),
    },
    proxy: true,
    cron: {
      enabled: false,
    },
  };
};
