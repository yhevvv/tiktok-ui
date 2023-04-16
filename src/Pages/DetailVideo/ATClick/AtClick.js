import Tippy from '@tippyjs/react';
import Attag from '~/assets/images/Logo/AtTag.svg';
import { useState, useRef } from 'react';

function AtClick({ inputRef }) {
    //At click
    const RefAT = useRef(null);
    const [isActive, setIsActive] = useState(true);
    const handleAt = () => {
        //focus on span
        setIsActive(!isActive);
        inputRef.current.focus();

        const range = document.createRange();
        const sel = window.getSelection();

        // Check if the span element is empty
        if (inputRef.current.textContent === '') {
            // Create a new text node and insert it at the beginning of the span element
            const textNode = document.createTextNode('');
            inputRef.current.appendChild(textNode);

            // Set the range to the beginning of the text node
            range.setStart(textNode, 0);
            range.collapse(true);
        } else {
            // Set the range to the end of the span element's text content
            range.setStart(
                inputRef.current.childNodes[0],
                inputRef.current.textContent.length,
            );
            range.collapse(true);
        }

        sel.removeAllRanges();
        sel.addRange(range);

        // get a reference to the contentEditable span
        const inputCaption = RefAT.current;

        // execute the "insertHTML" command to insert the "#" character at the current cursor position
        document.execCommand('insertHTML', false, '@');

        // set the focus back to the contentEditable span
        inputCaption.focus();
    };

    return (
        <div>
            <Tippy content={'@ a user to tag them in your comments'}>
                <div onClick={handleAt}>
                    <img
                        src={Attag}
                        alt=""
                        style={{
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                            marginRight: '10px',
                            marginTop: '-2px',
                        }}
                    ></img>
                </div>
            </Tippy>
        </div>
    );
}

export default AtClick;
