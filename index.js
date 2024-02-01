import templates5x5Data from './data/templates-5x5/templates-5x5.js';
import frameSizesData from './data/frame-levels.js';
// import frame5x5Data from './data/templates-5x5/heart/puzzle.js';
import topClues1Data from './data/templates-5x5/heart/top-clues-1.js';
import topClues2Data from './data/templates-5x5/heart/top-clues-2.js';
import leftClues2Data from './data/templates-5x5/heart/left-clues-2.js';
import leftClues1Data from './data/templates-5x5/heart/left-clues-1.js';

// import frame5x5Data from './data/templates-5x5/x/puzzle.js';
// import frame5x5Data from './data/templates-5x5/snowflake/puzzle.js';
// import frame5x5Data from './data/templates-5x5/house/puzzle.js';
import frame5x5Data from './data/templates-5x5/cat/puzzle.js';

// import frame5x5Data from './templates-5x5/x/puzzle.js';
// import topClues1Data from './templates-5x5/x/top-clues-1.js';
// import topClues2Data from './templates-5x5/x/top-clues-2.js';
// import leftClues2Data from './templates-5x5/x/left-clues-2.js';
// import leftClues1Data from './templates-5x5/x/left-clues-1.js';

document.body.setAttribute('class', 'page');

const pageContainer = document.createElement('div');
pageContainer.className = 'page__container';
document.body.append(pageContainer);

const pageContent = document.createElement('div');
pageContent.className = 'page__content';
pageContainer.append(pageContent);

const title = document.createElement('h1');
title.innerHTML = 'Welcome to Nonograms';
title.className = 'title';
pageContent.append(title);

// block Buttons Header

const blockButtonsHeader = document.createElement('div');
blockButtonsHeader.setAttribute('class', 'block-buttons');
pageContent.append(blockButtonsHeader);

const buttonLevels = document.createElement('button');
buttonLevels.className = 'btn block-button button-level';
buttonLevels.innerHTML = 'Levels';
blockButtonsHeader.append(buttonLevels);

const buttonResults = document.createElement('button');
buttonResults.className = 'btn block-button button-results';
buttonResults.innerHTML = 'Results';
blockButtonsHeader.append(buttonResults);

const buttonBackground = document.createElement('button');
buttonBackground.className = 'btn block-button button-background';
buttonBackground.innerHTML = 'Dark theme';
blockButtonsHeader.append(buttonBackground);

const buttonSound = document.createElement('button');
buttonSound.className = 'btn block-button button-sound';
buttonSound.innerHTML = 'Mute';
blockButtonsHeader.append(buttonSound);

const blockCounterTime = document.createElement('div');
blockCounterTime.setAttribute('class', 'counter-time');
blockButtonsHeader.append(blockCounterTime);

const timeTitle = document.createElement('h2');
timeTitle.setAttribute('class', 'time__title');
timeTitle.textContent = ('Time: ');
blockCounterTime.append(timeTitle);

const timeTimer = document.createElement('p');
timeTimer.setAttribute('class', 'time__timer');
timeTimer.textContent = ('00 : 00');
blockCounterTime.append(timeTimer);

// game Container   

const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';
pageContent.append(gameContainer);

// top Clues

const topClues = document.createElement('div');
topClues.className = 'top-clues';
gameContainer.append(topClues);

const topClues1 = document.createElement('div');
topClues1.className = 'top-clues-1';
topClues.append(topClues1);

function displayTopClues1() {
    topClues1Data.forEach((item, index) => {
        const topCells = document.createElement('div');
        topCells.className = 'top-clues__cells';
        topCells.innerHTML = item.number;
        topClues1.append(topCells);
    });
};
displayTopClues1();

const topClues2 = document.createElement('div');
topClues2.className = 'top-clues-2';
topClues.append(topClues2);

function displayTopClues2() {
    topClues2Data.forEach((item, index) => {
        const top2Cells = document.createElement('div');
        top2Cells.className = 'top-clues__cells';
        top2Cells.innerHTML = item.number;
        topClues2.append(top2Cells);
    });
};
displayTopClues2();

