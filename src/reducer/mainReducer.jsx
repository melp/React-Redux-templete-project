
const listInitState = {
    isFetching: false,
    showText:"",
    count:0
};

const Main = (state = listInitState, action) => {

    switch (action.type) {
        case 'index/BEGIN_FETCHING_INDEX':
            {
                console.log("action");
                return { ...state, showText:"Hello Me",count:state.count+1 };
            }
            break;

        default:
            return state;
    }

};

export default Main