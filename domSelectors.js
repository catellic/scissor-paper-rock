export function getEl(el) {
  return document.querySelector(el);
}

export function getElArray(el) {
  return document.querySelectorAll(el);
}

export const sel = {
  headerSel: () => getEl(`.header`),
  startButtonSel: () => getEl(`.start-button`),
  landingSel: () => getEl(`.landing`),
  instructionSel: () => getEl(`.instruction`),
  gameSel: () => getEl(`.game`),
  endSel: () => getEl(`.end`),
  playerSel: () => getEl(`.player-score`),
  computerSel: () => getEl(`.computer-score`),
  choiceButtonSel: () => getEl(`.choice`),
  choiceButtonsSel: () => getElArray(`.choice`),
  winnerSel: () => getEl(`.winner`),
  roundSel: () => getEl(`.round-winner`),
  playAgainSel: () => getEl(`.play-again`),
};
