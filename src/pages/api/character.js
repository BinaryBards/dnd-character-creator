import { Configuration, OpenAIApi } from "openai";
import { isEmpty } from "lodash";

import { getCharacterPrompt } from "@/utils/prompts";
import { formatCharacterData } from "@/utils/format";

/*
 * backstory prompt for later:
 * backstory (based on personality traits, ideals, bonds and flaws, give 4 major chronological events that occured in their life that shaped them as a person).
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const METHODS = {
  post: "POST",
};

export default async function handler(req, res) {
  if (req.method === METHODS.post) {
    if (isEmpty(req.body)) {
      res.status(400).json({
        message: "Request body is empty, at least one field is required.",
      });
    }

    const formattedCharacterData = formatCharacterData(req.body);
    const prompt = getCharacterPrompt(formattedCharacterData);

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    let response;

    try {
      response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });
    } catch (err) {}

    const character = response?.data?.choices?.[0]?.message?.content;

    if (character) {
      res.status(200).json({ character });
    } else {
      res.status(500).json({ messsage: "Unable to generate character." });
    }
  } else {
    res.status(404).json({});
  }
}
