module.exports = {
  dialect: 'postgress',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'missaorama',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};