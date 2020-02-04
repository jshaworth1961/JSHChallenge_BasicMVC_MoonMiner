

export default class Miner
{
    constructor(name,cheeseBricks,shovel,excavator)
    {
        console.log('You are in the Miner constructor');
        this.name = name;
        this.cheeseBricks = cheeseBricks;
        this.tools =
        {
            shovel: shovel,
            excavator: excavator
        }
        
    }

}