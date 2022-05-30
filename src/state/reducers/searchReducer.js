const initilState = { 
    videoLink: '',
    videoData: {},
}

export const searchReducer = (state = initilState, action) => {
    switch(action.type) {
        case 'SET_VIDEO_LINK':
            return {
                ...state,
                videoLink: action.payload,
            }
        case 'SET_VIDEO_DATA':
            return {
                ...state,
                videoData: action.payload,
            }
        default:
            return state;
    }
}