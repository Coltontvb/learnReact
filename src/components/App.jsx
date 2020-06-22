import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Notebox from "./Notebox";
import notesDB from "../noteDB";
import "../main.css"
import { createNote } from "./Note";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Notebox />        
            <Footer />
        </div>   
    );
};

let descriptions = notesDB.filter(() => {
    return notesDB.id < 100
});

console.log(descriptions)