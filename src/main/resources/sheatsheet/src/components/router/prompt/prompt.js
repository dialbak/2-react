import React from 'react';
import {Prompt } from "react-router-dom";

function PrompComp(props) {
    return (
        <div>
            <h2>Essayer de quitter cette vue
                <Prompt
                    when={true}
                    message="Etes-vous certain de quitter le composant 1 ?" />
            </h2>
        </div>
    );
}

export default PrompComp;
