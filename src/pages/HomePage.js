import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
    const [language, set_language] = useState("English");

    const handleChange = (event) => {
        set_language(event.target.value);
    };

    const translations = [
        {
            language: "Dutch",
            welcome: "Wij gaan trouwen! nog een excuus om te zuipen",
        },
        {
            language: "English",
            welcome: "We are getting married!",
        },
        {
            language: "Hungarian",
            welcome: "Összeházasodunk! Még egy ok a berúgásra! Ünneplésre fel!",
        },
    ];

    const infoByLanguage = translations.find((item) => {
        if (item.language === language) {
            return true;
        } else {
            return false;
        }
    });

    const { about, see, welcome, lang } = infoByLanguage;

    return (
        <div className="Home col-sm-10 mx-auto">
            <h1 className="Title">{welcome}</h1>


            <div className="select-group col-sm-2 mx-auto">
                <select
                    name="language"
                    className="form-control bg-dark text-light mt-3"
                    onChange={handleChange}
                >
                    <option default value="English">
                        English
            </option>
                    <option value="Dutch">Dutch</option>
                    <option value="Hungarian">Hungarian</option>
                </select>
            </div>
        </div>

    );
}
