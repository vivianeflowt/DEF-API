// @
const { express } = global;

const router = express.Router();

const AccountRouter = require('./account/routes');

router.use('/account', AccountRouter);

module.exports = router;
