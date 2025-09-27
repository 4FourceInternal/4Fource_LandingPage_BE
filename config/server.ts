// export default ({ env }) => {
//   const port = env.int('PORT', 10000); // Use Render's default port
//   const host = env('HOST', '0.0.0.0');
  
//   console.log(`Starting Strapi server on ${host}:${port}`);
  
//   return {
//     host,
//     port,
//     app: {
//       keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2', 'defaultKey3', 'defaultKey4']),
//     },
//     proxy: true,
//     cron: {
//       enabled: false,
//     },
//   };
// };

export default ({ env }) => {
  const port = env.int('PORT', 10000); // Use Render's default port
  const host = env('HOST', '0.0.0.0');
  // Use local URL for development, production URL for production
  const url = env('NODE_ENV') === 'production' 
    ? 'https://qoyy-backend.portalhub.top' 
    : `http://localhost:${port}`;

  console.log(`Starting Strapi server on ${host}:${port}`);
  console.log(`Server URL: ${url}`);

  return {
    host,
    port,
    url,
    admin: {
      url: '/admin',
      serveAdminPanel: true,
    },
    app: {
      keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2', 'defaultKey3', 'defaultKey4']),
    },
    proxy: true,
    cron: {
      enabled: false,
    },
    // Add request timeout to prevent hanging uploads
    requestTimeout: 300000, // 5 minutes
  };
};