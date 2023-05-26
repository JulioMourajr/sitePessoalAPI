const express = require('express');

const portifolioControler = require('../controlers/portifolioControler');

const router = express.Router();

router.get('/', portifolioControler.getPortifolio);

router.get('/:id', portifolioControler.getPortifolioById);

router.post('/', portifolioControler.createPortifolio);

router.put('/:id', portifolioControler.updatePortifolio);

router.delete('/:id', portifolioControler.deletePortifolio);

module.exports = router;