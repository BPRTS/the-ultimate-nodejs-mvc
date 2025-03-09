export default {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'mydatabase'
    },
    sessionSecret: process.env.SESSION_SECRET || 'your-secret-key',
    apiUrl: process.env.API_URL || 'http://localhost:3000/api'
};