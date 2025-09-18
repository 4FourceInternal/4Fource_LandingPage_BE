// export default ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'qoyy_global'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', '1234'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//     pool: {
//       min: env.int('DATABASE_POOL_MIN', 0),
//       max: env.int('DATABASE_POOL_MAX', 10),
//       acquireTimeoutMillis: 60000,
//       createTimeoutMillis: 60000,
//       destroyTimeoutMillis: 60000,
//       idleTimeoutMillis: 60000,
//       reapIntervalMillis: 1000,
//       createRetryIntervalMillis: 100,
//     },
//     debug: false,
//   },
// });


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
});