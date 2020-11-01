// @
const { express } = global;

const router = express.Router();
const mongoose = require('mongoose');
const ApiRouter = require('../api');
const DebugMiddleware = require('./middlewares/debug');
const Credencial = require('../models/Credencial');

// @ MAIN MIDDLEWARE
router.use(DebugMiddleware);

// @ ROOT ROUTER
router.get('/', async (req, res) => {
  try {
    // console.log(` ${icon.arrow} ${req.method}, ${JSON.stringify(req.body)}`)
    return res.send({ method: req.method, content: req.body });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

// @ API ROUTER
router.use('/api', ApiRouter);

// @ DEBUG ROUTER
router.post('/debug', async (req, res) => {
  try {
    const c = new Credencial({
      context: req.body.context || '',
      description: req.body.description || '',
      privileges: { key: 111, value: 122 } || ''
    });
    await c.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

router.get('/debug', async (req, res) => {
  try {
    const allcred = await Credencial.find({}).exec();
    res.status(200).json(allcred);
  } catch (error) {
    res.status(400).send({ success: false, error });
  }
});

router.delete('/debug', async (req, res) => {
  try {
    await mongoose.connection.db.dropDatabase();
    // throw new Error('aaa');
  } catch (error) {
    if (error) return res.status(400).send({ success: false, error });
  }
  return res.status(200).send({
    success: true
  });
});

module.exports = router;
