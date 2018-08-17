const db = require('./index');
const {User} = require('./models');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');
  const users = await Promise.all([
    User.create({name: 'tasnuva'}),
    User.create({name: 'abigail'}),
    User.create({name: 'annalee'}),
    User.create({name: 'chris'}),
    User.create({name: 'aleks'}),
    User.create({name: 'rocky'})
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

runSeed();
