import { WebSocket } from "ws";
import { Chess } from "chess.js";
export class Game{
    public player1 : WebSocket;
    public player2 : WebSocket;
    public board:Chess;
    public moves:string[];
    public startTime:Date;

    constructor(player1:WebSocket,player2:WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.moves = [];
        this.startTime = new Date();

    }

    makeMove(socket : WebSocket,move : {
        from:string;
        to:string;
    }){
        //validation here
        if(this.board.moves.length % 2 === 0 && socket !== this.player1){
            return
        }

        if(this.board.moves.length % 2 === 1 && socket !== this.player2){
            return;
        }
        try {
            this.board.move(move);
        } catch (error) {
            return
        }
        //is it this user move
        //is the move valid
        //update the board
        //push the move
        //check if the game is over
        //send the updated board to both players

        //explore the chess.js library
    }
}