import express from 'express'
import {cuarto, primero, quinto, segundo, sexto, tercero } from '../controllers/controllers.js'

const router = express.Router();
router.get('/1', primero)
router.get('/2', segundo)
router.get('/3', tercero)
router.get('/4', cuarto)
router.get('/5', quinto)
router.get('/6', sexto)

export default router;
