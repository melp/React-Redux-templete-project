
let indexActions = {
	clickMe:function(event){
		return function(dispatch, getState)
		{
			console.log(`state: ${getState().Main.count}`);

			fetch('https://cnodejs.org/api/v1/topics', {
            method: 'POST',
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: `xxxxxxxx`
        	})
        	.then(response => response.json())
        	.then(json => {
        		console.log(json);
        		dispatch(indexActions.beginClick());
        	});
		}
	},

	beginClick:()=>({
		type:'index/BEGIN_FETCHING_INDEX'
	}),
}


export default indexActions;