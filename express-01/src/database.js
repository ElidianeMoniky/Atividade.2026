const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

let databasePromise;

const conectarBanco = () => {
  if (!databasePromise) {
    databasePromise = sequelize.authenticate()
      .then(() => sequelize.sync())
      .catch((error) => {
        databasePromise = null;
        throw error;
      });
  }

  return databasePromise;
};

module.exports = { sequelize, conectarBanco };