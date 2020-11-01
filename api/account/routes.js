// @
const { express } = global;

const router = express.Router();

const controller = require('./controller');
const middleware = require('./middleware');

router.use(middleware.authorization);

router.get('/', controller.find);

router.post('/', controller.signup);

router.put('/', controller.update);

router.patch('/', controller.update);

router.delete('/', controller.remove);

module.exports = router;
