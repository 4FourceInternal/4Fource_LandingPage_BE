module.exports = ({ env }) => ({
  client: 'postgres',
  connection: {
    connectionString: env('DATABASE_URL'),
    ssl: env.bool('DATABASE_SSL', true),
  },
  pool: {
    min: env.int('DATABASE_POOL_MIN', 2),
    max: env.int('DATABASE_POOL_MAX', 10),
  },
});