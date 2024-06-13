const express = require('express');
const si = require('systeminformation');
const app = express();
require('dotenv').config();
const port = 3000;

const bytesToGB = (bytes) => {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2);
};

app.get(['/', '/:api_key'], async (req, res) => {
    try {
        const baseUrl = req.protocol + '://' + req.get('host') + '/';
        const api_key = req.params.api_key;
        if (!api_key || !process.env.API_KEY || api_key !== process.env.API_KEY) {
            return res.status(401).json({ error: 'Unauthorized', messge: `Use the preset API_KEY in the environment variables after the URL ${baseUrl}<API_KEY>. ` });
        }

        const mem = await si.mem();
        const temp = await si.cpuTemperature();
        const disk = await si.fsSize();

        res.json({
            cpu: {
                temperature: temp,
            },
            memory: {
                total: bytesToGB(mem.total),
                used: bytesToGB(mem.used),
                free: bytesToGB(mem.free),
                available: bytesToGB(mem.available),
            },
            disk: disk.map(d => ({
                filesystem: d.fs,
                size: bytesToGB(d.size),
                used: bytesToGB(d.used),
                available: bytesToGB(d.size - d.used),
            })),
        });
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

app.listen(port, () => {
    console.log(`Server is running`);
});
