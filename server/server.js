import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import emojipedia from "../src/Components/emojipedia.json" with { type: "json" };

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//  Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
    syncEmojis(); // Auto-sync new emojis on startup
}).catch(err => console.error("MongoDB Connection Failed", err));

//  Emoji Schema & Model
const emojiSchema = new mongoose.Schema({
    id: Number,
    emoji: String,
    name: String,
    category: String,
    meaning: String
});
const Emoji = mongoose.model("Emoji", emojiSchema);

//  Function to Sync Emojis
const syncEmojis = async () => {
    try {
        for (let emoji of emojipedia) {
            await Emoji.findOneAndUpdate(
                { id: emoji.id }, // Find emoji by unique ID
                { $set: emoji }, // Update data if changed
                { upsert: true, new: true } // Insert if not exists
            );
        }
        console.log("Emoji database synced!");
    } catch (error) {
        console.error("Error syncing emojis:", error);
    }
};

//  API Route to Fetch Emojis
app.get("/api/emojis", async (req, res) => {
    try {
        const emojis = await Emoji.find({});
        res.json(emojis);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

//  Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
