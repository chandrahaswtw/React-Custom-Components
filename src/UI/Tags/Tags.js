import React, { useState } from 'react';
import classes from './Tags.module.scss';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tags = props => {

    const [tagInfo, setTagInfo] = useState({
        tags: [
            { id: "Thailand", text: "Thailand" },
            { id: "India", text: "India" }
        ],
        suggestions: [
            { id: 'USA', text: 'USA' },
            { id: 'Germany', text: 'Germany' },
            { id: 'Austria', text: 'Austria' },
            { id: 'Costa Rica', text: 'Costa Rica' },
            { id: 'Sri Lanka', text: 'Sri Lanka' },
            { id: 'Thailand', text: 'Thailand' }
        ]
    })

    const handleDelete = (i) => {
        const { tags } = tagInfo;
        setTagInfo((prevState) => {
            return {
                ...prevState,
                tags: tags.filter((tag, index) => index !== i),
            }
        })
    }

    const handleAddition = (tag) => {
        setTagInfo((prevState) => {
            return {
                ...prevState,
                tags: [...prevState.tags, tag],
            }
        })
    }

    return (
        <div className={classes.TagWrapper}>
            <ReactTags tags={tagInfo.tags}
                suggestions={tagInfo.suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                delimiters={delimiters}
                allowDragDrop={false}
                classNames={{
                    tags: 'tagsClass',  //WHOLE TAGS COMPONENT
                    tagInput: 'tagInputClass', //THE TEXT INPUT BOX - WHOLE
                    tagInputField: 'tagInputFieldClass', //TEXT INPUT ALONE
                    selected: 'selectedClass',
                    tag: "tagsClass", //INDIVIDUAL TAG
                    remove: "removeClass", //THE CROSS BUTTON
                    suggestions: "suggestionsClass", //THE DROPDOWN CLASS
                    activeSuggestion: "activeSuggestionClass"//SUGGESTION THATS ACTIVE
                }} />
        </div>
    )
}

export default Tags;