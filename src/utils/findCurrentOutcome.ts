const findCurrentOutcome = (boardInstance: number[]) => {
  const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winningUser = 0;
  winningOptions.forEach((option) => {

    if (winningUser === 0) {
      if (
        boardInstance[option[0]] !== 0 &&
        boardInstance[option[0]] === boardInstance[option[1]] &&
        boardInstance[option[0]] === boardInstance[option[2]]
      ) {
        winningUser = boardInstance[option[1]];
      }
    }
  });

  if (winningUser === 0) {
    const isEmptyPosition = boardInstance.find(
      boardSymbol => boardSymbol === 0
    );
    if (isEmptyPosition === undefined) {
      winningUser = -1;
    }
  }

  return winningUser;
}

export default findCurrentOutcome;
