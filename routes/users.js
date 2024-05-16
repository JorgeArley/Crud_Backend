/**
 * Route: /api/users
 */

const { Router } = require('express');
const { check } = require('express-validator');

const { getUsers, postUser, putUser, deleteUser } = require('../controllers/users.controller');
const { validateInputs } = require('../middlewares/validate-inputs');


const router = Router();

router.get('/', getUsers);
router.post('/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('url_image', 'url_image is required').not().isEmpty(),
    check('role', 'role is required').not().isEmpty(),
    check('status', 'status is required').not().isEmpty(),
    check('social_profile', 'social_profile is required').not().isEmpty(),
    check('promote', 'promote is required').not().isEmpty(),
    check('rating', 'rating is required').not().isEmpty(),
    check('last_login', 'last_login is required').not().isEmpty(),
    validateInputs,
  ],
  postUser
);
router.put('/:id',
  [
    check('name', 'name is required').not().isEmpty(),
    check('url_image', 'url_image is required').not().isEmpty(),
    check('role', 'role is required').not().isEmpty(),
    check('status', 'status is required').not().isEmpty(),
    check('social_profile', 'social_profile is required').not().isEmpty(),
    check('promote', 'promote is required').not().isEmpty(),
    check('rating', 'rating is required').not().isEmpty(),
    check('last_login', 'last_login is required').not().isEmpty(),
    validateInputs,
  ],
  putUser
);
router.delete('/:id', deleteUser);



module.exports = router;