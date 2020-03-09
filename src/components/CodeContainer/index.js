import React from 'react'
import { Container } from './styles';

export default function CodeContainer({content}) {
    const keys = Object.keys(content)
    console.log({content, keys})
    return (
        <Container>
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
