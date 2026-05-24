import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

if (PORT === undefined) {
    console.error("PORT environment variable is not set.");
    process.exit(1);
}

const app = express();
app.set("trust proxy", 1);

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Request successful",
        ip: req.ip,
    });
});

app.all(/.*/, (req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
