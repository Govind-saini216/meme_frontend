import express from "express";
import { VideoUploade ,getVideos ,deleteVideo } from "../Controllers/AdminController.js";
import upload from "../Middlewear/upload.js";

const router = express.Router();

/* TEST API */
router.post("/upload", upload.single("video"), VideoUploade);
router.get("/videos", getVideos);
router.delete("/videos/:id", deleteVideo);



export default router;
