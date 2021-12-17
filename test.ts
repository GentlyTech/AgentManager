player.onChat("attack", function(_) {
    const playerName = player.getChatArg(0);
    const position = mobs.queryTarget(mobs.playerByName(playerName))[3];
    agent.teleport(pos(position.x, position.y, position.z), NORTH);
    agent.attack(FORWARD);
});
