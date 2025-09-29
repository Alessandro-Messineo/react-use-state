import languages from "./languages";
import { useState } from "react";

export default function Main() {
    const [open, setOpen] = useState(false);

    return (
  
            <div className="container">
                {languages.map(language => (
                    <div key={language.id}>
                        <button
                            className="btn"
                            onClick={() =>
                                setOpen(currentId =>
                                     currentId === language.id ? null : language.id
                                )
                            }
                        >
                            {language.title}
                        </button>
                        {open === language.id &&
                            <div className="description">{language.description}</div>
                        }
                    </div>
                ))}
            </div>
   
    );
}
