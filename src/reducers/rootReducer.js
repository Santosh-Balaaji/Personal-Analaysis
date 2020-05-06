const initState={
    data : [
        { character: 'LOSS AVERSION', value: 5 },
        { character: 'REGRET AVOIDANCE', value: 10 },
        { character: 'MENTAL ACCOUNTING', value: 20 },
        { character: 'OVER CONFIDENCE', value: 15 },
        { character: 'ANCHORING', value: 25 },
        {character:'HERDING', value: 10},
      ],
      ocean : [
        {
        state: 'OPENNES',
        positive:10,
        negative:25
        
      }, {
        state: 'CONSCIENTIOUSNESS',
        positive:5,
        negative:15
      }, {
        state: 'EXTRAVERSION',
        positive:25,
        negative:5
      }, {
        state: 'AGREEABLENESS',
        positive:15,
        negative:10
      },
      {
        state: 'NEUROTICISM',
        positive:10,
        negative:5
      }]
}



const rootReducer= (state=initState,action) =>{
    if(action.type ==='ALTER_DATA'){
      /* return Object.assign({},state,{
        data:state.data.map(item=>{
            return item.character === action.character? {character:action.character,value:action.value} : item;
        })
       });*/
       let newData= state.data.slice();
       newData.map(item=>{
           if(item.character=== action.character)
                item.value= action.value;
       })
       state.data=newData

}
    if(action.type ==='ALTER_OCEAN'){
       
        });
    }

    return state;
}

export default rootReducer;