const block = document.createElement('div');
block.className = 'block';
gameContainer.append(block);

// left Clues

const leftClues = document.createElement('div');
leftClues.className = 'left-clues';
block.append(leftClues);

const leftClues1 = document.createElement('div');
leftClues1.className = 'left-clues-1';
leftClues.append(leftClues1);

function displayLeftClues1() {
    leftClues1Data.forEach((item, index) => {
        const leftRow1Cells = document.createElement('div');
        leftRow1Cells.className = 'left-clues__cells';
        leftRow1Cells.innerHTML = item.number;
        leftClues1.append(leftRow1Cells);
    });
};

displayLeftClues1();

const leftClues2 = document.createElement('div');
leftClues2.className = 'left-clues-2';
leftClues.append(leftClues2);

function displayLeftClues2() {
    leftClues2Data.forEach((item, index) => {
        const leftRow2Cells = document.createElement('div');
        leftRow2Cells.className = 'left-clues__cells';
        leftRow2Cells.innerHTML = item.number;
        leftClues2.append(leftRow2Cells);
    });
};

displayLeftClues2();

const gameContent = document.createElement('div');
gameContent.className = 'btn game-contant';
block.append(gameContent);

// display Frame 5x5

function displayFrame5x5() {
    frame5x5Data.forEach((item, index) => {    // or  for(let i = 0; i < frame5x5Data.length; i++) { }
        const gameCell = document.createElement('button');
        gameCell.className = 'btn game-cell';
        gameCell.innerHTML = item.name;
        gameCell.classList.add('_crossed-cell');
        gameContent.append(gameCell);
    });
};

displayFrame5x5();

const cells = gameContent.querySelectorAll('.game-cell');

// block Buttons Footer

const blockButtonsFooter = document.createElement('div');
blockButtonsFooter.setAttribute('class', 'block-buttons');
pageContent.append(blockButtonsFooter);

const buttonRandomGame = document.createElement('button');
buttonRandomGame.className = 'btn block-button button-random-game';
buttonRandomGame.innerHTML = 'Random game';
blockButtonsFooter.append(buttonRandomGame);

const buttonSaveGame = document.createElement('button');
buttonSaveGame.className = 'btn block-button button-save-game';
buttonSaveGame.innerHTML = 'Save game';
blockButtonsFooter.append(buttonSaveGame);

const buttonResetGame = document.createElement('button');
buttonResetGame.className = 'btn block-button button-reset-game';
buttonResetGame.setAttribute('type', 'button');
buttonResetGame.innerHTML = 'Reset game';
blockButtonsFooter.append(buttonResetGame);

const buttonSolution = document.createElement('button');
buttonSolution.className = 'btn block-button button-solution';
buttonSolution.setAttribute('type', 'button');
buttonSolution.innerHTML = 'Solution';
blockButtonsFooter.append(buttonSolution);

// counter

let time;
let seconds = 0;
let mySetInterval;
let myClearInterval;
let audio;
let volume = 0.1;

// popup Levels

// const popupLevel = document.createElement('div');
// popupLevel.className = 'popup-level';
// buttonLevel.append(popupLevel);

// const popupLevelContainer = document.createElement('div');
// popupLevelContainer.className = 'popup-level__container';
// popupLevel.append(popupLevelContainer);

// const popupLevelContent = document.createElement('div');
// popupLevelContent.className = 'popup-level__content';
// popupLevelContainer.append(popupLevelContent);

const popupLevelList = document.createElement('ul');
popupLevelList.className = 'popup-level__list';
buttonLevels.append(popupLevelList);

function displayLevels() {
    frameSizesData.forEach((item, index) => {
        const popupLevelListItem = document.createElement('li');
        popupLevelListItem.className = 'btn popup-level__list-item';
        popupLevelListItem.innerHTML = item.name;
        popupLevelList.append(popupLevelListItem);
    });
};
displayLevels();

const popupLevelListItems = popupLevelList.querySelectorAll('.popup-level__list-item');

