/**
 * A 3D builder interface
 */
//% weight=11 icon="\uf1b3" color="#CB48B7" advanced=true
namespace builder {
    /**
     * A 3D builder
     */
    interface BuilderState {
        facing: CompassDirection;
        current?: Position;
        mark?: Position;
        path?: Position[];
        copyStart?: Position;
        copyEnd?: Position;
        origin?: Position;
    }

    let _state: BuilderState = { facing: CompassDirection.North };
    let _stack: BuilderState[] = [];

    /**
     * Gets the current position of the builder
     */
    //% help=builder/position
    //% weight=210 blockGap=60
    //% blockId=minecraftBuilderPosition block="builder position"
    export function position(): Position {
        if (!_state.current) {
            _state.current = player.position().add(positions.create(0, 0, 2))
            mark();
        }
        return _state.current;
    }

    /**
     * Teleports the builder to the specified position
     * @param position the position to move the builder to
     */
    //% help=builder/teleport-to
    //% weight=330
    //% blockId=minecraftBuilderGoTo block="builder teleport to |%position=minecraftCreatePosition"
    export function teleportTo(position: Position): void {
        _state.current = position.toWorld();

        if (!_state.mark) {
            mark()
        }
        else {
            _state.path.push(_state.current);
        }
    }

    /**
     * Moves the builder in the specified direction
     * @param direction the direction in which to move the builder
     * @param blocks how far the builder should move, in blocks, eg: 1
     */
    //% help=builder/move
    //% weight=360
    //% blockId=minecraftBuilderMove block="builder move|%direction|by %blocks"
    export function move(direction: SixDirection, blocks: number): void {
        let toMove: CardinalDirection;

        switch (direction) {
            case SixDirection.Forward:
                toMove = _state.facing as number;
                break;
            case SixDirection.Back:
                switch (_state.facing) {
                    case CompassDirection.East: toMove = CardinalDirection.West; break;
                    case CompassDirection.West: toMove = CardinalDirection.East; break;
                    case CompassDirection.North: toMove = CardinalDirection.South; break;
                    case CompassDirection.South: toMove = CardinalDirection.North; break;
                }
                break;
            case SixDirection.Left:
                toMove = turnDirection(_state.facing, TurnDirection.Left);
                break;
            case SixDirection.Right:
                toMove = turnDirection(_state.facing, TurnDirection.Right);
                break;
            case SixDirection.Up:
                toMove = CardinalDirection.Up;
                break;
            case SixDirection.Down:
                toMove = CardinalDirection.Down;
                break;
        }

        _state.current = position().move(toMove, blocks);
        _state.path.push(_state.current);
    }

    /**
     * Moves the builder in multiple directions at once
     * @param forward the number of blocks by which to move forward, eg: 1
     * @param up the number of blocks by which to move up, eg: 1
     * @param left the number of blocks by which to move left, eg: 1
     */
    //% help=builder/shift
    //% weight=270
    //% blockId=minecraftBuilderShift block="builder move forward %forward| up %up| left %left"
    export function shift(forward: number, up: number, left: number) {
        move(SixDirection.Forward, forward);
        move(SixDirection.Up, up);
        move(SixDirection.Left, left);
    }

    /**
     * Turns the builder in the specified direction
     * @param direction the turn direction, eg: TurnDirection.Left
     */
    //% help=builder/turn
    //% weight=350
    //% blockId=minecraftBuilderTurn block="builder turn|%direction"
    export function turn(direction: TurnDirection) {
        _state.facing = turnDirection(_state.facing, direction) as number;
    }

    /**
     * Makes the builder face the specified direction
     * @param direction the direction that the builder should face after the turn
     */
    //% help=builder/face
    //% weight=240
    //% blockId=minecraftBuilderFace block="builder face|%direction"
    export function face(direction: CompassDirection) {
        _state.facing = direction;
    }

    /**
     * Marks the current builder's position
     */
    //% help=builder/mark
    //% weight=340
    //% blockId=minecraftBuilderMark block="builder place mark"
    export function mark(): void {
        _state.mark = position();
        _state.path = [_state.mark];

        if (!_state.origin) {
            _state.origin = _state.current;
        }
    }

    /**
     * Sets the builder's origin to the builder's current location
     */
    //% help=builder/set-origin
    //% weight=230
    //% blockId=minecraftBuilderSetOrigin block="builder set origin"
    export function setOrigin(): void {
        _state.origin = position();
    }

    /**
     * Teleports the builder to its origin
     */
    //% help=builder/teleport-to-origin
    //% weight=220
    //% blockId=minecraftBuilderTeleportOrigin block="builder teleport to origin"
    export function teleportToOrigin(): void {
        teleportTo(_state.origin);
    }

