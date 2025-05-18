const express=require("express")
const router=express.Router()
const locationController=require("../controller/location")


router.get("/",locationController.getLocation)
router.get("/provinces",locationController.getProvince)
router.get("/province/:province/districts",locationController.getDistrict)
router.get("/province/:province/district/:district/sector",locationController.getSectors)
router.get("/province/:province/district/:district/sector/:sector/cells",locationController.getCells)
router.get("/province/:province/district/:district/sector/:sector/cell/:cell/villages",locationController.getVillages)

module.exports=router