// popup Levels Templates 5x5

const popupLevel5x5 = document.createElement('div');
popupLevel5x5.className = 'popup popup-level-5x5';
document.body.append(popupLevel5x5);

const popupContainerLevel5x5 = document.createElement('div');
popupContainerLevel5x5.className = 'popup__container-level-5x5';
popupLevel5x5.append(popupContainerLevel5x5);

const popupContentLevel5x5 = document.createElement('div');
popupContentLevel5x5.className = 'popup__content-level-5x5';
popupContainerLevel5x5.append(popupContentLevel5x5);

let subtitleLevel;
let level;
let solutionName;

templates5x5Data.forEach((item, index) => {

    const listItem5x5 = document.createElement('div');
    listItem5x5.className = 'popup-level__list-item-5x5';
    popupContentLevel5x5.append(listItem5x5);

    const listItem5x5Image = document.createElement('img');
    listItem5x5Image.className = 'popup-level__list-item-5x5-image';
    listItem5x5Image.src = item.image;
    listItem5x5Image.alt = item.name;
    listItem5x5Image.width = 200;
    listItem5x5.append(listItem5x5Image);

    const listItem5x5Name = document.createElement('p');
    listItem5x5Name.className = 'popup-level__list-item-5x5-name';
    listItem5x5Name.innerHTML = item.name;
    listItem5x5.append(listItem5x5Name);

    listItem5x5.addEventListener('click', () => {
        popupLevel5x5.classList.remove('_active');
        document.body.classList.remove('_lock');
        subtitleLevel.innerHTML = '5x5';
        if (item.name === 'heart') {
            solutionName = item.name;
        }
        if (item.name === 'X') {
            solutionName = item.name;
        }
    });
});

// popup Table Results

const popupTableResults = document.createElement('div');
popupTableResults.setAttribute('class', 'popup popup-table-results');
document.body.append(popupTableResults);

const popupTableResultsContainer = document.createElement('div');
popupTableResultsContainer.setAttribute('class', 'popup-table-results__container');
popupTableResults.append(popupTableResultsContainer);

const popupTableResultsTitle = document.createElement('h2');
popupTableResultsTitle.setAttribute('class', 'popup-table-results__title');
popupTableResultsTitle.textContent = (`Score Table`);
popupTableResultsContainer.append(popupTableResultsTitle);

const popupTableResultsBlock = document.createElement('table');
popupTableResultsBlock.setAttribute('class', 'popup-table-results__block');
popupTableResultsContainer.append(popupTableResultsBlock);

const popupTableResultsTR = document.createElement('tr');
popupTableResultsTR.className = 'table-results__tr';
popupTableResultsBlock.append(popupTableResultsTR);

const popupTableResultsTH1 = document.createElement('th');
popupTableResultsTH1.className = 'table__title table-results__th-title';
popupTableResultsTH1.innerHTML = 'Level';
popupTableResultsTR.append(popupTableResultsTH1);

const popupTableResultsTHTitle = document.createElement('th');
popupTableResultsTHTitle.className = 'table__title table-results__th-title';
popupTableResultsTHTitle.innerHTML = 'Solution';
popupTableResultsTR.append(popupTableResultsTHTitle);

const popupTableResultsTH3 = document.createElement('th');
popupTableResultsTH3.className = 'table__title table-results__th-title';
popupTableResultsTH3.innerHTML = 'Time';
popupTableResultsTR.append(popupTableResultsTH3);

function addTableRow() {
    const elementsRow = popupTableResultsTR.querySelectorAll('tr');
    let newRow = document.createElement('tr');
    newRow.classList.add('row-result');
    // newRow.textContent = elementsRow.length + 1;
    // newRow = [];
    // if (elementsRow.length < 2) {
    popupTableResultsBlock.append(newRow);
    // newRow.unshift();

    subtitleLevel = document.createElement('td');
    subtitleLevel.classList.add('table__subtitle');
    // subtitleLevel.textContent = '5x5';
    newRow.append(subtitleLevel);

    const subtitleSolution = document.createElement('td');
    subtitleSolution.classList.add('table__subtitle');
    subtitleSolution.textContent = solutionName;
    newRow.append(subtitleSolution);

    const subtitleTime = document.createElement('td');
    subtitleTime.classList.add('table__subtitle');
    subtitleTime.textContent = time;
    newRow.append(subtitleTime);
}

