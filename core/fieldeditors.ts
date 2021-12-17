namespace mobs {
    /**
     * Effect field
     * @param effect an effect
     */
    //% blockId=minecraftEffectField block="%effect"
    //% effect.fieldEditor="gridpicker"
    //% effect.fieldOptions.width=340 effect.fieldOptions.columns=8 effect.fieldOptions.tooltips=true
    //% effect.fieldOptions.tooltipsXOffset="20" effect.fieldOptions.tooltipsYOffset="-20"
    //% effect.fieldOptions.maxRows="8"
    //% effect.fieldOptions.hasSearchBar=true
    //% effect.fieldOptions.hideRect=true
    //% shim=TD_ID blockHidden=1 weight=0
    export function __effect(effect: Effect): number {
        return effect;
    }

    /**
     * Represents an animal from the game
     * @param name the type of the animal
     */
    //% help=mobs/animal
    //% weight=320
    //% shim=TD_ID blockId=minecraftAnimal block="animal %name"
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=340 name.fieldOptions.columns=8 name.fieldOptions.tooltips=true
    //% name.fieldOptions.maxRows="8"
    //% name.fieldOptions.hideRect=true
    export function animal(name: AnimalMob): number {
        return name;
    }

    /**
     * Represents a monster from the game
     * @param name the type of the monster
     */
    export function __monster(name: MonsterMob): number {
        return name;
    }

    /**
     * Represents a projectile from the game
     * @param name the type of the projectile
     */
    //% help=mobs/projectile
    //% shim=TD_ID blockId=minecraftProjectile block="projectile %name"
    //% weight=305 blockGap=60
    export function projectile(name: ProjectileMob): number {
        return name;
    }
}

namespace blocks {
    /**
     * Represents a block from the game
     * @param block the block
     */
    //% help=blocks/block
    //% blockGap=8
    //% weight=330
    //% shim=TD_ID blockId=minecraftBlock block="%block"
    //% block.fieldEditor="gridpicker"
    //% block.fieldOptions.width=340 block.fieldOptions.columns=8 block.fieldOptions.tooltips=true
    //% block.fieldOptions.tooltipsXOffset="20" block.fieldOptions.tooltipsYOffset="-20"
    //% block.fieldOptions.maxRows="8"
    //% block.fieldOptions.hasSearchBar=true
    //% block.fieldOptions.hideRect=true
    export function block(block: Block): number {
        return block;
    }

    /**
     * Represents an item from the game
     * @param item the item
     */
    //% help=blocks/item
    //% weight=320
    //% shim=TD_ID blockId=minecraftItem block="item %item"
    //% item.fieldEditor="gridpicker"
    //% item.fieldOptions.width=340 item.fieldOptions.columns=8 item.fieldOptions.tooltips=true
    //% item.fieldOptions.tooltipsXOffset="20" item.fieldOptions.tooltipsYOffset="-20"
    //% item.fieldOptions.maxRows="8"
    //% item.fieldOptions.hasSearchBar=true
    //% item.fieldOptions.hideRect=true
    export function item(item: Item): number {
        return item;
    }
}