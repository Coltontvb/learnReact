import React from "react";

export default function Footer() {
    let copyrightDate = new Date().getFullYear();
    return (
        <footer><p>Copyright {copyrightDate}</p></footer>
    );
};