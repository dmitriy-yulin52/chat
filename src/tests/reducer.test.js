import React from 'react'
import reducer from '../reducer/reducer'

let startState = {};

beforeEach(() => {
    startState = {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: [],
    };
});


test('correct message should be added', () => {
    const action = {
        type: 'NEW_MESSAGE',
        payload: 'new message',
    }

    const endState = reducer(startState,action)

    expect(endState.messages[0]).toBe('new message')
    expect(endState.messages.length).toBe(1)

})