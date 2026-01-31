import React from 'react';

export default function UserComment({ text }) {
    // HIGH: Vulnerable to Cross-Site Scripting (XSS)
    // Red Agent will detect 'dangerouslySetInnerHTML'
    return (
        <div className="comment-body">
            <div>{text}</div>
        </div>
    );
}