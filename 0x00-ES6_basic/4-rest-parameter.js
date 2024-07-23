/* eslint-disable no-unused-vars */
export default function returnHowManyArguments(...params) {
    let numOfParams = 0;
    for (const _param of params) numOfParams += 1;
    return numOfParams;
  //   return params.length;
  }
