const router = require("express").Router();
const userController = require('../controllers/userController');

router.post("/create", userController.user_create);
router.get("/", userController.user_all);
router.get("/:user_Id", userController.user_details);
router.put("/:user_Id", userController.user_update);
router.delete("/:user_Id", userController.user_delete);

module.exports = router;
