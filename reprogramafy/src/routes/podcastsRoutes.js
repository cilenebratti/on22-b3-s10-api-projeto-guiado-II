const podcastsController = require("../controllers/podcastsController")

const express = require("express")

const router = express.Router()



// router.metodo http (rota, função)

router.get("/library", podcastsController.getAllPodcasts)

router.get("/library/topic", podcastsController.getTopics);

router.post("/add", podcastsController.addPods);

router.patch("/update/:id", podcastsController.updatePods);

router.delete("/delete/:id", podcastsController.deletePods);


module.exports = router 