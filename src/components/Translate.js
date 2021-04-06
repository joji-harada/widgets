import React, { useRef, useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

//due to translate api being a paid for service 
//this component will only run on localhost:3000

const options = [
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Armenian',
        value: 'hy'
    },
    {
        label: 'Hawaiian',
        value: 'haw'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Italian',
        value: 'it'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Korean',
        value: 'ko'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text to Translate</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown 
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert 
                text={text}
                language={language}
            />
        </div>
    )
};

export default Translate;