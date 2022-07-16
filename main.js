$(document).ready(function(){


  //Gameboard Module
const GameBoard = (function(){
  let x = "x";
  let o = "o";
  let board =  [];
  const render = () => {
    for (let i =0; i < 9; i++) {
      board.push({position: i , type : "a" });
      let div = $('<div>');
      div.addClass(`box ${i}`);
      $('#gameboard').append(div);
  };
  console.log(board);
};
  const score = () => {
    board.forEach((element)=> {
      $(`.${element.position}`).text(element.type);
    });

  };

return { render , score}

})();

//Player factory function
const Player = (name,type) => {
  return{name,type};
};

GameBoard.render();
GameBoard.score();
$('.box').on('click', () => console.log("X"));


});