import { useState } from "react";
import styled from "@emotion/styled";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLanguageContext } from "utils/context";
import { LANGUAGES } from "utils/constants";

const DropdownContainer = styled.div`
  display: inline-block;
  margin-top: 1.5rem;
`;

const DropdownToggle = styled.div`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

type DropdownContentProps = {
  isOpen?: boolean;
};

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  display: flex;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  z-index: 1;
`;

const FlagIcon = styled.span`
  width: 30px;
  height: 20px;
  margin-right: 10px;
  border-radius: 3px;
`;

const TranslationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const updateLanguage = (language: LANGUAGES) => {
    setLanguage(language);
    toggleDropdown();
  };

  interface IFlagClass {
    className: string;
    title: string;
  }

  const flagClassName: Record<LANGUAGES, IFlagClass> = {
    [LANGUAGES.EN]: {
      title: "English",
      className: "fi fi-gb",
    },
    [LANGUAGES.FR]: {
      title: "Francais",
      className: "fi fi-fr",
    },
    [LANGUAGES.PO]: {
      title: "Portuguese",
      className: "fi fi-pt",
    },
  };

  return (
    <DropdownContainer>
      <DropdownToggle onClick={toggleDropdown}>
        <FlagIcon className={flagClassName[language].className}></FlagIcon>
        <div>{flagClassName[language].title}</div>
      </DropdownToggle>
      {isOpen && (
        <DropdownContent isOpen={isOpen}>
          {language !== LANGUAGES.EN && (
            <DropdownToggle onClick={() => updateLanguage(LANGUAGES.EN)}>
              <FlagIcon className="fi fi-gb"></FlagIcon>
              <div>{flagClassName[LANGUAGES.EN].title}</div>
            </DropdownToggle>
          )}
          {language !== LANGUAGES.FR && (
            <DropdownToggle onClick={() => updateLanguage(LANGUAGES.FR)}>
              <FlagIcon className="fi fi-fr"></FlagIcon>
              <div>{flagClassName[LANGUAGES.FR].title}</div>
            </DropdownToggle>
          )}
          {language !== LANGUAGES.PO && (
            <DropdownToggle onClick={() => updateLanguage(LANGUAGES.PO)}>
              <FlagIcon className="fi fi-pt"></FlagIcon>
              <div>{flagClassName[LANGUAGES.PO].title}</div>
            </DropdownToggle>
          )}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default TranslationDropdown;
