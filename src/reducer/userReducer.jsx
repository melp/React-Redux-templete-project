
const listInitState = {
    isFetching: false,
    data: []
};

const User = (state = listInitState, action) => {

    switch (action.type) {
        case 'index/BEGIN_FETCHING_INDEX':
            return { ...state, isFetching:true };

        case 'index/DONE_FETCHING_INDEX':
            let data = '';
            if(action.page == 1){
                data = action.data;  /* tab切换的时候page会重置为1，则之前的data中的数据清除掉*/
            }else {
                data = [...state.data, ...action.data];
            }

            return { data: data, isFetching: false };

        case 'index/FAIL_FETCHING_INDEX':
            return { ...state, isFetching:false };

        default:
            return state;
    }

};

export default User