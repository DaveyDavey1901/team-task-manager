/* eslint-disable no-console */
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedTask = require('./task-seeds');
const seedTeam = require('./team-seeds');
const seedProject = require('./project-seeds');
const seedTeamProject = require('./team-project-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedProject();
  console.log('\n----- PROJECTS SYNCED -----\n');
  await seedTeam();
  console.log('\n----- TEAMS SYNCED -----\n');
  await seedTeamProject();
  console.log('\n----- TEAM PROJECTS SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SYNCED -----\n');
  await seedTask();
  console.log('\n----- TASKS SYNCED -----\n');
};

seedAll();
