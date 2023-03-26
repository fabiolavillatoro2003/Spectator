const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/hello").get(controllers.hello);
router.route("/api/sources").get(controllers.sources);
router.route("/api/add_sources").post(controllers.add_sources);
router.route("/api/delete_source/:id").post(controllers.id);
module.exports = router;