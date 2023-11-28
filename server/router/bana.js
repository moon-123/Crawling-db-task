import express from "express";
import * as banaController from '../controller/bana.js';

const router = express.Router();

// GET / tweets
// GET / tweets?username=:username
router.get('/', banaController.getBanas);

export default router;
 