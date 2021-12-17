namespace player {
    /**
     * Posts a message to the game chat
     * @param message the message to display in the chat
     */
    //% help=player/say
    //% weight=340
    //% blockId=minecraftSay block="say %message"
    //% message.shadow=text
    //% message.defl='":)"'
    export function say(message: any) {
        player.execute(`say ${console.inspect(message)}`);
    }

    /**
     * Whispers a message to targets
     * @param target a selector of entities
     * @param message the text to whisper, eg: "Hi!"
     */
    //% help=player/tell
    //% weight=220
    //% blockId=minecraftTell block="tell %target=minecraftTarget|%message"
    //% inlineInputMode="inline"
    //% message.shadow=text
    export function tell(target: TargetSelector, message: any) {
        player.execute(`tell ${target} ${console.inspect(message)}`);
    }
}