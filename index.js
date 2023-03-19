// code your solution here

function saturdayFun(str = 'roller-skate',){
    return `This Saturday, I want to ${str}!`;
}

function mondayWork(str = "go to the office"){
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(str = "*"){
  return function(name="special"){
    return `You are ${str}${name}${str}!`
  }
}