$(document).ready(function(){

 //game module
 const Game = (() =>{

 })()
  //Gameboard Module
const GameBoard = (function(){
  let x = "x";
  let o = "o";
  let board =  new Array(9);
  const render = () => {
    for (let i =0; i < 9; i++) {
      board[i] = ("");
      let div = $('<div>');
      div.addClass(`box`).attr('id', `${i}`);
      $('#gameboard').append(div);
  };
};

  const score = () => {
    for (let i =0; i < 9; i++)  {
      $(`#${i}`).text(board[i]);
    };

  };
  const changeBoard = (position) => {
    board[position] = "X";

    // if (player.type = "x"){
    //   board[position].type = "X";
    // }
    // else {
    //   board[position].type = "X";
    // }

  };

return { render , score, changeBoard }

})();

//Player factory function
const Player = (name,type) => {
  return{name,type};
};

GameBoard.render();
GameBoard.score();
$('.box').on('click', (event) => {
  const position = $(event.currentTarget).attr('id');
  console.log(position);

  GameBoard.changeBoard(position);
  GameBoard.score();


});


});