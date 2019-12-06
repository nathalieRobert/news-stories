import React, { useState, useEffect } from 'react';
import { getStory } from '../Services/hnApi';

import {StoryWrapper, StoryTitle, StoryMeta, StoryElement} from '../Styles/StoryStyle';

export const Story = ({storyId}) => {

    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>
                    {story.title}
                </a>
            </StoryTitle>

            <StoryMeta>
                <span data-testid='story-by'>
                    <StoryElement color="#000">By: </StoryElement>{story.by}
                </span>
                <span data-testid='story-time'>
                    <StoryElement color="#000">Posted: </StoryElement>
                    {story.time}
                </span>
            </StoryMeta>
        </StoryWrapper>

    ) : null;
}
