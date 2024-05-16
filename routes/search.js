/**
 * Ruta: /api/search/:value
 */

const { Router } = require('express');

const { getSearch } = require('../controllers/search.controller');

const router = Router();

router.get('/:value', getSearch);



module.exports = router;