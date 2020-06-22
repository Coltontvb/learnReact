import React from "react";

//Create the note HTML Schema
export default function Note(props) {
    return (
        <div className="note">
            <h1 className="title">{props.title}</h1>
            <hr />
            <p>Note: {props.id + 1}</p>
            <p className="content">{props.content}</p>
        </div>
    );
};

//Create a new Note Component for mapping purposes
function createNote(note) {
    return (
    <Note 
        key={note.id}
        title={note.title}
        content={note.content}
    />
    );
};


export {createNote, Note}

