import aiService from '../services/ai.service.js'


export default async function getReview(req, res) {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(code);
        res.status(200).send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
}
