const express = require('express');
const router = express.Router();

const upload = require('../config/multer');

const {
    listSites, 
    createSite,
    siteDetail
} = require('../controllers/sites');

router.get('/', listSites);
router.post('/create', upload.single('imagen'), createSite);
router.get('/:id' , siteDetail);


module.exports = router;
