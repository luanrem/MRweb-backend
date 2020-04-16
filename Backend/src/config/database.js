module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: 'docker',
  database: 'missaorama',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};