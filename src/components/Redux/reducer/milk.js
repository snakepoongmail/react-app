const initState = {
    milk: 0
}

const milkReducer = (state = initState, action) => {
    switch(action.type){
        case 'add':
            return { ...state, milk: state.milk + 1}
        case 'minus':
            return {...state, milk: state.milk -1 }
        default:
            return state;
    }
}

export const mapStateToProps = (state)=>{
    return {
        milk: state.milk.milk
    };
};

export const mapDispatchToProps = (dispatch)=>{
    return {
        add:()=>{
            dispatch({type:'add'});
        },
        minus: ()=>{
            dispatch({type:'minus'});
        }
    };
};

export default milkReducer;