addTableRow();

{/* <table class="table-results">
<tr>
    <th class="table__title title-player">Player</th>
    <th class="table__title title-clicks">Clicks</th>
</tr>
<!-- <tr class="row-result">
    <td class="table__subtitle subtitle-player"></td>
    <td class="table__subtitle subtitle-clicks"></td>
</tr> -->
<!-- <tr class="row-result">
    <td class="table__subtitle subtitle-player"></td>
    <td class="table__subtitle subtitle-clicks"></td>
</tr> -->
</table> */}

// const PopUpNum = document.createElement('div');
// PopUpNum.setAttribute('class', 'pop-up__num');
// PopUpNum.textContent = (``);
// PopUpScoresBlock.append(PopUpNum);

// for (let i = 1; i < 11; i++) {
//     const PopUpNum1 = document.createElement('p');
//     PopUpNum1.setAttribute('class', 'pop-up__num');
//     PopUpNum1.textContent = (`${i}`);
//     PopUpNum.append(PopUpNum1);
// }

// popup Game Over

const popup = document.createElement('div');
popup.className = 'popup';
document.body.append(popup);

const popupContainer = document.createElement('div');
popupContainer.className = 'popup__container';
popup.append(popupContainer);

const popupContent = document.createElement('div');
popupContent.className = 'popup__content';
popupContainer.append(popupContent);

const popupTitle = document.createElement('p');
popupTitle.className = 'popup__title';
popupTitle.innerHTML = 'Game Over!!';
popupContent.append(popupTitle);

const popupSubtitle = document.createElement('p');
popupSubtitle.className = 'popup__subtitle';
popupContent.append(popupSubtitle);

const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.className = 'btn popup__button-play-again block-button';
buttonPlayAgain.setAttribute('type', 'button');
buttonPlayAgain.innerHTML = 'Play again';
popupContent.append(buttonPlayAgain);

// function play() 

function play() {

    frame5x5Data.forEach((item, index) => {
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {

                // showTime();
                // cell.innerHTML !== 'x'
                if (event.button === 0) {
                    cell.classList.toggle('_active');
                    audio = new Audio('./assets/audio/bell.wav');
                    playSound();
                    // cell.classList.remove('_wrong');
                    // cell.innerHTML = 'x';
                    // cell.innerHTML = item.name;
                }
                // if (cell.innerHTML === 'x' && event.button === 2) {
                //     audio = new Audio('./assets/audio/lose.wav');
                //     playSound();
                //     cell.classList.remove('_wrong');
                // }
                if (event.button === 2) {
                    cell.classList.remove('_active');
                    cell.innerHTML = 'x';
                    audio = new Audio('./assets/audio/lose.wav');
                    playSound();
                    cell.addEventListener('contextmenu', (e) => {
                        e.preventDefault();
                        return false;
                    });
                    // cell.classList.remove('_wrong');
                }

                for (let i = 0; i < cells.length; i++) {
                    checkCells2();
                }
            });

            // cellClick
            function cellClick() {
                cell.classList.toggle('_active');
            }
        });
    });
}

// cells.some(cell => cell.classList.contains('_active')); {
startTimer();
//     };

play();

