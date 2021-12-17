/**
 * Give commands, communicate, and respond to events that happen in the game
 */
//% color=#0078D7 weight=100 icon="\uf007"
namespace player {
    export class ChatCommandArguments {
        public number: number;
        public number2: number;
        public string: string;
        public string2: string;
        public position: Position;
        public position2: Position;
        public selector: TargetSelector;
        public selector2: TargetSelector;
    }

    /**
     * Returns the string value of the specified ChatArgument enum value
     * @param argName
     */
    function getArgumentName(argName: ChatArgument): string {
        // const enums can only be accessed by string literals, so we need this conversion utility method
        switch (argName) {
            case ChatArgument.number: return "number";
            case ChatArgument.number2: return "number2";
            case ChatArgument.position: return "position";
            case ChatArgument.position2: return "position2";
            case ChatArgument.selector: return "selector";
            case ChatArgument.selector2: return "selector2";
            case ChatArgument.string: return "string";
            case ChatArgument.string2: return "string2";
        }

        return "";
    }

    /**
     * Parses arguments from the last player chat command using the specified expected arguments
     * @param argNames
     */
    function parseCommandArgs(argNames: ChatArgument[]): ChatCommandArguments {
        const args = new ChatCommandArguments()
        let nextArgIndex = 0;

        for (let i = 0; i < argNames.length; ++i) {
            const current = getArgumentName(argNames[i]);

            if (!current) {
                return null;
            }

            let propertyNum = parseInt(current.charAt(current.length - 1));

            if (Math.isNaN(propertyNum)) {
                propertyNum = 1;
            }

            const type = propertyNum === 1 ? current : current.substr(0, current.length - 1);

            switch (type) {
                case "number":
                    const numberArg = parseInt(getChatArg(nextArgIndex++));
                    if (Math.isNaN(numberArg)) {
                        return null;
                    }
                    if (propertyNum === 1) {
                        args.number = numberArg;
                    } else if (propertyNum === 2) {
                        args.number2 = numberArg;
                    }
                    break;
                case "string":
                    const stringArg = getChatArg(nextArgIndex++);
                    if (stringArg === undefined) {
                        return null;
                    }
                    if (propertyNum === 1) {
                        args.string = stringArg;
                    } else if (propertyNum === 2) {
                        args.string2 = stringArg;
                    }
                    break;
                case "position":
                    const xRaw = getChatArg(nextArgIndex++);
                    const yRaw = getChatArg(nextArgIndex++);
                    const zRaw = getChatArg(nextArgIndex++);
                    const pos = positions.createHybrid(xRaw, yRaw, zRaw);
                    if (!pos) {
                        return null;
                    }
                    if (propertyNum === 1) {
                        args.position = pos;
                    } else if (propertyNum === 2) {
                        args.position2 = pos;
                    }
                    break;
                case "selector":
                    const selectorArg = mobs.parseSelector(getChatArg(nextArgIndex++));
                    if (!selectorArg) {
                        return null;
                    }
                    if (propertyNum === 1) {
                        args.selector = selectorArg;
                    } else if (propertyNum === 2) {
                        args.selector2 = selectorArg;
                    }
                    break;
                default:
                    return null;
            }
        }

        return args;
    }

    /**
     * Generates a help message for the given chat command usage
     * @param argNames
     */
    function commandArgsHelp(commandName: string, argNames: ChatArgument[]): string {
        let helpMsg = commandName;

        for (let i = 0; i < argNames.length; ++i) {
            switch (argNames[i]) {
                case ChatArgument.number:
                case ChatArgument.number2:
                    helpMsg += " <number>";
                    break;
                case ChatArgument.position:
                case ChatArgument.position2:
                    helpMsg += " <x y z>";
                    break;
                case ChatArgument.selector:
                case ChatArgument.selector2:
                    helpMsg += " <target>";
                    break;
                case ChatArgument.string:
                case ChatArgument.string2:
                    helpMsg += " <string>";
                    break;
            }
        }

        return helpMsg;
    }

    /**
     * Runs code when you type a certain message in the game chat
     * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
     */
    //% help=player/on-chat-command
    //% promise
    //% weight=350
    //% blockId=minecraftOnChatCommand block="on chat command %command"
    //% mutate=objectdestructuring
    //% mutatePropertyEnum=ChatArgument
    //% mutateText="Command arguments"
    //% mutatePrefix="with"
    //% deprecated=true
    export function onChatCommand(command: string, argTypes: ChatArgument[], handler: (args: ChatCommandArguments) => void): void {
        onChatCommandCore(command, () => {
            const parsedArgs = parseCommandArgs(argTypes);

            if (!parsedArgs) {
                chatCommandSyntaxError(commandArgsHelp(command, argTypes));
            } else {
                handler(parsedArgs);
            }
        });
    }

    /**
     * Runs code when you type a certain message in the game chat
     * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
     */
    //% help=player/on-chat-command
    //% promise
    //% weight=360
    //% blockId=minecraftOnChat block="on chat command %command"
    //% optionalVariableArgs
    //% topblock topblockWeight=95
    export function onChat(command: string, handler: (num1: number, num2: number, num3: number) => void) {
        onChatCommandCore(command, () => {
            let args = getChatArgs(command) as string[];
            const parsedArgs = [0, 0, 0];
            let i = 0;
            for (let arg of args) {
                let currentNumber = parseInt(arg);
                if (!Math.isNaN(currentNumber)) {
                    parsedArgs[i] = currentNumber;
                }
                ++i;
            }
            handler(parsedArgs[0], parsedArgs[1], parsedArgs[2]);
        });
    }
}
/**
 * Everything for adding, inspecting, and changing blocks in the world.
 */
//% color=#7ABB55 weight=70 icon="\uf1b2"
namespace blocks {
}

/**
 * Creatures that live in the Minecraft world.
 */
//% color=#764BCC weight=65 icon="\uf1b0"
//% groups='["other", "Selectors"]'
namespace mobs { }

/**
 * Your assistant in Minecraft to help you get things done.
 */
//% color=#D83B01 weight=64 icon="icons/Agent_icon_white.png"
//% groups='["other", "Actions", "Inventory"]'
namespace agent {
}

/**
 * Commands to control the game mode, weather, time,
 * and change the rules.
 */
//% color=#8F6D40 weight=60 icon="\uf0ad"
namespace gameplay { }

/**
 * World and relative position operators
 */
//% color=#69B090 weight=55 icon="\uf05b"
namespace positions { }

//% enumIdentity="TurnDirection.Left"
const LEFT_TURN = TurnDirection.Left;
//% enumIdentity="TurnDirection.Right"
const RIGHT_TURN = TurnDirection.Right;