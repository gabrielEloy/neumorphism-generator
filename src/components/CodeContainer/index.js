import React, { useState } from 'react'
import { Container } from './styles';

export default function CodeContainer({content, darkMode}) {
    const [copyText, setCopy] = useState('copy');
    
    const keys = Object.keys(content)
    function getContainerCode() {
        let text = '';
        for(let i in content){
            text += `${i}: ${content[i]}; \n`;
        }
        navigator.clipboard.writeText(text).then(() => {
            setCopy('copied');
            setTimeout(() => setCopy('copy'), 1000);
        });
    }
    return (
        <Container darkMode={darkMode}>
            <button onClick={getContainerCode} className="copy-button">
                {copyText}
            </button>
            {keys.map(key => (
                <div className="property-container" key={key}>
                    <span className="property-name">
                        {key}:
                    </span>
                    <span className="property-content">
                        {content[key]};
                    </span>
                </div>
            ))}
        </Container>
    )
}
