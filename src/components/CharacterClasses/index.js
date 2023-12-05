import {
  CharacterClassContainer,
  CharacterClassItemWrapper,
  CharacterClassItem,
} from "./CharacterClassElement";

export const CharacterClasses = ({ types }) => {
  return (
    <CharacterClassContainer>
      {types.map(({ id, name, characters, description }) => (
        <>
          <CharacterClassItemWrapper>
            <CharacterClassItem>{name}</CharacterClassItem>
            <CharacterClassItem>{characters}</CharacterClassItem>
          </CharacterClassItemWrapper>
          <div>{description}</div>
        </>
      ))}
    </CharacterClassContainer>
  );
};
