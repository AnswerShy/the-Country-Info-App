import express from 'express'

import getAvailableCountries from "../controllers/getAvailableCountries.js"
import getCounrtyInfo from "../controllers/getCountryInfo.js"

const router = express.Router();
router.get("/getCountryInfo", getCounrtyInfo) 
router.get("/getAvailableCountries", getAvailableCountries)

export default router