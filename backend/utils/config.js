// Секретный ключ для разработки и отладки приложения:
const JWT_SECRET_DEV = 'dev-secret-key';

// Адрес подключения к базе данных MongoDB с таблицей bitfilmsdb:
const MONGODB = 'mongodb://127.0.0.1:27017/bitfilmsdb';

// Адрес подключения порта на котором работает бекенд:
const { PORT = 3000 } = process.env;

module.exports = { PORT, MONGODB, JWT_SECRET_DEV };
