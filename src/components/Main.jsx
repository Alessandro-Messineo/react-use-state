import languages from "./languages";
import { useState } from "react";
import Buttons from "./Buttons";

export default function Main() {
    const [open, setOpen] = useState(null);

    return (
        <div className="container">
            {languages.map(language => (
                <Buttons
                    key={language.id}
                    onClick={() => setOpen(open?.id === language.id ? null : language)}
                    title={language.title}
                />


            ))}

            {open && (
                <div className="description">
                    <h2>{open.title}</h2>
                    <p>{open.description}</p>
                </div>
            )}
        </div>
    );
}
