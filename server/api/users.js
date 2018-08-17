const router = require('express').Router();
const {User} = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await User.destroy({where: {id: req.params.id}});
    res.sendStatus(202);
    //202 is the status code for "accepted"
  }
  catch (err){
    next(err);
  }
});
