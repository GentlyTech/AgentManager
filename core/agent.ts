namespace agent {
    /**
     * Turn the agent left by 90 degrees.
     */
    //% help=agent/turn
    //% blockId=agentturnleft block="agent turn left"
    //% blockHidden=1
    export function turnLeft() {
        agent.turn(TurnDirection.Left);
    }

    /**
     * Turn the agent right by 90 degrees.
     */
    //% help=agent/turn
    //% blockId=agentturnright block="agent turn right"
    //% blockHidden=1
    export function turnRight() {
        agent.turn(TurnDirection.Right);
    }
}