function checkCells() {
    if (cells[1].classList.contains('_active') &&
        cells[3].classList.contains('_active') &&
        cells[5].classList.contains('_active') &&
        cells[6].classList.contains('_active') &&
        cells[7].classList.contains('_active') &
        cells[8].classList.contains('_active') &&
        cells[9].classList.contains('_active') &&
        cells[10].classList.contains('_active') &&
        cells[11].classList.contains('_active') &&
        cells[12].classList.contains('_active') &&
        cells[13].classList.contains('_active') &&
        cells[14].classList.contains('_active') &&
        cells[16].classList.contains('_active') &&
        cells[17].classList.contains('_active') &&
        cells[18].classList.contains('_active') &&
        cells[22].classList.contains('_active') &&
        !cells[0].classList.contains('_active') &&
        !cells[2].classList.contains('_active') &&
        !cells[4].classList.contains('_active') &&
        !cells[15].classList.contains('_active') &&
        !cells[19].classList.contains('_active') &&
        !cells[20].classList.contains('_active') &&
        !cells[21].classList.contains('_active') &&
        !cells[23].classList.contains('_active') &&
        !cells[24].classList.contains('_active')) {

        showGameOver();
    }
}

function checkCells2() {
    if (!cells[1].classList.contains('_active') &&
        // !cells[3].classList.contains('_active') &&
        // !cells[5].classList.contains('_active') &&
        // cells[6].classList.contains('_active') &&
        // !cells[7].classList.contains('_active') &
        // cells[8].classList.contains('_active') &&
        // !cells[9].classList.contains('_active') &&
        // !cells[10].classList.contains('_active') &&
        // !cells[11].classList.contains('_active') &&
        // cells[12].classList.contains('_active') &&
        // !cells[13].classList.contains('_active') &&
        // !cells[14].classList.contains('_active') &&
        // cells[16].classList.contains('_active') &&
        // !cells[17].classList.contains('_active') &&
        // cells[18].classList.contains('_active') &&
        // !cells[22].classList.contains('_active') &&
        // cells[0].classList.contains('_active') &&
        // !cells[2].classList.contains('_active') &&
        // cells[4].classList.contains('_active') &&
        // !cells[15].classList.contains('_active') &&
        // !cells[19].classList.contains('_active') &&
        // cells[20].classList.contains('_active') &&
        // !cells[21].classList.contains('_active') &&
        // !cells[23].classList.contains('_active') &&
        cells[24].classList.contains('_active')) {

        showGameOver();
    }
}

function showGameOver() {
    audio = new Audio('./assets/audio/win-sound.wav');
    playSound();
    pauseTimer();
    setTimeout(() => {
        popup.classList.add('_active');
    }, 1000);
    popupSubtitle.innerHTML = `Great! You have solved the nonogram in ${time} seconds!`;
    document.body.classList.add('_lock');
    // addTableRow();
}

// button Levels 

buttonLevels.addEventListener('click', () => {
    popupLevelList.classList.toggle('_active');
    document.body.classList.add('_lock');
});

popupLevelListItems.forEach(level => {
    level.addEventListener("click", () => {
        if (level.innerHTML === '5x5') {
            popupLevel5x5.classList.add('_active');
        }
        if (level.innerHTML === '10x10') {
            // popupLevel10x10.classList.add('_active');
        }
    });
});

// button Results

buttonResults.addEventListener('click', () => {
    popupTableResults.classList.toggle('_active');
    document.body.classList.add('_lock');
    // addTableRow();
});

popupTableResults.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        popupTableResults.classList.remove('_active');
        document.body.classList.remove('_lock');
    }
});

// button Background 

const blockButton = document.querySelectorAll('.block-button');

buttonBackground.addEventListener("click", () => {
    if (buttonBackground.innerHTML === 'Dark theme') {
        buttonBackground.innerHTML = 'Light theme';
        document.body.classList.add('_background-dark');
        blockButton.forEach((button) => (button.classList.add('_background-dark')));
        cells.forEach(cell => {
            cell.classList.add('_background-dark');
        });
        popupContainer.classList.add('_background-dark');
    } else {
        buttonBackground.innerHTML = 'Dark theme';
        document.body.classList.remove('_background-dark');
        blockButton.forEach((button) => (button.classList.remove('_background-dark')));
        cells.forEach(cell => {
            cell.classList.remove('_background-dark');
        });
        popupContainer.classList.remove('_background-dark');
    }
});

// button Volume 

