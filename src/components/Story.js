import React, { useState, useEffect } from 'react';

export const Story = ({storyId}) => {

    const [story, setStory] = useState({})
    useEffect(() => {
       
       
    }, []);

    return <p>I am a story! {storyId}</p>
}
