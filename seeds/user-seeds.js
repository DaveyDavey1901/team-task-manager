const { User } = require('../models');

const userData = [
  {
    first_name: 'Martha',
    last_name: 'Jones',
    username: 'marthaJ',
    password: 'password1',
    role: 'manager',
  },
  {
    first_name: 'Bart',
    last_name: 'Parker',
    username: 'bartM',
    password: 'password2',
    role: 'employee',
    team_id: 1,
  },
  {
    first_name: 'John',
    last_name: 'Smith',
    username: 'agent.smith',
    password: 'password3',
    role: 'employee',
    team_id: 1,
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
