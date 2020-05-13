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
        state: 'OPEN',
        positive:0,
        negative:0
        
      }, {
        state: 'CONSCIEN',
        positive:0,
        negative:0
      }, {
        state: 'EXTRA',
        positive:0,
        negative:0
      }, {
        state: 'AGREE',
        positive:0,
        negative:0
      },
      {
        state: 'NEURO',
        positive:0,
        negative:0
      }]
}

const rootReducer= (state=initState,action) =>{
    if(action.type ==='ALTER_DATA'){
       state.data=action.data

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