buttonSound.addEventListener("click", () => {
    if (volume === 0.1) {
        volume = 0;
        buttonSound.textContent = "Unmute";
    } else {
        volume = 0.1;
        buttonSound.textContent = "Mute";
    }
});

function playSound() {
    // audio = new Audio('./assets/audio/bell.wav');
    audio.volume = volume;
    audio.play();
}

// Timer  

function showTime() {
    seconds++;
    const timerSeconds = lengthString(seconds % 60);
    const timerMinutes = lengthString(parseInt(seconds / 60));
    time = `${timerMinutes} : ${timerSeconds}`;
    timeTimer.textContent = time;
};

function lengthString(length) {
    let lengthString = length + "";
    if (lengthString.length < 2) {
        return "0" + lengthString;
    } else {
        return lengthString;
    }
};

function startTimer() {
    mySetInterval = setInterval(showTime, 1000);
    showTime();  // not late
}

function pauseTimer() {
    myClearInterval = clearInterval(mySetInterval);
}

function resetGame() {
    cells.forEach(cell => {
        cell.classList.remove('_active');
        cell.classList.add('_crossed-cell');
    });
    timeTimer.textContent = "00 : 00";
    seconds = 0;
    // minutes = 0;
}

// button Random Game

buttonRandomGame.addEventListener('click', () => {
    resetGame();
    pauseTimer();
    startTimer();
});

// button Save Game

// const enterName = document.querySelector('.enter-name');
// enterName.placeholder = 'Dear Friend';

buttonSaveGame.addEventListener("click", () => {
    pauseTimer();

    // function setLocalStorage() {
    //     localStorage.setItem('name', timeTimer.textContent);
    // }
    // window.addEventListener('beforeunload', setLocalStorage);

    // function getLocalStorage() {
    //     if (localStorage.getItem('name')) {
    //         timeTimer.textContent = localStorage.getItem('name');
    //     }
    // }
    // window.addEventListener('load', getLocalStorage);

    if (buttonSaveGame.innerHTML === 'Save game') {
        buttonSaveGame.innerHTML = 'Continue last game';
    } else {
        buttonSaveGame.innerHTML = 'Save game';
        timeTimer.textContent = time;
        startTimer();
    }
});

// button Reset Game

buttonResetGame.addEventListener('click', () => {
    resetGame();
    pauseTimer();
    startTimer();
});

// button Solution

buttonSolution.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.classList.remove('_crossed-cell');
        if (cell.innerHTML === 'x') {
            cell.classList.remove('_active');
        } else {
            cell.classList.add('_active');
        }
    });
});

// button Play Again

buttonPlayAgain.addEventListener('click', () => {
    popup.classList.remove('_active');
    document.body.classList.remove('_lock');
    resetGame();
    pauseTimer();
    startTimer();
});

// popup Rules 

const popupRules = document.createElement('div');
popupRules.className = 'popup-rules';
pageContent.append(popupRules);

const popupRulesTitle = document.createElement('h2');
popupRulesTitle.className = 'popup-rules__title';
popupRulesTitle.innerHTML = `How to play`;
popupRules.append(popupRulesTitle);

const popupRulesSubtitle = document.createElement('p');
popupRulesSubtitle.className = 'popup-rules__subtitle';
popupRulesSubtitle.innerHTML = `   Nonograms is a puzzle game to reveal a hidden picture by looking at the number clues. 
   The clues are given at the top and left side of the grid. Each number in these clue defines a block of black cell that must be filled in each row and column.
   If you see several numbers, it means there should be at list one empty cell between every sequence.
   The order is also important. The order of numbers coincides with the amount of cells to be colored.
   A player is able to fill in a cell in the grid, using left mouse-click. On a click event, trigger the functionality of changing the color of the grid to dark (black). When player clicks on dark cell - it will change to empty (white).
   A player is able to fill in a cell in the grid changing the color of the grid to crossed-cell(X) using right mouse-click. Filling empty cells with X is not obligatory to win the game.
   End game when players fill all black cells correctly according to the clues.
   Good luck!`;
popupRules.append(popupRulesSubtitle);
