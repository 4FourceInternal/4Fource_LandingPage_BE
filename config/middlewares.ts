export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://qoyy-backend.portalhub.top',
            'https://qoyy.portalhub.top',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://qoyy-backend.portalhub.top',
            'https://qoyy.portalhub.top',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 200MB in bytes
        maxFields: 1000, // Increase field limit
        maxFieldsSize: 20 * 1024 * 1024, // 20MB for fields
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://qoyy.portalhub.top', 
        'https://qoyy.portalhub.top',
        'http://localhost:3000',
        'http://localhost:1337',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:1337'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'UPDATE'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'X-Requested-With',
        'Accept',
        'Origin',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers'
      ],
      exposedHeaders: ['Content-Range', 'X-Total-Count'],
      credentials: true,
    },
  },
];
