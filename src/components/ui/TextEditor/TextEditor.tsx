"use client"
import React, { useState, useRef } from 'react';
// import JoditEditor from 'jodit-react';

import dynamic from 'next/dynamic';

// This component will be rendered only on the client side
const JoditEditor = dynamic(() => import('jodit-react'), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable SSR for this component
});

const TextEditor = ({content,setContent}:{content:string,setContent:(text:string)=>void}) => {
	const editor = useRef(null);
	
	return (
		<JoditEditor
			ref={editor}
			value={content}
			onBlur={newContent => setContent(newContent)}
			onChange={newContent => {}}
		/>
	);
};

export default TextEditor;