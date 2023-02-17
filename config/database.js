module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'nextjsag_strapi'),
      user: env('DATABASE_USERNAME', 'nextjsag_root'),
      password: env('DATABASE_PASSWORD', '=;(dc%LSGjs('),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
