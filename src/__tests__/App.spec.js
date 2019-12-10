import React from 'react';
import {act} from 'react-dom/test-utils';
import {App} from '../App';
import {render, cleanup, waitForElement} from '@testing-library/react';
import {storyIds, singularStory} from '../fixtures/index';
import {getStory, getStoryIds} from '../Services/hnApi';
import {useInfinitScroll} from '../Hooks/useInfinitScroll';
import {STORY_INCREMENT} from '../Constants/index';

beforeEach(cleanup);

test('renders the application', async() =>{
    useInfinitScroll.mockImplementation(()=>({
        count: STORY_INCREMENT,

    }))
    getStory.mockImplementation(()=> Promise.resolve(singularStory));
    getStoryIds.mockImplementation(()=> Promise.resolve(storyIds));

    await act(async () => {
    const { getByText, queryByTestId} = render(<App/>);
    await waitForElement(()=>[
        expect(getByTest('Hacker News Stories')).toBeTruthy(),
        expect(getByTest('Tarnished: Google Responds')).toBeTruthy(),
        expect(getByTest('story-by').textContent).toEqual(
            'By: karl Hadwen'
        ),
    ]);
  });
});