import frame5x5Data from './snowflake/puzzle.js';
import topClues1Data from './snowflake/top-clues-1.js';
import topClues2Data from './snowflake/top-clues-2.js';
// import topClues3Data from './templates-5x5/snowflake/top-clues-3.js';
import leftClues1Data from './snowflake/left-clues-1.js';
import leftClues2Data from './snowflake/left-clues-2.js';
// import leftClues3Data from './templates-5x5/snowflake/left-clues-3.js';

const templates5x5Data = [
    {
        id: "1",
        level: "5x5",
        name: "heart",
        image: './assets/images/heart.png',
        puzzle: frame5x5Data.name,
        topClue1: topClues1Data.number,
        topClue2: topClues2Data.number,
        leftClue1: leftClues1Data.number,
        leftClue2: leftClues2Data.number,
    },
    {
        id: "2",
        level: "5x5",
        name: "X",
        image: '././assets/images/X.png',
    //     puzzle: frame5x5Data,
    //     topClue1: topClues1Data,
    //     topClue2: topClues2Data,
    //     leftClue1: leftClues1Data,
    //     leftClue2: leftClues2Data,
    },
    {
        id: "3",
        level: "5x5",
        name: "snowflake",
        image: '././assets/images/snowflake.png',
    //     puzzle: frame5x5Data,
    //     topClue1: topClues1Data,
    //     topClue2: topClues2Data,
    //     topClue3: topClues3Data,
    //     leftClue1: leftClues1Data,
    //     leftClue2: leftClues2Data,
    //     leftClue3: leftClues3Data,
    },
    {
        id: "4",
        level: "5x5",
        name: "house",
        image: '././assets/images/house.png',
    },
    {
        id: "5",
        level: "5x5",
        name: "cat",
        image: '././assets/images/cat.png',
    },

]

export default templates5x5Data;