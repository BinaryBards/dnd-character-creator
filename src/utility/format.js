export const formatCharacterData = (data) => {
  const {
    race = null,
    name = null,
    alignment = null,
    level,
    background,
  } = data;

  const characterData = {
    race,
    name,
    alignment,
    class: data?.class || null, // Could not destructure class as a variable because it is a reserved word.
    level,
    background,
  };

  const formattedCharacterData = Object.keys(characterData).reduce(
    (data, currentKey) => {
      const value = characterData[currentKey];

      if (value !== undefined) {
        return { ...data, [currentKey]: value };
      }

      return data;
    },
    {}
  );

  return formattedCharacterData;
};
