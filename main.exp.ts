// Remove these when copying into minecraft
import './custom';
import './core/agent';
import './core/buffer';
import './core/constants';
import './core/enums';
import './core/fieldeditors';
import './core/helpers';
import './core/mobs';
import './core/ns';
import './core/player';
import './core/pxt-core';
import './core/pxt-helpers';
import './core/pxt-python-helpers';
import './core/pxt-python';
import './core/sims';

interface commandsIndexSig {
    [key: string]: Function
}

let autoCollect = AGENT_AUTO_COLLECT_DEFAULT;
let lastMessage = "";
const commands: commandsIndexSig = {
    mv: mv,
    turn: turn,
    bring: bring,
    tp: tp,
    drill: drill,
    drillTun: drillTun,
    drillTunDown: drillTunDown,
    drillTunUp: drillTunUp,
    till: till,
    place: place,
    collect: collect,
    purge: purge,
}

loops.forever(function() {
    if (autoCollect) {
        agent.collectAll();
    }

    const message = player.message();
    if (message != null) {
        if (message != lastMessage) {
            lastMessage = message;
            const messageArray = message.split(" ");
            const commandBase = messageArray[0];
            const args = () => { 
               messageArray.splice(0, 1);
               return messageArray;
            };
            try {
                commands[commandBase]({ ...args } as any);
            }
            catch {
                functions.throwError("Unable to execute command");
            }
        }
    }

    loops.pause(100);
});

function mv(blocks: number) {
    let direction = functions.stringToSixDirection(player.getChatArg(0));

    if (direction != null) {
        agent.move(direction, blocks);
    }
    else {
        functions.throwError("No movement direction specified.");
    }
}

function turn(times: number) {
    let direction = functions.stringToTurnDirection(player.getChatArg(0));

    if (direction != null) {
        for (let i = 0; i < times; i++) {
            agent.turn(direction);
        }
    }
    else {
        functions.throwError("No turning direction specified.");
    }
}

function bring() {
   agent.teleportToPlayer();
}

function tp(x: number, y: number, z: number) {
    //let direction = sixToCompassDirection(stringToSixDirection(player.getChatArg(3)));
    agent.teleport(pos(x, y, z), NORTH);
}

function drill(blocks: number) {
    let direction = functions.stringToSixDirection(player.getChatArg(0));

    if (direction != null) {
        for (let i = 0; i < blocks; i++) {
            agent.destroy(direction);
            agent.move(direction, 1);
            agent.collectAll();
        }
    }
    else {
        functions.throwError("No drilling direction specified.");
    }
}

function drillTun(blocks: number, upThenDown: boolean) {
    let direction = functions.stringToSixDirection(player.getChatArg(0));
    let y_direction = upThenDown ? UP : DOWN;

    if (direction != null) {
        for (let i = 0; i < blocks; i++) {
            agent.destroy(direction);
            agent.destroy(y_direction);
            agent.move(y_direction, 1);
            agent.destroy(direction);
            agent.move(direction, 1);
            agent.move(functions.getOppositeSixDirection(y_direction), 1);
            agent.collectAll();
        }
    }
    else {
        functions.throwError("No drilling direction specified.");
    }

}

function drillTunDown(blocks: number) {
    let direction = functions.stringToSixDirection(player.getChatArg(0));

    if (direction != null) {
        for (let i = 0; i < blocks; i++) {
            agent.destroy(DOWN);
            agent.move(DOWN, 1);
            agent.destroy(DOWN);
            agent.destroy(direction);
            agent.move(direction, 1);
            agent.destroy(DOWN);
            agent.collectAll();
        }
    }
    else {
        functions.throwError("No drilling direction specified.");
    }

}

function drillTunUp(blocks: number) {
    let direction = functions.stringToSixDirection(player.getChatArg(0));

    if (direction != null) {
        for (let i = 0; i < blocks; i++) {
            agent.destroy(UP);
            agent.move(UP, 1);
            agent.destroy(UP);
            agent.destroy(direction);
            agent.move(direction, 1);
            agent.destroy(UP);
            agent.collectAll();
        }
    }
    else {
        functions.throwError("No drilling direction specified.");
    }

}

function till(length: number, width: number, doPlaceWater: boolean) {
    for (let l = 0; l < width; l++) {
        for (let w = 0; w < length; w++) {
            agent.move(FORWARD, 1);
            let currentBlock = agent.inspect(AgentInspection.Block, DOWN);
            /*if (doPlaceWater) {
                const gcflength = Math.gcf(length);
                const gcfwidth = Math.gcf(width);

                if (agent.equipItem(WATER_BUCKET)) {
                    agent.place(DOWN);
                }
            }*/
            agent.move(BACK, 1);
            if (ALLOWED_TILL_TYPES.indexOf(currentBlock) > -1) {
                if (currentBlock == Block.CoarseDirt) {
                    agent.till(FORWARD);
                    agent.till(FORWARD);
                }
                else {
                    agent.till(FORWARD);
                }
            }
            agent.move(FORWARD, 1);
        }
        agent.move(BACK, length);
        agent.move(RIGHT, 1);
    }
}

function place(times: number, item_id: Item) {
    let direction = functions.stringToSixDirection(player.getChatArg(0));

    if (direction != null) {
        for (let i = 0; i < times; i++) {
            if (agent.equipItem(item_id)) {
                agent.move(functions.getOppositeSixDirection(direction), 1);
                agent.place(direction);
            }
        }
    }
    else {
        functions.throwError("No placement direction specified.");
    }    
}

function collect(shouldCollect: boolean) {
    autoCollect = shouldCollect ? 1 : 0;
}

function purge() {
    agent.dropAll(FORWARD);
}

player.tell(mobs.target(LOCAL_PLAYER), "AgentManager Loaded");
