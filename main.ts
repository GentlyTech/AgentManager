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

let autoCollect = AGENT_AUTO_COLLECT_DEFAULT;

loops.forever(function() {
    if (autoCollect) {
        agent.collectAll();
    }
    loops.pause(100);
});

player.onChat("mv", function(_, blocks) {
    let direction = functions.stringToSixDirection(player.getChatArg(0));

    if (direction != null) {
        agent.move(direction, blocks);
    }
    else {
        functions.throwError("No movement direction specified.");
    }
});

player.onChat("turn", function(_, times) {
    let direction = functions.stringToTurnDirection(player.getChatArg(0));

    if (direction != null) {
        for (let i = 0; i < times; i++) {
            agent.turn(direction);
        }
    }
    else {
        functions.throwError("No turning direction specified.");
    }
});

player.onChat("bring", function() {
   agent.teleportToPlayer();
});

player.onChat("tp", function(x, y, z) {
    //let direction = sixToCompassDirection(stringToSixDirection(player.getChatArg(3)));
    agent.teleport(pos(x, y, z), NORTH);
});

player.onChat("drill", function(_, blocks) {
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
});

player.onChat("drilltun", function(_, blocks, upThenDown) {
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

});

player.onChat("drilltundown", function(_, blocks) {
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

});

player.onChat("drilltunup", function(_, blocks) {
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

});

player.onChat("till", function(length, width, doPlaceWater) {
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
});

player.onChat("place", function(_, times, item_id) {
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
});

player.onChat("collect", function(shouldCollect) {
    autoCollect = shouldCollect;
});

player.onChat("purge", function() {
    agent.dropAll(FORWARD);
});

player.tell(mobs.target(LOCAL_PLAYER), "AgentManager Loaded");
