/**
 * @desc Set winning prize to object
 * @param { { date:string,endpoint:string,prizes:[ { amount,id,name,reward,number:[string]}],runningNumbers: [{ amount,id,name,reward,number:[string]}] }} result
 * @param {string} value
 * @return { { key:{ amount,id,name,number,reward} } }
 */
function setWinningPrize(result, value) {
  return (result?.prizes || [])
    .filter((v) => (v.number || []).filter((e) => e === value).length > 0)
    .reduce((acc, v) => {
      return { ...acc, [v.id]: v };
    }, {});
}

function setResultEqual(result,field, value) {
  return (result?.[field] || [])
    .filter((v) => v.id === value)
    .reduce((acc, v) => {
      return {...acc, [v.id]: v };
    }, {});
}
function setResultNotEqual(result,field, value) {
  return (result?.[field] || [])
  .filter((v) => v.id !== value)
  .reduce((acc, v) => {
    return {...acc, [v.id]: v };
  }, {});
}
export { setWinningPrize,setResultEqual,setResultNotEqual };
