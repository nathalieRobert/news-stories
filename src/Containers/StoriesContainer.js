import React, { useEffect, useState} from 'react';
import {getStoryIds, getStory} from '../Services/hnApi';
import {Story} from '../components/Story';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
        getStory(21712883).then(data => console.log(data));;
    }, [])

    return (
    storyIds.map(storyId => (
        <Story storyId={storyId}/>
    ))
    )
}