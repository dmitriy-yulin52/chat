export default (state, action) => {

    switch (action.type) {
        case 'JOINED':
            return {
                ...state,
                joined: true,
                roomId: action.payload.roomId,
                userName: action.payload.userName,
            };
        default:
            return state;
    }


}