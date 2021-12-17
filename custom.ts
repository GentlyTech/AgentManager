const ALLOWED_TILL_TYPES = [Block.Dirt, Block.Grass, Block.GrassPath, Block.CoarseDirt, Block.Farmland];
const AGENT_MAX_INVENTORY_SLOTS = 27;
const AGENT_AUTO_COLLECT_DEFAULT = 0;

namespace functions {
    export function stringToSixDirection(text: string) {
        switch(text.toLowerCase()) {
            case "up":
            case "u":
                return SixDirection.Up;
            case "down":
            case "dwn":
            case "d":
                return SixDirection.Down;
            case "left":
            case "l":
                return SixDirection.Left;
            case "right":
            case "r":
                return SixDirection.Right;
            case "forward":
            case "fwd":
            case "f":
                return SixDirection.Forward;
            case "backwards":
            case "backward":  
            case "back":
            case "bck":
            case "b":
                return SixDirection.Back;
            default:
                return null;
        }
    }
    
    export function sixToCompassDirection(direction: SixDirection) {
        switch (direction) {
            case SixDirection.Forward:
                return CompassDirection.North;
            case SixDirection.Back:
                return CompassDirection.South;
            case SixDirection.Left:
                return CompassDirection.West;
            case SixDirection.Right:
                return CompassDirection.East;
            case SixDirection.Up:
                return CompassDirection.North;
            case SixDirection.Down:
                return CompassDirection.South;
            default:
                return null;
        }
    }
    
    export function stringToTurnDirection(text: string) {
        switch (text) {
            case "left":
            case "l":
                return TurnDirection.Left;
            case "right":
            case "r":
                return TurnDirection.Right;
            default:
                return null;
        }
    }
    
    export function getOppositeSixDirection(direction: SixDirection) {
        switch (direction) {
            case SixDirection.Forward:
                return SixDirection.Back;
            case SixDirection.Back:
                return SixDirection.Forward;
            case SixDirection.Left:
                return SixDirection.Right;
            case SixDirection.Right:
                return SixDirection.Left;
            case SixDirection.Up:
                return SixDirection.Down;
            case SixDirection.Down:
                return SixDirection.Up;
            default:
                return null;
        }
    }

    export function throwError(message: string) {
        player.errorMessage(`Error: ${message}`);
    }
}

namespace agent {
    export function equipItem(item: Item) {
        for (let i = 0; i < AGENT_MAX_INVENTORY_SLOTS; i++) {
            if (agent.getItemDetail(i) == item) {
                agent.setSlot(i);
                return true;
            }
        }
        return false;
    }
}

namespace Math {
    export function gcf(num: number) {
        let factors = [];
        for (let i = 1; i < Math.abs(num) + 1; i++) {
            if (num % i == 0) {
                factors.push([i, Math.floor(num / i)]);
            }
        }

        let gcf1 = 0;
        let gcf2 = 0;
        
        factors.forEach((factorPair) => {
            if (factorPair[0] > gcf1) {
                gcf1 = factorPair[0];
                gcf2 = factorPair[1];
            }
        });

        return [gcf1, gcf2];
    }

    export function lcd(num1: number, num2: number) {
        
    }

    export function gcd(num1: number, num2: number) {
        
    }
}
