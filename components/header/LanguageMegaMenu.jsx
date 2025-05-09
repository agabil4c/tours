import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const LanguageMegaMenu = ({ textClass }) => {
  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);
  const router = useRouter();

  const languageContent = [
    { id: 1, language: "English", country: "United States" },
    { id: 2, language: "Türkçe", country: "Turkey" },
    { id: 3, language: "Español", country: "España" },
    { id: 4, language: "Français", country: "France" },
    { id: 5, language: "Italiano", country: "Italia" },
    { id: 6, language: "Dari, Pashto", country: "Afghanistan" },
    { id: 7, language: "Albanian", country: "Albania" },
    { id: 8, language: "Arabic, Berber", country: "	Algeria" },
    { id: 9, language: "Catalan", country: "Andorra" },
    { id: 10, language: "Kongo, Portuguese	", country: "Angola" },
    { id: 11, language: "Spanish", country: "Argentina" },
    { id: 12, language: "Armenian", country: "Armenia" },
    { id: 13, language: "English", country: "Australia" },
    { id: 14, language: "German", country: "Austria" },
    { id: 15, language: "Azerbaijani", country: "Azerbaijan" },
    { id: 16, language: "Bengali", country: "Bangladesh" },
    { id: 17, language: "English", country: "Barbados" },
    { id: 18, language: "Belarusian", country: "Belarus" },
    { id: 19, language: "Dutch, French", country: "Belgium" },
    { id: 20, language: "English", country: "Belize" },
  ];

  const languages = [
    { id: 1, label: "English", code: "en", flag: "/img/flags/flag.png" },
    { id: 2, label: "Français", code: "fr", flag: "/img/flags/france.png" },
    { id: 3, label: "Deutsch", code: "de", flag: "/img/flags/german-flag.png" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  //const [selected, setSelected] = useState(languages[0]);
  const [selected, setSelected] = useState(
    languages.find((l) => l.code === router.locale) || languages[0]
  );
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (lang) => {
    console.log("Switching to:", lang.code);
    setSelected(lang);
    setIsOpen(false);
    router.push(router.pathname, router.asPath, { locale: lang.code });
  };

  const [selectedCurrency, setSelectedCurrency] = useState(languageContent[0]);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className={`d-flex items-center text-14 ${textClass}`}
        onClick={toggleDropdown}
      >
        <Image
          src={selected.flag}
          alt={selected.label}
          width={20}
          height={20}
          className="rounded-full mr-10"
        />
        {selected.label}
        <i className="icon-chevron-sm-down text-7 ml-10" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-40 rounded-md bg-white shadow-lg">
          <ul className="py-1 text-sm text-gray-700">
            {languages.map((lang) => (
              <li
                key={lang.id}
                onClick={() => handleSelect(lang)}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Image
                  src={lang.flag}
                  alt={lang.label}
                  width={18}
                  height={18}
                  className="rounded-full mr-4"
                />
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageMegaMenu;
