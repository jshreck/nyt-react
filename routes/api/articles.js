const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .post(articlesController.create);

router.route("/saved")
.get(articlesController.findAll);

router.route(`/delete/:id`)
.delete(articlesController.delete);

module.exports = router;

