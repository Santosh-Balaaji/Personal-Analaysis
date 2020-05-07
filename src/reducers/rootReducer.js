const initState={
    data : [
        { character: 'LOSS AVERSION', value: 5 },
        { character: 'REGRET AVOIDANCE', value: 10 },
        { character: 'MENTAL ACCOUNTING', value: 20 },
        { character: 'OVER CONFIDENCE', value: 15 },
        { character: 'ANCHORING', value: 25 },
        {character:'HERDING', value: 10},
      ],
      risk : [
        { character: 'RiskSeeker', value: 25 },
        { character: 'RiskAverse', value: 30},
        
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