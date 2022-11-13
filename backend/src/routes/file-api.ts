import express from 'express';
import FileService from '../service/FileService.js';

export const router = express.Router();
const fs = FileService();

router.post("", async(req, res) => {
    try {
        const data = req.body;
        const drives = await fs.getDriveItems(data.path);

        res.json(drives);
    } catch (e) {
        console.log("Error: ", e);
        res.status(500).json(e);
    }
});