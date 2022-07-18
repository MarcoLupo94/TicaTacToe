$(document).ready(function(){

  //Gameboard Module
const GameBoard = (function(){
  let x = "x";
  let o = "o";
  let board =  new Array(9);
  let player = x;
  render();
  click();


  function click(){
    $('.box').on('click', (event) => {
    player === x ? player = o : player = x;
    const position = $(event.currentTarget).attr('id');
    changeBoard(position);
    score();
  });
  }
  function render(){
    for (let i =0; i < 9; i++) {
      board[i] = ("");
      let div = $('<div>');
      div.addClass(`box`).attr('id', `${i}`);
      $('#gameboard').append(div);
  };
};

  function score() {
    for (let i =0; i < 9; i++)  {
      $(`#${i}`).text(board[i]);
    };

  };
  function changeBoard(position){
    if (player === x && board[position] === "" ){
      board[position] = "X";
    }
    else if (player === o && board[position] === ""){
      board[position]= "O";
    }
  };

  function restart(){
    board = new Array(9);
    $('.box').remove();
    render();
    click();

  };


return {  restart }

})();

 //game module
 const Game = (() =>{
  $('#restart').on('click',restart);


  function restart() {
    GameBoard.restart();
  }
  return {} ;

 })();

});