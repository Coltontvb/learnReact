import React from "react";
import createNote from "./Note";
import noteDB from "../noteDB";


//Display each note mapped from the noteDB, using the NoteSchema defined in ./Note
export default function Notebox() {
    return (
        //Repeated for testing
        <div className="notebox">
            {noteDB.map(createNote)}
        </div>
    );
};