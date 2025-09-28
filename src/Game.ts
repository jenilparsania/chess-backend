import { WebSocket } from "ws";

export class Game{
    public player1 : WebSocket;
    public player2 : WebSocket;
    public board:string;
    public moves:string[];
    public startTime:Date;

    constructor(player1:WebSocket,player2:WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = "";
        this.moves = [];
        this.startTime = new Date();

    }

    makeMove(socket : WebSocket,move : String){
        //validation here
        //is it this user move
        //is the move valid
        //update the board
        //push the move
        //check if the game is over
        //send the updated board to both players

        //explore the chess.js library
    }
}