const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                // todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            // return state.map(t => 
            //     todo(t, action))
        break;
        default:
            return state
    }
}
export default todos;