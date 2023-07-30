module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'flower-db'),
			user: env('DATABASE_USERNAME', 'flower'),
			password: env('DATABASE_PASSWORD', 'Linerace20!0'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