    /**
     * Places a block at the current location and sets the mark
     * @param block the type of block to place
     */
    //% help=builder/place
    //% weight=320
    //% blockId=minecraftBuilderPlace block="place %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function place(block: number): void {
        blocks.place(block, position());
    }

    /**
     * Creates a line of blocks between the builder's current position and the last marked position
     * @param block the type of block to use to build line
     */
    //% help=builder/line
    //% weight=250
    //% blockId=minecraftBuilderLine block="builder line from mark with %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function line(block: number): void {
        if (!_state.current) {
            mark();
        }

        shapes.line(block, _state.mark, _state.current);
    }

    /**
     * Fills the volume between the current position and the previous mark
     * @param block the type of block to use to fill the region
     */
    //% help=builder/fill
    //% weight=260
    //% blockId=minecraftBuilderFill block="builder fill from mark with %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function fill(block: number, operator?: FillOperation): void {
        if (!_state.current) {
            mark();
        }

        blocks.fill(block, _state.mark, _state.current, operator)
    }

    /**
     * Traces the path travelled since the last marked position with the specified block type
     * @param block the type of block to use to trace the builder's path
     */
    //% help=builder/trace-path
    //% weight=310 blockGap=60
    //% blockId=minecraftBuilderTrace block="builder trace path from mark with %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function tracePath(block: number) {
        if (!_state.current) {
            mark();
        }

        if (_state.path.length <= 1)
            place(block);
        else {
            for (let i = 1; i < _state.path.length; i++) {
                shapes.line(block, _state.path[i - 1], _state.path[i]);
            }
        }
    }

    /**
     * Raises a wall of the specified block type and height along the path the builder travelled since the last marked position
     * @param block the type of block to use for the wall
     * @param height the height of the wall in blocks, eg: 5
     */
    //% help=builder/raise-wall
    //% weight=150
    //% blockId=minecraftBuildereWall block="builder raise wall from mark with %block=minecraftBlock|of %height"
    //% block.shadow=minecraftBlock
    export function raiseWall(block: number, height: number) {
        if (height == 0) return;
        const dh = positions.create(0, height - 1, 0);
        if (!_state.current) {
            mark();
        }

        if (_state.path.length <= 1)
            blocks.fill(block, _state.current, _state.current.add(dh));
        else {
            for (let i = 1; i < _state.path.length; i++) {
                shapes.line(block, _state.path[i - 1], _state.path[i], dh);
            }
        }
    }

    /**
     * Copies the cubic region from the last marked position to the builder's current position
     */
    //% help=builder/copy
    //% weight=140
    //% blockId=minecraftBuilderCopy block="builder copy from mark" blockGap=8
    export function copy() {
        _state.copyStart = position();
        _state.copyEnd = _state.mark;
    }

    /**
     * Pastes the previously copied region at the builder's current position
     */
    //% help=builder/paste
    //% weight=130
    //% blockId=minecraftBuilderPaste block="builder paste"
    export function paste() {
        if (!_state.copyStart) {
            return;
        }

        blocks.clone(_state.copyStart, _state.copyEnd, _state.current, CloneMask.Replace, CloneMode.Force);
    }

    /**
     * Pushes the builder's curent state onto the state stack
     */
    //% help=builder/push-state
    //% weight=120
    //% blockId=minecraftBuilderPushState block="builder push state" blockGap=8
    export function pushState() {
        let clonedState: BuilderState = { facing: _state.facing };

        clonedState.current = _state.current;
        clonedState.mark = _state.mark;
        clonedState.copyStart = _state.copyStart;
        clonedState.copyEnd = _state.copyEnd;
        clonedState.origin = _state.origin;

        if (_state.path) {
            clonedState.path = [];
            for (let i = 0; i < _state.path.length; i++) {
                clonedState.path.push(_state.path[i]);
            }
        }

        _stack.push(clonedState);
    }

    /**
     * Reverts the builder's state to the most recently pushed state on the state stack
     */
    //% help=builder/pop-state
    //% weight=110
    //% blockId=minecraftBuilderPopState block="builder pop state"
    export function popState() {
        if (_stack.length) {
            _state = _stack[_stack.length - 1];
            _stack.splice(_stack.length - 1, 1)
        }
    }

    function turnDirection(facing: CompassDirection, direction: TurnDirection) {
        if (direction === TurnDirection.Left) {
            switch (facing) {
                case CompassDirection.East: return CardinalDirection.North;
                case CompassDirection.West: return CardinalDirection.South;
                case CompassDirection.North: return CardinalDirection.West;
                default: return CardinalDirection.East;
            }
        }
        else {
            switch (facing) {
                case CompassDirection.East: return CardinalDirection.South;
                case CompassDirection.West: return CardinalDirection.North;
                case CompassDirection.North: return CardinalDirection.East;
                default: return CardinalDirection.West;
            }
        }
    }
}