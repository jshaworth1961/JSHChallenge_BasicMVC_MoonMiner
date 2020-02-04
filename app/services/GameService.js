import Miner from '../models/Miner.js'

let _miner = new Miner("Jack", 100, 5, 20);


export default class GameService {

    constructor() {
        console.log('You are in the GameService constructor');

    }

    mineCheese() {
        console.log("You are mining");

        let toolHarvest = _miner.tools.shovel +
            _miner.tools.excavator;


        _miner.cheeseBricks += toolHarvest;
        console.log(_miner.CheeseBricks);
    }

    get Miner() {
        return new Miner(_miner.name, _miner.cheeseBricks,
            _miner.shovel, _miner.excavator);
    }


}