const initState={
    data : [
        { character: 'LOSS AVERSION', value: 0 },
        { character: 'REGRET AVOIDANCE', value: 0 },
        { character: 'MENTAL ACCOUNTING', value: 0 },
        { character: 'OVER CONFIDENCE', value: 0 },
        { character: 'ANCHORING', value: 0 },
        {character:'HERDING', value: 0},
      ],
      risk : [
        { character: 'RiskSeeker', value: 0 },
        { character: 'RiskAverse', value: 0},
        
      ],
      ocean : [
        {
        state: 'OPENNES',
        positive:0,
        negative:0
        
      }, {
        state: 'CONSCIENTIOUSNESS',
        positive:0,
        negative:0
      }, {
        state: 'EXTRAVERSION',
        positive:0,
        negative:0
      }, {
        state: 'AGREEABLENESS',
        positive:0,
        negative:0
      },
      {
        state: 'NEUROTICISM',
        positive:0,
        negative:0
      }]
}

const rootReducer= (state=initState,action) =>{
    if(action.type ==='ALTER_DATA'){
       let newData= state.data.slice();
       newData.map(item=>{
           if(item.character=== action.character)
                item.value= action.value;
       })
       state.data=newData

}
    if(action.type ==='ALTER_OCEAN'){
       state.ocean= action.oceanVal
    }
    if(action.type==='ADD_RISK'){
        state.risk = action.risk
    }

    return state;
}

export default rootReducer;