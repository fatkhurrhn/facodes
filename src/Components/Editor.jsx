import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { RiCollapseDiagonalLine, RiExpandDiagonalLine } from '@remixicon/react'

const Editor = (props) => {

    const [open, setOpen] = useState(true);
    const {
        language,
        displayName,
        value,
        onChange
    } = props;

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className='editor-title'>
                {displayName}
                <button className="expand-btn" disabled>
                    {open ? <RiCollapseDiagonalLine /> : <RiExpandDiagonalLine />}
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor