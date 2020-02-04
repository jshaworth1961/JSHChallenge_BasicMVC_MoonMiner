import GameService from "../services/GameService.js";

let _gameService = new GameService();

function _updateData()
{
    let miner = _gameService.Miner //Miner is from getMiner
    document.getElementById("cb-mined").innerText = miner.cheeseBricks;
}

export default class GameController
{
    constructor()
    {
        console.log(`You are in the GameController constructor.`);
        _updateData();
    }

    mineCheese()
    {
        _gameService.mineCheese();
        _updateData();
    }
}