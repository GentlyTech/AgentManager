namespace console {
    export function log(msg: any) {
        writeString(inspect(msg));
        writeString("\r\n");
    }

    /**
     * Convert any object or value to a string representation
     * @param obj value to be converted to a string
     * @param maxElements [optional] max number values in an object to include in output
     */
    export function inspect(obj: any, maxElements = 20): string {
        /**
         * This implementation is copied over directly from
         * https://github.com/microsoft/pxt-common-packages/blob/master/libs/base/console.ts
         * in common packages v6.18.2
         */
        if (typeof obj == "string") {
            return obj;
        } else if (typeof obj == "number") {
            return "" + obj;
        } else if (Array.isArray(obj)) {
            const asArr = (obj as Array<string>);
            if (asArr.length <= maxElements) {
                return asArr.join(",");
            } else {
                return `${asArr.slice(0, maxElements).join(",")}...`;
            }
        } else {
            const asString = obj + "";
            if (asString != "[object Object]"
                && asString != "[Object]") { // on arcade at least, default toString is [Object] on hardware instead of standard
                return asString;
            }

            let keys = Object.keys(obj);
            const snipped = keys.length > maxElements;
            if (snipped) {
                keys = keys.slice(0, maxElements);
            }

            return `{${
                keys.reduce(
                    (prev, currKey) => prev + `\n    ${currKey}: ${obj[currKey]}`,
                    ""
                ) + (snipped ? "\n    ..." : "")
                }
}`;
        }
    }

    //% shim=minecraft::serialSendString
    function writeString(text: string): void { }
}

/**
 * Creates a new relative position: ~East/West, ~up/down, ~South/North
 * @param x the East (+x) or West (-x) coordinate, in blocks
 * @param y the up (+y) or down (-y) coordinate, in blocks
 * @param z the South (+z) or North (-z) coordinate, in blocks
 */
//% help=positions/pos blockNamespace=positions
//% weight=320 color=#69B090
//% blockId=minecraftCreatePosition block="~%x|~%y|~%z"
function pos(x: number, y: number, z: number): Position {
    return positions.create(x, y, z);
}

/**
 * Creates a new local position: ~left/right, ~up/down, ~forwards/backwards
 * @param x the left (+x) or right (-x) coordinate, in blocks
 * @param y the up (+y) or down (-y) coordinate, in blocks
 * @param z the forwards (+z) or backwards (-z) coordinate, in blocks
 */
//% help=positions/pos blockNamespace=positions
//% weight=315 color=#69B090
// blockId=minecraftCreatePositionLocal block="^$x|^$y|^$z"
function posLocal(x: number, y: number, z: number): Position {
    return positions.createLocal(x, y, z)
}

/**
 * Creates a new world position: East/West, up/down, South/North
 * @param x the East (+x) or West (-x) coordinate, in blocks
 * @param y the up (+y) or down (-y) coordinate, in blocks
 * @param z the South (+z) or North (-z) coordinate, in blocks
 */
//% help=positions/world blockNamespace=positions
//% weight=310 blockGap=60 color=#69B090
//% blockId=minecraftCreateWorldPosition block="world %x|%y|%z"
function world(x: number, y: number, z: number): Position {
    return positions.createWorld(x, y, z);
}

/**
* Picks a random position within the specified cubic region
* @param p1 the position of the first corner of the cubic region
* @param p2 the position of the opposite corner of the cubic region
*/
//% help=positions/randpos blockNamespace=positions
//% weight=210 blockGap=60 color=#69B090
//% blockId=minecraftPosRandom block="pick random position|from %p1=minecraftCreatePosition|to %p2=minecraftCreatePosition"
//% blockExternalInputs=1
function randpos(p1: Position, p2: Position): Position {
    return positions.random(p1, p2);
}