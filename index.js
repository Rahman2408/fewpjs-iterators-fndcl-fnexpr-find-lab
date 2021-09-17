 function superbowlWin(arry) {
  let winner = arry.find( win => win.result === 'W')
  return !!winner ? winner.year : undefined 
}
