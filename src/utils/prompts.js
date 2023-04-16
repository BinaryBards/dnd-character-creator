import { isEmpty } from "lodash";

// Character generator Prompt for openAi chat completion
export const getCharacterPrompt = (characterData) => {
  let characterDataPrompt = "";
  let returnedFields = [];

  if (!isEmpty(characterData)) {
    const characterJson = JSON.stringify(characterData);
    characterDataPrompt = `based on this object ${characterJson}, for any missing fields randomly generate values`;

    returnedFields = JSON.stringify(Object.keys(characterData));
  }

  const promptTemplate = `Generate a dungeons and dragons 5e character sheet ${characterDataPrompt} and return the result in JSON format. Include only these fields in the returned JSON: ${returnedFields}) .`;

  return promptTemplate;
};
