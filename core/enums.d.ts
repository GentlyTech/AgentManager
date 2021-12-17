// NOTE: If you change any values in this file, make sure to run
// Run `node tools/generateConstants.js` from the root of this
// repository to update constants.ts

/**
 * Minecraft block types: Grass, Stone, Air, etc...
 */
//% emitAsConstant
declare const enum Block {
    //% blockIdentity="blocks.block" enumval=2 block="Grass Block"
    //% jres alias=GRASS
    Grass = 2,
    //% blockIdentity="blocks.block" enumval=0 block="Air"
    //% jres alias=AIR
    Air = 0,
    //% blockIdentity="blocks.block" enumval=1 block="Stone"
    //% jres alias=STONE
    Stone = 1,
    //% blockIdentity="blocks.block" enumval=65537 block="Granite"
    //% jres alias=GRANITE
    Granite = 65537,
    //% blockIdentity="blocks.block" enumval=131073 block="Polished Granite"
    //% jres alias=POLISHED_GRANITE
    PolishedGranite = 131073,
    //% blockIdentity="blocks.block" enumval=196609 block="Diorite"
    //% jres alias=DIORITE
    Diorite = 196609,
    //% blockIdentity="blocks.block" enumval=262145 block="Polished Diorite"
    //% jres alias=POLISHED_DIORITE
    PolishedDiorite = 262145,
    //% blockIdentity="blocks.block" enumval=327681 block="Andesite"
    //% jres alias=ANDESITE
    Andesite = 327681,
    //% blockIdentity="blocks.block" enumval=393217 block="Polished Andesite"
    //% jres alias=POLISHED_ANDESITE
    PolishedAndesite = 393217,
    //% blockIdentity="blocks.block" enumval=3 block="Dirt"
    //% jres alias=DIRT
    Dirt = 3,
    //% blockIdentity="blocks.block" enumval=65539 block="Coarse Dirt"
    //% jres alias=COARSE_DIRT
    CoarseDirt = 65539,
    //% blockIdentity="blocks.block" enumval=4 block="Cobblestone"
    //% jres alias=COBBLESTONE
    Cobblestone = 4,
    //% blockIdentity="blocks.block" enumval=5 block="Oak Wood Planks"
    //% jres alias=PLANKS_OAK
    PlanksOak = 5,
    //% blockIdentity="blocks.block" enumval=65541 block="Spruce Wood Planks"
    //% jres alias=PLANKS_SPRUCE
    PlanksSpruce = 65541,
    //% blockIdentity="blocks.block" enumval=131077 block="Birch Wood Planks"
    //% jres alias=PLANKS_BIRCH
    PlanksBirch = 131077,
    //% blockIdentity="blocks.block" enumval=196613 block="Jungle Wood Planks"
    //% jres alias=PLANKS_JUNGLE
    PlanksJungle = 196613,
    //% blockIdentity="blocks.block" enumval=262149 block="Acacia Wood Planks"
    //% jres alias=PLANKS_ACACIA
    PlanksAcacia = 262149,
    //% blockIdentity="blocks.block" enumval=327685 block="Dark Oak Wood Planks"
    //% jres alias=PLANKS_DARK_OAK
    PlanksDarkOak = 327685,
    //% blockIdentity="blocks.block" enumval=6 block="Oak Sapling"
    //% jres alias=OAK_SAPLING
    OakSapling = 6,
    //% blockIdentity="blocks.block" enumval=65542 block="Spruce Sapling"
    //% jres alias=SPRUCE_SAPLING
    SpruceSapling = 65542,
    //% blockIdentity="blocks.block" enumval=131078 block="Birch Sapling"
    //% jres alias=BIRCH_SAPLING
    BirchSapling = 131078,
    //% blockIdentity="blocks.block" enumval=196614 block="Jungle Sapling"
    //% jres alias=JUNGLE_SAPLING
    JungleSapling = 196614,
    //% blockIdentity="blocks.block" enumval=262150 block="Acacia Sapling"
    //% jres alias=ACACIA_SAPLING
    AcaciaSapling = 262150,
    //% blockIdentity="blocks.block" enumval=327686 block="Dark Oak Sapling"
    //% jres alias=DARK_OAK_SAPLING
    DarkOakSapling = 327686,
    //% blockIdentity="blocks.block" enumval=7 block="Bedrock"
    //% jres alias=BEDROCK
    Bedrock = 7,
    //% blockIdentity="blocks.block" enumval=8 block="Water"
    //% jres alias=WATER
    Water = 8,
    //% blockIdentity="blocks.block" enumval=10 block="Lava"
    //% jres alias=LAVA
    Lava = 10,
    //% blockIdentity="blocks.block" enumval=12 block="Sand"
    //% jres alias=SAND
    Sand = 12,
    //% blockIdentity="blocks.block" enumval=65548 block="Red Sand"
    //% jres alias=RED_SAND
    RedSand = 65548,
    //% blockIdentity="blocks.block" enumval=13 block="Gravel"
    //% jres alias=GRAVEL
    Gravel = 13,
    //% blockIdentity="blocks.block" enumval=14 block="Gold Ore"
    //% jres alias=GOLD_ORE
    GoldOre = 14,
    //% blockIdentity="blocks.block" enumval=15 block="Iron Ore"
    //% jres alias=IRON_ORE
    IronOre = 15,
    //% blockIdentity="blocks.block" enumval=16 block="Coal Ore"
    //% jres alias=COAL_ORE
    CoalOre = 16,
    //% blockIdentity="blocks.block" enumval=17 block="Oak Wood"
    //% jres alias=LOG_OAK
    LogOak = 17,
    //% blockIdentity="blocks.block" enumval=65553 block="Spruce Wood"
    //% jres alias=LOG_SPRUCE
    LogSpruce = 65553,
    //% blockIdentity="blocks.block" enumval=131089 block="Birch Wood"
    //% jres alias=LOG_BIRCH
    LogBirch = 131089,
    //% blockIdentity="blocks.block" enumval=196625 block="Jungle Wood"
    //% jres alias=LOG_JUNGLE
    LogJungle = 196625,
    //% blockIdentity="blocks.block" enumval=18 block="Oak Leaves"
    //% jres alias=LEAVES_OAK
    LeavesOak = 18,
    //% blockIdentity="blocks.block" enumval=65554 block="Spruce Leaves"
    //% jres alias=LEAVES_SPRUCE
    LeavesSpruce = 65554,
    //% blockIdentity="blocks.block" enumval=131090 block="Birch Leaves"
    //% jres alias=LEAVES_BIRCH
    LeavesBirch = 131090,
    //% blockIdentity="blocks.block" enumval=196626 block="Jungle Leaves"
    //% jres alias=LEAVES_JUNGLE
    LeavesJungle = 196626,
    //% blockIdentity="blocks.block" enumval=19 block="Sponge"
    //% jres alias=SPONGE
    Sponge = 19,
    //% blockIdentity="blocks.block" enumval=65555 block="Wet Sponge"
    //% jres alias=WET_SPONGE
    WetSponge = 65555,
    //% blockIdentity="blocks.block" enumval=20 block="Glass"
    //% jres alias=GLASS
    Glass = 20,
    //% blockIdentity="blocks.block" enumval=21 block="Lapis Lazuli Ore"
    //% jres alias=LAPIS_ORE
    LapisOre = 21,
    //% blockIdentity="blocks.block" enumval=22 block="Lapis Lazuli Block"
    //% jres alias=LAPIS_LAZULI_BLOCK
    LapisLazuliBlock = 22,
    //% blockIdentity="blocks.block" enumval=196631 block="Dispenser"
    //% jres alias=DISPENSER
    Dispenser = 196631,
    //% blockIdentity="blocks.block" enumval=24 block="Sandstone"
    //% jres alias=SANDSTONE
    Sandstone = 24,
    //% blockIdentity="blocks.block" enumval=65560 block="Chiseled Sandstone"
    //% jres alias=CHISELED_SANDSTONE
    ChiseledSandstone = 65560,
    //% blockIdentity="blocks.block" enumval=131096 block="Smooth Sandstone"
    //% jres alias=SMOOTH_SANDSTONE
    SmoothSandstone = 131096,
    //% blockIdentity="blocks.block" enumval=25 block="Note Block"
    //% jres alias=NOTE_BLOCK
    NoteBlock = 25,
    //% blockIdentity="blocks.block" enumval=26 block="Bed"
    //% jres alias=BED
    Bed = 26,
    //% blockIdentity="blocks.block" enumval=27 block="Powered Rail"
    //% jres alias=POWERED_RAIL
    PoweredRail = 27,
    //% blockIdentity="blocks.block" enumval=28 block="Detector Rail"
    //% jres alias=DETECTOR_RAIL
    DetectorRail = 28,
    //% blockIdentity="blocks.block" enumval=29 block="Sticky Piston"
    //% jres alias=STICKY_PISTON
    StickyPiston = 29,
    //% blockIdentity="blocks.block" enumval=30 block="Cobweb"
    //% jres alias=COBWEB
    Cobweb = 30,
    //% blockIdentity="blocks.block" enumval=65567 block="Grass"
    //% jres alias=TALLGRASS
    Tallgrass = 65567,
    //% blockIdentity="blocks.block" enumval=131103 block="Fern"
    //% jres alias=FERN
    Fern = 131103,
    //% blockIdentity="blocks.block" enumval=32 block="Dead Bush"
    //% jres alias=DEAD_BUSH
    DeadBush = 32,
    //% blockIdentity="blocks.block" enumval=65569 block="Piston"
    //% jres alias=PISTON
    Piston = 65569,
    //% blockIdentity="blocks.block" enumval=35 block="White Wool"
    //% jres alias=WOOL
    Wool = 35,
    //% blockIdentity="blocks.block" enumval=65571 block="Orange Wool"
    //% jres alias=ORANGE_WOOL
    OrangeWool = 65571,
    //% blockIdentity="blocks.block" enumval=131107 block="Magenta Wool"
    //% jres alias=MAGENTA_WOOL
    MagentaWool = 131107,
    //% blockIdentity="blocks.block" enumval=196643 block="Light Blue Wool"
    //% jres alias=LIGHT_BLUE_WOOL
    LightBlueWool = 196643,
    //% blockIdentity="blocks.block" enumval=262179 block="Yellow Wool"
    //% jres alias=YELLOW_WOOL
    YellowWool = 262179,
    //% blockIdentity="blocks.block" enumval=327715 block="Lime Wool"
    //% jres alias=LIME_WOOL
    LimeWool = 327715,
    //% blockIdentity="blocks.block" enumval=393251 block="Pink Wool"
    //% jres alias=PINK_WOOL
    PinkWool = 393251,
    //% blockIdentity="blocks.block" enumval=458787 block="Gray Wool"
    //% jres alias=GRAY_WOOL
    GrayWool = 458787,
    //% blockIdentity="blocks.block" enumval=524323 block="Light Gray Wool"
    //% jres alias=LIGHT_GRAY_WOOL
    LightGrayWool = 524323,
    //% blockIdentity="blocks.block" enumval=589859 block="Cyan Wool"
    //% jres alias=CYAN_WOOL
    CyanWool = 589859,
    //% blockIdentity="blocks.block" enumval=655395 block="Purple Wool"
    //% jres alias=PURPLE_WOOL
    PurpleWool = 655395,
    //% blockIdentity="blocks.block" enumval=720931 block="Blue Wool"
    //% jres alias=BLUE_WOOL
    BlueWool = 720931,
    //% blockIdentity="blocks.block" enumval=786467 block="Brown Wool"
    //% jres alias=BROWN_WOOL
    BrownWool = 786467,
    //% blockIdentity="blocks.block" enumval=852003 block="Green Wool"
    //% jres alias=GREEN_WOOL
    GreenWool = 852003,
    //% blockIdentity="blocks.block" enumval=917539 block="Red Wool"
    //% jres alias=RED_WOOL
    RedWool = 917539,
    //% blockIdentity="blocks.block" enumval=983075 block="Black Wool"
    //% jres alias=BLACK_WOOL
    BlackWool = 983075,
    //% blockIdentity="blocks.block" enumval=37 block="Dandelion"
    //% jres alias=YELLOW_FLOWER
    YellowFlower = 37,
    //% blockIdentity="blocks.block" enumval=38 block="Poppy"
    //% jres alias=POPPY
    Poppy = 38,
    //% blockIdentity="blocks.block" enumval=65574 block="Blue Orchid"
    //% jres alias=BLUE_ORCHID
    BlueOrchid = 65574,
    //% blockIdentity="blocks.block" enumval=131110 block="Allium"
    //% jres alias=ALLIUM
    Allium = 131110,
    //% blockIdentity="blocks.block" enumval=196646 block="Azure Bluet"
    //% jres alias=AZURE_BLUET
    AzureBluet = 196646,
    //% blockIdentity="blocks.block" enumval=262182 block="Red Tulip"
    //% jres alias=RED_TULIP
    RedTulip = 262182,
    //% blockIdentity="blocks.block" enumval=327718 block="Orange Tulip"
    //% jres alias=ORANGE_TULIP
    OrangeTulip = 327718,
    //% blockIdentity="blocks.block" enumval=393254 block="White Tulip"
    //% jres alias=WHITE_TULIP
    WhiteTulip = 393254,
    //% blockIdentity="blocks.block" enumval=458790 block="Pink Tulip"
    //% jres alias=PINK_TULIP
    PinkTulip = 458790,
    //% blockIdentity="blocks.block" enumval=524326 block="Oxeye Daisy"
    //% jres alias=OXEYE_DAISY
    OxeyeDaisy = 524326,
    //% blockIdentity="blocks.block" enumval=674 block="Bamboo"
    //% jres alias=BAMBOO
    Bamboo = 674,
    //% blockIdentity="blocks.block" enumval=589862 block="Cornflower"
    //% jres alias=CORNFLOWER
    Cornflower = 589862,
    //% blockIdentity="blocks.block" enumval=655398 block="Lily of the Valley"
    //% jres alias=LILY_OF_THE_VALLEY
    LilyOfTheValley = 655398,
    //% blockIdentity="blocks.block" enumval=39 block="Mushroom"
    //% jres alias=BROWN_MUSHROOM
    BrownMushroom = 39,
    //% blockIdentity="blocks.block" enumval=40 block="Mushroom"
    //% jres alias=RED_MUSHROOM
    RedMushroom = 40,
    //% blockIdentity="blocks.block" enumval=41 block="Block of Gold"
    //% jres alias=GOLD_BLOCK
    GoldBlock = 41,
    //% blockIdentity="blocks.block" enumval=42 block="Block of Iron"
    //% jres alias=IRON_BLOCK
    IronBlock = 42,
    //% blockIdentity="blocks.block" enumval=43 block="Double Stone Slab"
    //% jres alias=DOUBLE_STONE_SLAB
    DoubleStoneSlab = 43,
    //% blockIdentity="blocks.block" enumval=44 block="Stone Slab"
    //% jres alias=STONE_SLAB
    StoneSlab = 44,
    //% blockIdentity="blocks.block" enumval=65580 block="Sandstone Slab"
    //% jres alias=SANDSTONE_SLAB
    SandstoneSlab = 65580,
    //% blockIdentity="blocks.block" enumval=196652 block="Cobblestone Slab"
    //% jres alias=COBBLESTONE_SLAB
    CobblestoneSlab = 196652,
    //% blockIdentity="blocks.block" enumval=262188 block="Bricks Slab"
    //% jres alias=BRICKS_SLAB
    BricksSlab = 262188,
    //% blockIdentity="blocks.block" enumval=327724 block="Stone Bricks Slab"
    //% jres alias=STONE_BRICKS_SLAB
    StoneBricksSlab = 327724,
    //% blockIdentity="blocks.block" enumval=393260 block="Quartz Slab"
    //% jres alias=QUARTZ_SLAB
    QuartzSlab = 393260,
    //% blockIdentity="blocks.block" enumval=458796 block="Nether Brick Slab"
    //% jres alias=NETHER_BRICK_SLAB
    NetherBrickSlab = 458796,
    //% blockIdentity="blocks.block" enumval=45 block="Brick Block"
    //% jres alias=BRICKS
    Bricks = 45,
    //% blockIdentity="blocks.block" enumval=46 block="TNT"
    //% jres alias=TNT
    TNT = 46,
    //% blockIdentity="blocks.block" enumval=47 block="Bookshelf"
    //% jres alias=BOOKSHELF
    Bookshelf = 47,
    //% blockIdentity="blocks.block" enumval=48 block="Moss Stone"
    //% jres alias=MOSS_STONE
    MossStone = 48,
    //% blockIdentity="blocks.block" enumval=49 block="Obsidian"
    //% jres alias=OBSIDIAN
    Obsidian = 49,
    //% blockIdentity="blocks.block" enumval=50 block="Torch"
    //% jres alias=TORCH
    Torch = 50,
    //% blockIdentity="blocks.block" enumval=51 block="Fire"
    //% jres alias=FIRE
    Fire = 51,
    //% blockIdentity="blocks.block" enumval=52 block="Monster Spawner"
    //% jres alias=MONSTER_SPAWNER
    MonsterSpawner = 52,
    //% blockIdentity="blocks.block" enumval=53 block="Oak Wood Stairs"
    //% jres alias=OAK_WOOD_STAIRS
    OakWoodStairs = 53,
    //% blockIdentity="blocks.block" enumval=54 block="Chest"
    //% jres alias=CHEST
    Chest = 54,
    //% blockIdentity="blocks.block" enumval=55 block="Redstone Dust"
    //% jres alias=REDSTONE_WIRE
    RedstoneWire = 55,
    //% blockIdentity="blocks.block" enumval=56 block="Diamond Ore"
    //% jres alias=DIAMOND_ORE
    DiamondOre = 56,
    //% blockIdentity="blocks.block" enumval=57 block="Block of Diamond"
    //% jres alias=DIAMOND_BLOCK
    DiamondBlock = 57,
    //% blockIdentity="blocks.block" enumval=58 block="Crafting Table"
    //% jres alias=CRAFTING_TABLE
    CraftingTable = 58,
    //% blockIdentity="blocks.block" enumval=59 block="Crops"
    //% jres alias=CROPS
    Crops = 59,
    //% blockIdentity="blocks.block" enumval=60 block="Farmland"
    //% jres alias=FARMLAND
    Farmland = 60,
    //% blockIdentity="blocks.block" enumval=61 block="Furnace"
    //% jres alias=FURNACE
    Furnace = 61,
    //% blockIdentity="blocks.block" enumval=63 block="Sign"
    //% jres alias=SIGN
    Sign = 63,
    //% blockIdentity="blocks.block" enumval=65 block="Ladder"
    //% jres alias=LADDER
    Ladder = 65,
    //% blockIdentity="blocks.block" enumval=66 block="Rail"
    //% jres alias=RAIL
    Rail = 66,
    //% blockIdentity="blocks.block" enumval=67 block="Cobblestone Stairs"
    //% jres alias=COBBLESTONE_STAIRS
    CobblestoneStairs = 67,
    //% blockIdentity="blocks.block" enumval=69 block="Lever"
    //% jres alias=LEVER
    Lever = 69,
    //% blockIdentity="blocks.block" enumval=70 block="Stone Pressure Plate"
    //% jres alias=STONE_PRESSURE_PLATE
    StonePressurePlate = 70,
    //% blockIdentity="blocks.block" enumval=72 block="Oak Pressure Plate"
    //% jres alias=WOODEN_PRESSURE_PLATE
    WoodenPressurePlate = 72,
    //% blockIdentity="blocks.block" enumval=73 block="Redstone Ore"
    //% jres alias=REDSTONE_ORE
    RedstoneOre = 73,
    //% blockIdentity="blocks.block" enumval=76 block="Redstone Torch"
    //% jres alias=REDSTONE_TORCH
    RedstoneTorch = 76,
    //% blockIdentity="blocks.block" enumval=327757 block="Stone Button"
    //% jres alias=STONE_BUTTON
    StoneButton = 327757,
    //% blockIdentity="blocks.block" enumval=78 block="Top Snow"
    //% jres alias=TOP_SNOW
    TopSnow = 78,
    //% blockIdentity="blocks.block" enumval=79 block="Ice"
    //% jres alias=ICE
    Ice = 79,
    //% blockIdentity="blocks.block" enumval=80 block="Snow"
    //% jres alias=SNOW
    Snow = 80,
    //% blockIdentity="blocks.block" enumval=81 block="Cactus"
    //% jres alias=CACTUS
    Cactus = 81,
    //% blockIdentity="blocks.block" enumval=82 block="Clay Block"
    //% jres alias=CLAY
    Clay = 82,
    //% blockIdentity="blocks.block" enumval=83 block="Sugar cane"
    //% jres alias=SUGAR_CANE
    SugarCane = 83,
    //% blockIdentity="blocks.block" enumval=84 block="Jukebox"
    //% jres alias=JUKEBOX
    Jukebox = 84,
    //% blockIdentity="blocks.block" enumval=85 block="Oak Fence"
    //% jres alias=OAK_FENCE
    OakFence = 85,
    //% blockIdentity="blocks.block" enumval=65621 block="Spruce Fence"
    //% jres alias=SPRUCE_FENCE
    SpruceFence = 65621,
    //% blockIdentity="blocks.block" enumval=131157 block="Birch Fence"
    //% jres alias=BIRCH_FENCE
    BirchFence = 131157,
    //% blockIdentity="blocks.block" enumval=196693 block="Jungle Fence"
    //% jres alias=JUNGLE_FENCE
    JungleFence = 196693,
    //% blockIdentity="blocks.block" enumval=262229 block="Acacia Fence"
    //% jres alias=ACACIA_FENCE
    AcaciaFence = 262229,
    //% blockIdentity="blocks.block" enumval=327765 block="Dark Oak Fence"
    //% jres alias=DARK_OAK_FENCE
    DarkOakFence = 327765,
    //% blockIdentity="blocks.block" enumval=86 block="Pumpkin"
    //% jres alias=PUMPKIN
    Pumpkin = 86,
    //% blockIdentity="blocks.block" enumval=87 block="Netherrack"
    //% jres alias=NETHERRACK
    Netherrack = 87,
    //% blockIdentity="blocks.block" enumval=88 block="Soul Sand"
    //% jres alias=SOUL_SAND
    SoulSand = 88,
    //% blockIdentity="blocks.block" enumval=89 block="Glowstone"
    //% jres alias=GLOWSTONE
    Glowstone = 89,
    //% blockIdentity="blocks.block" enumval=91 block="Jack o'Lantern"
    //% jres alias=JACK_O_LANTERN
    JackOLantern = 91,
    //% blockIdentity="blocks.block" enumval=92 block="Cake"
    //% jres alias=CAKE
    Cake = 92,
    //% blockIdentity="blocks.block" enumval=93 block="Unpowered Repeater"
    //% jres alias=UNPOWERED_REPEATER
    UnpoweredRepeater = 93,
    //% blockIdentity="blocks.block" enumval=96 block="Oak Trapdoor"
    //% jres alias=WOODEN_TRAPDOOR
    WoodenTrapdoor = 96,
    //% blockIdentity="blocks.block" enumval=97 block="Stone Monster Egg"
    //% jres alias=STONE_MONSTER_EGG
    StoneMonsterEgg = 97,
    //% blockIdentity="blocks.block" enumval=65633 block="Cobblestone Monster Egg"
    //% jres alias=COBBLESTONE_MONSTER_EGG
    CobblestoneMonsterEgg = 65633,
    //% blockIdentity="blocks.block" enumval=131169 block="Stone Brick Monster Egg"
    //% jres alias=STONE_BRICK_MONSTER_EGG
    StoneBrickMonsterEgg = 131169,
    //% blockIdentity="blocks.block" enumval=196705 block="Mossy Stone Brick Monster Egg"
    //% jres alias=MOSSY_STONE_BRICK_MONSTER_EGG
    MossyStoneBrickMonsterEgg = 196705,
    //% blockIdentity="blocks.block" enumval=262241 block="Cracked Stone Brick Monster Egg"
    //% jres alias=CRACKED_STONE_BRICK_MONSTER_EGG
    CrackedStoneBrickMonsterEgg = 262241,
    //% blockIdentity="blocks.block" enumval=327777 block="Chiseled Stone Brick Monster Egg"
    //% jres alias=CHISELED_STONE_BRICK_MONSTER_EGG
    ChiseledStoneBrickMonsterEgg = 327777,
    //% blockIdentity="blocks.block" enumval=98 block="Stone Bricks"
    //% jres alias=STONE_BRICKS
    StoneBricks = 98,
    //% blockIdentity="blocks.block" enumval=65634 block="Mossy Stone Bricks"
    //% jres alias=MOSSY_STONE_BRICKS
    MossyStoneBricks = 65634,
    //% blockIdentity="blocks.block" enumval=131170 block="Cracked Stone Bricks"
    //% jres alias=CRACKED_STONE_BRICKS
    CrackedStoneBricks = 131170,
    //% blockIdentity="blocks.block" enumval=196706 block="Chiseled Stone Bricks"
    //% jres alias=CHISELED_STONE_BRICKS
    ChiseledStoneBricks = 196706,
    //% blockIdentity="blocks.block" enumval=99 block="Mushroom"
    //% jres
    Mushroom0 = 99,
    //% blockIdentity="blocks.block" enumval=917603 block="Mushroom"
    //% jres
    Mushroom14 = 917603,
    //% blockIdentity="blocks.block" enumval=983139 block="Mushroom"
    //% jres
    Mushroom15 = 983139,
    //% blockIdentity="blocks.block" enumval=917604 block="Mushroom"
    //% jres alias=RED_MUSHROOM_BLOCK
    RedMushroomBlock = 917604,
    //% blockIdentity="blocks.block" enumval=101 block="Iron Bars"
    //% jres alias=IRON_BARS
    IronBars = 101,
    //% blockIdentity="blocks.block" enumval=102 block="Glass Pane"
    //% jres alias=GLASS_PANE
    GlassPane = 102,
    //% blockIdentity="blocks.block" enumval=103 block="Melon"
    //% jres alias=MELON_BLOCK
    MelonBlock = 103,
    //% blockIdentity="blocks.block" enumval=104 block="Pumpkin Stem"
    //% jres alias=PUMPKIN_STEM
    PumpkinStem = 104,
    //% blockIdentity="blocks.block" enumval=105 block="Melon Stem"
    //% jres alias=MELON_STEM
    MelonStem = 105,
    //% blockIdentity="blocks.block" enumval=106 block="Vines"
    //% jres alias=VINES
    Vines = 106,
    //% blockIdentity="blocks.block" enumval=107 block="Oak Fence Gate"
    //% jres alias=OAK_FENCE_GATE
    OakFenceGate = 107,
    //% blockIdentity="blocks.block" enumval=108 block="Brick Stairs"
    //% jres alias=BRICK_STAIRS
    BrickStairs = 108,
    //% blockIdentity="blocks.block" enumval=109 block="Stone Brick Stairs"
    //% jres alias=STONE_BRICK_STAIRS
    StoneBrickStairs = 109,
    //% blockIdentity="blocks.block" enumval=110 block="Mycelium"
    //% jres alias=MYCELIUM
    Mycelium = 110,
    //% blockIdentity="blocks.block" enumval=111 block="Lily Pad"
    //% jres alias=LILY_PAD
    LilyPad = 111,
    //% blockIdentity="blocks.block" enumval=112 block="Nether Brick Block"
    //% jres alias=NETHER_BRICK
    NetherBrick = 112,
    //% blockIdentity="blocks.block" enumval=113 block="Nether Brick Fence"
    //% jres alias=NETHER_BRICK_FENCE
    NetherBrickFence = 113,
    //% blockIdentity="blocks.block" enumval=114 block="Nether Brick Stairs"
    //% jres alias=NETHER_BRICK_STAIRS
    NetherBrickStairs = 114,
    //% blockIdentity="blocks.block" enumval=115 block="Nether Wart"
    //% jres alias=NETHER_WART
    NetherWart = 115,
    //% blockIdentity="blocks.block" enumval=116 block="Enchantment Table"
    //% jres alias=ENCHANTMENT_TABLE
    EnchantmentTable = 116,
    //% blockIdentity="blocks.block" enumval=117 block="Brewing Stand"
    //% jres alias=BREWING_STAND
    BrewingStand = 117,
    //% blockIdentity="blocks.block" enumval=118 block="Cauldron"
    //% jres alias=CAULDRON
    Cauldron = 118,
    //% blockIdentity="blocks.block" enumval=120 block="End Portal"
    //% jres alias=END_PORTAL
    EndPortal = 120,
    //% blockIdentity="blocks.block" enumval=121 block="End Stone"
    //% jres alias=ENDSTONE
    Endstone = 121,
    //% blockIdentity="blocks.block" enumval=122 block="Dragon Egg"
    //% jres alias=DRAGON_EGG
    DragonEgg = 122,
    //% blockIdentity="blocks.block" enumval=123 block="Redstone Lamp"
    //% jres alias=REDSTONE_LAMP
    RedstoneLamp = 123,
    //% blockIdentity="blocks.block" enumval=196733 block="Dropper"
    //% jres alias=DROPPER
    Dropper = 196733,
    //% blockIdentity="blocks.block" enumval=126 block="Activator Rail"
    //% jres alias=ACTIVATOR_RAIL
    ActivatorRail = 126,
    //% blockIdentity="blocks.block" enumval=127 block="Cocoa"
    //% jres alias=COCOA
    Cocoa = 127,
    //% blockIdentity="blocks.block" enumval=128 block="Sandstone Stairs"
    //% jres alias=SANDSTONE_STAIRS
    SandstoneStairs = 128,
    //% blockIdentity="blocks.block" enumval=129 block="Emerald Ore"
    //% jres alias=EMERALD_ORE
    EmeraldOre = 129,
    //% blockIdentity="blocks.block" enumval=130 block="Ender Chest"
    //% jres alias=ENDER_CHEST
    EnderChest = 130,
    //% blockIdentity="blocks.block" enumval=131 block="Tripwire Hook"
    //% jres alias=TRIPWIRE_HOOK
    TripwireHook = 131,
    //% blockIdentity="blocks.block" enumval=132 block="Tripwire"
    //% jres alias=TRIPWIRE
    Tripwire = 132,
    //% blockIdentity="blocks.block" enumval=133 block="Block of Emerald"
    //% jres alias=EMERALD_BLOCK
    EmeraldBlock = 133,
    //% blockIdentity="blocks.block" enumval=134 block="Spruce Wood Stairs"
    //% jres alias=SPRUCE_WOOD_STAIRS
    SpruceWoodStairs = 134,
    //% blockIdentity="blocks.block" enumval=135 block="Birch Wood Stairs"
    //% jres alias=BIRCH_WOOD_STAIRS
    BirchWoodStairs = 135,
    //% blockIdentity="blocks.block" enumval=136 block="Jungle Wood Stairs"
    //% jres alias=JUNGLE_WOOD_STAIRS
    JungleWoodStairs = 136,
    //% blockIdentity="blocks.block" enumval=138 block="Beacon"
    //% jres alias=BEACON
    Beacon = 138,
    //% blockIdentity="blocks.block" enumval=139 block="Cobblestone Wall"
    //% jres alias=COBBLESTONE_WALL
    CobblestoneWall = 139,
    //% blockIdentity="blocks.block" enumval=65675 block="Mossy Cobblestone Wall"
    //% jres alias=MOSSY_COBBLESTONE_WALL
    MossyCobblestoneWall = 65675,
    //% blockIdentity="blocks.block" enumval=140 block="Flower Pot"
    //% jres alias=FLOWER_POT
    FlowerPot = 140,
    //% blockIdentity="blocks.block" enumval=141 block="Carrots"
    //% jres alias=CARROTS
    Carrots = 141,
    //% blockIdentity="blocks.block" enumval=142 block="Potatoes"
    //% jres alias=POTATOES
    Potatoes = 142,
    //% blockIdentity="blocks.block" enumval=327823 block="Oak Button"
    //% jres alias=WOODEN_BUTTON
    WoodenButton = 327823,
    //% blockIdentity="blocks.block" enumval=144 block="Skeleton Skull"
    //% jres alias=SKELETON_SKULL
    SkeletonSkull = 144,
    //% blockIdentity="blocks.block" enumval=145 block="Anvil"
    //% jres alias=ANVIL
    Anvil = 145,
    //% blockIdentity="blocks.block" enumval=65681 block="Slightly Damaged Anvil"
    //% jres alias=SLIGHTLY_DAMAGED_ANVIL
    SlightlyDamagedAnvil = 65681,
    //% blockIdentity="blocks.block" enumval=131217 block="Very Damaged Anvil"
    //% jres alias=VERY_DAMAGED_ANVIL
    VeryDamagedAnvil = 131217,
    //% blockIdentity="blocks.block" enumval=146 block="Trapped Chest"
    //% jres alias=TRAPPED_CHEST
    TrappedChest = 146,
    //% blockIdentity="blocks.block" enumval=147 block="Weighted Pressure Plate (Light)"
    //% jres alias=WEIGHTED_PRESSURE_PLATE_LIGHT
    WeightedPressurePlateLight = 147,
    //% blockIdentity="blocks.block" enumval=148 block="Weighted Pressure Plate (Heavy)"
    //% jres alias=WEIGHTED_PRESSURE_PLATE_HEAVY
    WeightedPressurePlateHeavy = 148,
    //% blockIdentity="blocks.block" enumval=149 block="Unpowered Comparator"
    //% jres alias=UNPOWERED_COMPARATOR
    UnpoweredComparator = 149,
    //% blockIdentity="blocks.block" enumval=151 block="Daylight Sensor"
    //% jres alias=DAYLIGHT_SENSOR
    DaylightSensor = 151,
    //% blockIdentity="blocks.block" enumval=152 block="Block of Redstone"
    //% jres alias=REDSTONE_BLOCK
    RedstoneBlock = 152,
    //% blockIdentity="blocks.block" enumval=153 block="Nether Quartz Ore"
    //% jres alias=QUARTZ_ORE
    QuartzOre = 153,
    //% blockIdentity="blocks.block" enumval=154 block="Hopper"
    //% jres alias=HOPPER
    Hopper = 154,
    //% blockIdentity="blocks.block" enumval=155 block="Block of Quartz"
    //% jres alias=BLOCK_OF_QUARTZ
    BlockOfQuartz = 155,
    //% blockIdentity="blocks.block" enumval=65691 block="Chiseled Quartz Block"
    //% jres alias=CHISELED_QUARTZ_BLOCK
    ChiseledQuartzBlock = 65691,
    //% blockIdentity="blocks.block" enumval=131227 block="Pillar Quartz Block"
    //% jres alias=PILLAR_QUARTZ_BLOCK
    PillarQuartzBlock = 131227,
    //% blockIdentity="blocks.block" enumval=156 block="Quartz Stairs"
    //% jres alias=QUARTZ_STAIRS
    QuartzStairs = 156,
    //% blockIdentity="blocks.block" enumval=157 block="Double Wooden Slab"
    //% jres alias=DOUBLE_WOODEN_SLAB
    DoubleWoodenSlab = 157,
    //% blockIdentity="blocks.block" enumval=158 block="Oak Wood Slab"
    //% jres alias=OAK_WOOD_SLAB
    OakWoodSlab = 158,
    //% blockIdentity="blocks.block" enumval=65694 block="Spruce Wood Slab"
    //% jres alias=SPRUCE_WOOD_SLAB
    SpruceWoodSlab = 65694,
    //% blockIdentity="blocks.block" enumval=131230 block="Birch Wood Slab"
    //% jres alias=BIRCH_WOOD_SLAB
    BirchWoodSlab = 131230,
    //% blockIdentity="blocks.block" enumval=196766 block="Jungle Wood Slab"
    //% jres alias=JUNGLE_WOOD_SLAB
    JungleWoodSlab = 196766,
    //% blockIdentity="blocks.block" enumval=262302 block="Acacia Wood Slab"
    //% jres alias=ACACIA_WOOD_SLAB
    AcaciaWoodSlab = 262302,
    //% blockIdentity="blocks.block" enumval=327838 block="Dark Oak Wood Slab"
    //% jres alias=DARK_OAK_WOOD_SLAB
    DarkOakWoodSlab = 327838,
    //% blockIdentity="blocks.block" enumval=159 block="White Terracotta"
    //% jres alias=WHITE_TERRACOTTA
    WhiteTerracotta = 159,
    //% blockIdentity="blocks.block" enumval=65695 block="Orange Terracotta"
    //% jres alias=ORANGE_TERRACOTTA
    OrangeTerracotta = 65695,
    //% blockIdentity="blocks.block" enumval=131231 block="Magenta Terracotta"
    //% jres alias=MAGENTA_TERRACOTTA
    MagentaTerracotta = 131231,
    //% blockIdentity="blocks.block" enumval=196767 block="Light Blue Terracotta"
    //% jres alias=LIGHT_BLUE_TERRACOTTA
    LightBlueTerracotta = 196767,
    //% blockIdentity="blocks.block" enumval=262303 block="Yellow Terracotta"
    //% jres alias=YELLOW_TERRACOTTA
    YellowTerracotta = 262303,
    //% blockIdentity="blocks.block" enumval=327839 block="Lime Terracotta"
    //% jres alias=LIME_TERRACOTTA
    LimeTerracotta = 327839,
    //% blockIdentity="blocks.block" enumval=393375 block="Pink Terracotta"
    //% jres alias=PINK_TERRACOTTA
    PinkTerracotta = 393375,
    //% blockIdentity="blocks.block" enumval=458911 block="Gray Terracotta"
    //% jres alias=GRAY_TERRACOTTA
    GrayTerracotta = 458911,
    //% blockIdentity="blocks.block" enumval=524447 block="Light Gray Terracotta"
    //% jres alias=LIGHT_GRAY_TERRACOTTA
    LightGrayTerracotta = 524447,
    //% blockIdentity="blocks.block" enumval=589983 block="Cyan Terracotta"
    //% jres alias=CYAN_TERRACOTTA
    CyanTerracotta = 589983,
    //% blockIdentity="blocks.block" enumval=655519 block="Purple Terracotta"
    //% jres alias=PURPLE_TERRACOTTA
    PurpleTerracotta = 655519,
    //% blockIdentity="blocks.block" enumval=721055 block="Blue Terracotta"
    //% jres alias=BLUE_TERRACOTTA
    BlueTerracotta = 721055,
    //% blockIdentity="blocks.block" enumval=786591 block="Brown Terracotta"
    //% jres alias=BROWN_TERRACOTTA
    BrownTerracotta = 786591,
    //% blockIdentity="blocks.block" enumval=852127 block="Green Terracotta"
    //% jres alias=GREEN_TERRACOTTA
    GreenTerracotta = 852127,
    //% blockIdentity="blocks.block" enumval=917663 block="Red Terracotta"
    //% jres alias=RED_TERRACOTTA
    RedTerracotta = 917663,
    //% blockIdentity="blocks.block" enumval=983199 block="Black Terracotta"
    //% jres alias=BLACK_TERRACOTTA
    BlackTerracotta = 983199,
    //% blockIdentity="blocks.block" enumval=160 block="White Stained Glass Pane"
    //% jres alias=WHITE_STAINED_GLASS_PANE
    WhiteStainedGlassPane = 160,
    //% blockIdentity="blocks.block" enumval=65696 block="Orange Stained Glass Pane"
    //% jres alias=ORANGE_STAINED_GLASS_PANE
    OrangeStainedGlassPane = 65696,
    //% blockIdentity="blocks.block" enumval=131232 block="Magenta Stained Glass Pane"
    //% jres alias=MAGENTA_STAINED_GLASS_PANE
    MagentaStainedGlassPane = 131232,
    //% blockIdentity="blocks.block" enumval=196768 block="Light Blue Stained Glass Pane"
    //% jres alias=LIGHT_BLUE_STAINED_GLASS_PANE
    LightBlueStainedGlassPane = 196768,
    //% blockIdentity="blocks.block" enumval=262304 block="Yellow Stained Glass Pane"
    //% jres alias=YELLOW_STAINED_GLASS_PANE
    YellowStainedGlassPane = 262304,
    //% blockIdentity="blocks.block" enumval=327840 block="Lime Stained Glass Pane"
    //% jres alias=LIME_STAINED_GLASS_PANE
    LimeStainedGlassPane = 327840,
    //% blockIdentity="blocks.block" enumval=393376 block="Pink Stained Glass Pane"
    //% jres alias=PINK_STAINED_GLASS_PANE
    PinkStainedGlassPane = 393376,
    //% blockIdentity="blocks.block" enumval=458912 block="Gray Stained Glass Pane"
    //% jres alias=GRAY_STAINED_GLASS_PANE
    GrayStainedGlassPane = 458912,
    //% blockIdentity="blocks.block" enumval=524448 block="Light Gray Stained Glass Pane"
    //% jres alias=LIGHT_GRAY_STAINED_GLASS_PANE
    LightGrayStainedGlassPane = 524448,
    //% blockIdentity="blocks.block" enumval=589984 block="Cyan Stained Glass Pane"
    //% jres alias=CYAN_STAINED_GLASS_PANE
    CyanStainedGlassPane = 589984,
    //% blockIdentity="blocks.block" enumval=655520 block="Purple Stained Glass Pane"
    //% jres alias=PURPLE_STAINED_GLASS_PANE
    PurpleStainedGlassPane = 655520,
    //% blockIdentity="blocks.block" enumval=721056 block="Blue Stained Glass Pane"
    //% jres alias=BLUE_STAINED_GLASS_PANE
    BlueStainedGlassPane = 721056,
    //% blockIdentity="blocks.block" enumval=786592 block="Brown Stained Glass Pane"
    //% jres alias=BROWN_STAINED_GLASS_PANE
    BrownStainedGlassPane = 786592,
    //% blockIdentity="blocks.block" enumval=852128 block="Green Stained Glass Pane"
    //% jres alias=GREEN_STAINED_GLASS_PANE
    GreenStainedGlassPane = 852128,
    //% blockIdentity="blocks.block" enumval=917664 block="Red Stained Glass Pane"
    //% jres alias=RED_STAINED_GLASS_PANE
    RedStainedGlassPane = 917664,
    //% blockIdentity="blocks.block" enumval=983200 block="Black Stained Glass Pane"
    //% jres alias=BLACK_STAINED_GLASS_PANE
    BlackStainedGlassPane = 983200,
    //% blockIdentity="blocks.block" enumval=161 block="Acacia Leaves"
    //% jres alias=ACACIA_LEAVES
    AcaciaLeaves = 161,
    //% blockIdentity="blocks.block" enumval=65697 block="Dark Oak Leaves"
    //% jres alias=DARK_OAK_LEAVES
    DarkOakLeaves = 65697,
    //% blockIdentity="blocks.block" enumval=162 block="Acacia Wood"
    //% jres alias=LOG_ACACIA
    LogAcacia = 162,
    //% blockIdentity="blocks.block" enumval=65698 block="Dark Oak Wood"
    //% jres alias=LOG_DARK_OAK
    LogDarkOak = 65698,
    //% blockIdentity="blocks.block" enumval=163 block="Acacia Wood Stairs"
    //% jres alias=ACACIA_WOOD_STAIRS
    AcaciaWoodStairs = 163,
    //% blockIdentity="blocks.block" enumval=164 block="Dark Oak Wood Stairs"
    //% jres alias=DARK_OAK_WOOD_STAIRS
    DarkOakWoodStairs = 164,
    //% blockIdentity="blocks.block" enumval=165 block="Slime Block"
    //% jres alias=SLIME_BLOCK
    SlimeBlock = 165,
    //% blockIdentity="blocks.block" enumval=167 block="Iron Trapdoor"
    //% jres alias=IRON_TRAPDOOR
    IronTrapdoor = 167,
    //% blockIdentity="blocks.block" enumval=168 block="Prismarine"
    //% jres alias=PRISMARINE
    Prismarine = 168,
    //% blockIdentity="blocks.block" enumval=65704 block="Dark Prismarine"
    //% jres alias=DARK_PRISMARINE
    DarkPrismarine = 65704,
    //% blockIdentity="blocks.block" enumval=131240 block="Prismarine Bricks"
    //% jres alias=PRISMARINE_BRICKS
    PrismarineBricks = 131240,
    //% blockIdentity="blocks.block" enumval=169 block="Sea Lantern"
    //% jres alias=SEA_LANTERN
    SeaLantern = 169,
    //% blockIdentity="blocks.block" enumval=170 block="Hay Bale"
    //% jres alias=HAY_BLOCK
    HayBlock = 170,
    //% blockIdentity="blocks.block" enumval=171 block="White Carpet"
    //% jres alias=WHITE_CARPET
    WhiteCarpet = 171,
    //% blockIdentity="blocks.block" enumval=65707 block="Orange Carpet"
    //% jres alias=ORANGE_CARPET
    OrangeCarpet = 65707,
    //% blockIdentity="blocks.block" enumval=131243 block="Magenta Carpet"
    //% jres alias=MAGENTA_CARPET
    MagentaCarpet = 131243,
    //% blockIdentity="blocks.block" enumval=196779 block="Light Blue Carpet"
    //% jres alias=LIGHT_BLUE_CARPET
    LightBlueCarpet = 196779,
    //% blockIdentity="blocks.block" enumval=262315 block="Yellow Carpet"
    //% jres alias=YELLOW_CARPET
    YellowCarpet = 262315,
    //% blockIdentity="blocks.block" enumval=327851 block="Lime Carpet"
    //% jres alias=LIME_CARPET
    LimeCarpet = 327851,
    //% blockIdentity="blocks.block" enumval=393387 block="Pink Carpet"
    //% jres alias=PINK_CARPET
    PinkCarpet = 393387,
    //% blockIdentity="blocks.block" enumval=458923 block="Gray Carpet"
    //% jres alias=GRAY_CARPET
    GrayCarpet = 458923,
    //% blockIdentity="blocks.block" enumval=524459 block="Light Gray Carpet"
    //% jres alias=LIGHT_GRAY_CARPET
    LightGrayCarpet = 524459,
    //% blockIdentity="blocks.block" enumval=589995 block="Cyan Carpet"
    //% jres alias=CYAN_CARPET
    CyanCarpet = 589995,
    //% blockIdentity="blocks.block" enumval=655531 block="Purple Carpet"
    //% jres alias=PURPLE_CARPET
    PurpleCarpet = 655531,
    //% blockIdentity="blocks.block" enumval=721067 block="Blue Carpet"
    //% jres alias=BLUE_CARPET
    BlueCarpet = 721067,
    //% blockIdentity="blocks.block" enumval=786603 block="Brown Carpet"
    //% jres alias=BROWN_CARPET
    BrownCarpet = 786603,
    //% blockIdentity="blocks.block" enumval=852139 block="Green Carpet"
    //% jres alias=GREEN_CARPET
    GreenCarpet = 852139,
    //% blockIdentity="blocks.block" enumval=917675 block="Red Carpet"
    //% jres alias=RED_CARPET
    RedCarpet = 917675,
    //% blockIdentity="blocks.block" enumval=983211 block="Black Carpet"
    //% jres alias=BLACK_CARPET
    BlackCarpet = 983211,
    //% blockIdentity="blocks.block" enumval=172 block="Terracotta"
    //% jres alias=HARDENED_CLAY
    HardenedClay = 172,
    //% blockIdentity="blocks.block" enumval=173 block="Block of Coal"
    //% jres alias=COAL_BLOCK
    CoalBlock = 173,
    //% blockIdentity="blocks.block" enumval=174 block="Packed Ice"
    //% jres alias=PACKED_ICE
    PackedIce = 174,
    //% blockIdentity="blocks.block" enumval=175 block="Sunflower"
    //% jres alias=SUNFLOWER
    Sunflower = 175,
    //% blockIdentity="blocks.block" enumval=65711 block="Lilac"
    //% jres alias=LILAC
    Lilac = 65711,
    //% blockIdentity="blocks.block" enumval=131247 block="Double Tallgrass"
    //% jres alias=DOUBLE_TALLGRASS
    DoubleTallgrass = 131247,
    //% blockIdentity="blocks.block" enumval=196783 block="Large Fern"
    //% jres alias=LARGE_FERN
    LargeFern = 196783,
    //% blockIdentity="blocks.block" enumval=262319 block="Rose Bush"
    //% jres alias=ROSE_BUSH
    RoseBush = 262319,
    //% blockIdentity="blocks.block" enumval=327855 block="Peony"
    //% jres alias=PEONY
    Peony = 327855,
    //% blockIdentity="blocks.block" enumval=179 block="Red Sandstone"
    //% jres alias=RED_SANDSTONE
    RedSandstone = 179,
    //% blockIdentity="blocks.block" enumval=65715 block="Chiseled Red Sandstone"
    //% jres alias=CHISELED_RED_SANDSTONE
    ChiseledRedSandstone = 65715,
    //% blockIdentity="blocks.block" enumval=131251 block="Smooth Red Sandstone"
    //% jres alias=SMOOTH_RED_SANDSTONE
    SmoothRedSandstone = 131251,
    //% blockIdentity="blocks.block" enumval=180 block="Red Sandstone Stairs"
    //% jres alias=RED_SANDSTONE_STAIRS
    RedSandstoneStairs = 180,
    //% blockIdentity="blocks.block" enumval=181 block="Double Red Sandstone Slab"
    //% jres alias=DOUBLE_RED_SANDSTONE_SLAB
    DoubleRedSandstoneSlab = 181,
    //% blockIdentity="blocks.block" enumval=182 block="Red Sandstone Slab"
    //% jres alias=RED_SANDSTONE_SLAB
    RedSandstoneSlab = 182,
    //% blockIdentity="blocks.block" enumval=65718 block="Purpur Slab"
    //% jres alias=PURPUR_SLAB
    PurpurSlab = 65718,
    //% blockIdentity="blocks.block" enumval=131254 block="Prismarine Slab"
    //% jres alias=PRISMARINE_SLAB
    PrismarineSlab = 131254,
    //% blockIdentity="blocks.block" enumval=196790 block="Dark Prismarine Slab"
    //% jres alias=DARK_PRISMARINE_SLAB
    DarkPrismarineSlab = 196790,
    //% blockIdentity="blocks.block" enumval=262326 block="Prismarine Brick Slab"
    //% jres alias=PRISMARINE_BRICK_SLAB
    PrismarineBrickSlab = 262326,
    //% blockIdentity="blocks.block" enumval=183 block="Spruce Fence Gate"
    //% jres alias=SPRUCE_FENCE_GATE
    SpruceFenceGate = 183,
    //% blockIdentity="blocks.block" enumval=184 block="Birch Fence Gate"
    //% jres alias=BIRCH_FENCE_GATE
    BirchFenceGate = 184,
    //% blockIdentity="blocks.block" enumval=185 block="Jungle Fence Gate"
    //% jres alias=JUNGLE_FENCE_GATE
    JungleFenceGate = 185,
    //% blockIdentity="blocks.block" enumval=186 block="Dark Oak Fence Gate"
    //% jres alias=DARK_OAK_FENCE_GATE
    DarkOakFenceGate = 186,
    //% blockIdentity="blocks.block" enumval=187 block="Acacia Fence Gate"
    //% jres alias=ACACIA_FENCE_GATE
    AcaciaFenceGate = 187,
    //% blockIdentity="blocks.block" enumval=198 block="Grass Path"
    //% jres alias=GRASS_PATH
    GrassPath = 198,
    //% blockIdentity="blocks.block" enumval=199 block="Frame"
    //% jres alias=FRAME
    Frame = 199,
    //% blockIdentity="blocks.block" enumval=200 block="Chorus Flower"
    //% jres alias=CHORUS_FLOWER
    ChorusFlower = 200,
    //% blockIdentity="blocks.block" enumval=201 block="Purpur Block"
    //% jres alias=PURPUR_BLOCK
    PurpurBlock = 201,
    //% blockIdentity="blocks.block" enumval=131273 block="Purpur Pillar"
    //% jres alias=PURPUR_PILLAR
    PurpurPillar = 131273,
    //% blockIdentity="blocks.block" enumval=203 block="Purpur Stairs"
    //% jres alias=PURPUR_STAIRS
    PurpurStairs = 203,
    //% blockIdentity="blocks.block" enumval=1048781 block="Shulker Box"
    //% jres alias=SHULKER_BOX
    ShulkerBox = 1048781,
    //% blockIdentity="blocks.block" enumval=206 block="End Stone Bricks"
    //% jres alias=END_STONE_BRICKS
    EndStoneBricks = 206,
    //% blockIdentity="blocks.block" enumval=208 block="End Rod"
    //% jres alias=END_ROD
    EndRod = 208,
    //% blockIdentity="blocks.block" enumval=213 block="Magma Block"
    //% jres alias=MAGMA_BLOCK
    MagmaBlock = 213,
    //% blockIdentity="blocks.block" enumval=214 block="Nether Wart Block"
    //% jres alias=NETHER_WART_BLOCK
    NetherWartBlock = 214,
    //% blockIdentity="blocks.block" enumval=215 block="Red Nether Brick"
    //% jres alias=RED_NETHER_BRICK
    RedNetherBrick = 215,
    //% blockIdentity="blocks.block" enumval=216 block="Bone Block"
    //% jres alias=BONE_BLOCK
    BoneBlock = 216,
    //% blockIdentity="blocks.block" enumval=218 block="White Shulker Box"
    //% jres alias=WHITE_SHULKER_BOX
    WhiteShulkerBox = 218,
    //% blockIdentity="blocks.block" enumval=65754 block="Orange Shulker Box"
    //% jres alias=ORANGE_SHULKER_BOX
    OrangeShulkerBox = 65754,
    //% blockIdentity="blocks.block" enumval=131290 block="Magenta Shulker Box"
    //% jres alias=MAGENTA_SHULKER_BOX
    MagentaShulkerBox = 131290,
    //% blockIdentity="blocks.block" enumval=196826 block="Light Blue Shulker Box"
    //% jres alias=LIGHT_BLUE_SHULKER_BOX
    LightBlueShulkerBox = 196826,
    //% blockIdentity="blocks.block" enumval=262362 block="Yellow Shulker Box"
    //% jres alias=YELLOW_SHULKER_BOX
    YellowShulkerBox = 262362,
    //% blockIdentity="blocks.block" enumval=327898 block="Lime Shulker Box"
    //% jres alias=LIME_SHULKER_BOX
    LimeShulkerBox = 327898,
    //% blockIdentity="blocks.block" enumval=393434 block="Pink Shulker Box"
    //% jres alias=PINK_SHULKER_BOX
    PinkShulkerBox = 393434,
    //% blockIdentity="blocks.block" enumval=458970 block="Gray Shulker Box"
    //% jres alias=GRAY_SHULKER_BOX
    GrayShulkerBox = 458970,
    //% blockIdentity="blocks.block" enumval=524506 block="Silver Shulker Box"
    //% jres alias=SILVER_SHULKER_BOX
    SilverShulkerBox = 524506,
    //% blockIdentity="blocks.block" enumval=590042 block="Cyan Shulker Box"
    //% jres alias=CYAN_SHULKER_BOX
    CyanShulkerBox = 590042,
    //% blockIdentity="blocks.block" enumval=655578 block="Purple Shulker Box"
    //% jres alias=PURPLE_SHULKER_BOX
    PurpleShulkerBox = 655578,
    //% blockIdentity="blocks.block" enumval=721114 block="Blue Shulker Box"
    //% jres alias=BLUE_SHULKER_BOX
    BlueShulkerBox = 721114,
    //% blockIdentity="blocks.block" enumval=786650 block="Brown Shulker Box"
    //% jres alias=BROWN_SHULKER_BOX
    BrownShulkerBox = 786650,
    //% blockIdentity="blocks.block" enumval=852186 block="Green Shulker Box"
    //% jres alias=GREEN_SHULKER_BOX
    GreenShulkerBox = 852186,
    //% blockIdentity="blocks.block" enumval=917722 block="Red Shulker Box"
    //% jres alias=RED_SHULKER_BOX
    RedShulkerBox = 917722,
    //% blockIdentity="blocks.block" enumval=983258 block="Black Shulker Box"
    //% jres alias=BLACK_SHULKER_BOX
    BlackShulkerBox = 983258,
    //% blockIdentity="blocks.block" enumval=219 block="Purple Glazed Terracotta"
    //% jres alias=PURPLE_GLAZED_TERRACOTTA
    PurpleGlazedTerracotta = 219,
    //% blockIdentity="blocks.block" enumval=220 block="White Glazed Terracotta"
    //% jres alias=WHITE_GLAZED_TERRACOTTA
    WhiteGlazedTerracotta = 220,
    //% blockIdentity="blocks.block" enumval=221 block="Orange Glazed Terracotta"
    //% jres alias=ORANGE_GLAZED_TERRACOTTA
    OrangeGlazedTerracotta = 221,
    //% blockIdentity="blocks.block" enumval=222 block="Magenta Glazed Terracotta"
    //% jres alias=MAGENTA_GLAZED_TERRACOTTA
    MagentaGlazedTerracotta = 222,
    //% blockIdentity="blocks.block" enumval=223 block="Light Blue Glazed Terracotta"
    //% jres alias=LIGHT_BLUE_GLAZED_TERRACOTTA
    LightBlueGlazedTerracotta = 223,
    //% blockIdentity="blocks.block" enumval=224 block="Yellow Glazed Terracotta"
    //% jres alias=YELLOW_GLAZED_TERRACOTTA
    YellowGlazedTerracotta = 224,
    //% blockIdentity="blocks.block" enumval=225 block="Lime Glazed Terracotta"
    //% jres alias=LIME_GLAZED_TERRACOTTA
    LimeGlazedTerracotta = 225,
    //% blockIdentity="blocks.block" enumval=226 block="Pink Glazed Terracotta"
    //% jres alias=PINK_GLAZED_TERRACOTTA
    PinkGlazedTerracotta = 226,
    //% blockIdentity="blocks.block" enumval=227 block="Gray Glazed Terracotta"
    //% jres alias=GRAY_GLAZED_TERRACOTTA
    GrayGlazedTerracotta = 227,
    //% blockIdentity="blocks.block" enumval=228 block="Light Gray Glazed Terracotta"
    //% jres alias=LIGHT_GRAY_GLAZED_TERRACOTTA
    LightGrayGlazedTerracotta = 228,
    //% blockIdentity="blocks.block" enumval=229 block="Cyan Glazed Terracotta"
    //% jres alias=CYAN_GLAZED_TERRACOTTA
    CyanGlazedTerracotta = 229,
    //% blockIdentity="blocks.block" enumval=231 block="Blue Glazed Terracotta"
    //% jres alias=BLUE_GLAZED_TERRACOTTA
    BlueGlazedTerracotta = 231,
    //% blockIdentity="blocks.block" enumval=232 block="Brown Glazed Terracotta"
    //% jres alias=BROWN_GLAZED_TERRACOTTA
    BrownGlazedTerracotta = 232,
    //% blockIdentity="blocks.block" enumval=233 block="Green Glazed Terracotta"
    //% jres alias=GREEN_GLAZED_TERRACOTTA
    GreenGlazedTerracotta = 233,
    //% blockIdentity="blocks.block" enumval=234 block="Red Glazed Terracotta"
    //% jres alias=RED_GLAZED_TERRACOTTA
    RedGlazedTerracotta = 234,
    //% blockIdentity="blocks.block" enumval=235 block="Black Glazed Terracotta"
    //% jres alias=BLACK_GLAZED_TERRACOTTA
    BlackGlazedTerracotta = 235,
    //% blockIdentity="blocks.block" enumval=236 block="White Concrete"
    //% jres alias=WHITE_CONCRETE
    WhiteConcrete = 236,
    //% blockIdentity="blocks.block" enumval=65772 block="Orange Concrete"
    //% jres alias=ORANGE_CONCRETE
    OrangeConcrete = 65772,
    //% blockIdentity="blocks.block" enumval=131308 block="Magenta Concrete"
    //% jres alias=MAGENTA_CONCRETE
    MagentaConcrete = 131308,
    //% blockIdentity="blocks.block" enumval=196844 block="Light Blue Concrete"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LightBlueConcrete = 196844,
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = 262380,
    //% blockIdentity="blocks.block" enumval=327916 block="Lime Concrete"
    //% jres alias=LIME_CONCRETE
    LimeConcrete = 327916,
    //% blockIdentity="blocks.block" enumval=393452 block="Pink Concrete"
    //% jres alias=PINK_CONCRETE
    PinkConcrete = 393452,
    //% blockIdentity="blocks.block" enumval=458988 block="Gray Concrete"
    //% jres alias=GRAY_CONCRETE
    GrayConcrete = 458988,
    //% blockIdentity="blocks.block" enumval=524524 block="Light Gray Concrete"
    //% jres alias=LIGHT_GRAY_CONCRETE
    LightGrayConcrete = 524524,
    //% blockIdentity="blocks.block" enumval=590060 block="Cyan Concrete"
    //% jres alias=CYAN_CONCRETE
    CyanConcrete = 590060,
    //% blockIdentity="blocks.block" enumval=655596 block="Purple Concrete"
    //% jres alias=PURPLE_CONCRETE
    PurpleConcrete = 655596,
    //% blockIdentity="blocks.block" enumval=721132 block="Blue Concrete"
    //% jres alias=BLUE_CONCRETE
    BlueConcrete = 721132,
    //% blockIdentity="blocks.block" enumval=786668 block="Brown Concrete"
    //% jres alias=BROWN_CONCRETE
    BrownConcrete = 786668,
    //% blockIdentity="blocks.block" enumval=852204 block="Green Concrete"
    //% jres alias=GREEN_CONCRETE
    GreenConcrete = 852204,
    //% blockIdentity="blocks.block" enumval=917740 block="Red Concrete"
    //% jres alias=RED_CONCRETE
    RedConcrete = 917740,
    //% blockIdentity="blocks.block" enumval=983276 block="Black Concrete"
    //% jres alias=BLACK_CONCRETE
    BlackConcrete = 983276,
    //% blockIdentity="blocks.block" enumval=237 block="White Concrete Powder"
    //% jres alias=WHITE_CONCRETE_POWDER
    WhiteConcretePowder = 237,
    //% blockIdentity="blocks.block" enumval=65773 block="Orange Concrete Powder"
    //% jres alias=ORANGE_CONCRETE_POWDER
    OrangeConcretePowder = 65773,
    //% blockIdentity="blocks.block" enumval=131309 block="Magenta Concrete Powder"
    //% jres alias=MAGENTA_CONCRETE_POWDER
    MagentaConcretePowder = 131309,
    //% blockIdentity="blocks.block" enumval=196845 block="Light Blue Concrete Powder"
    //% jres alias=LIGHT_BLUE_CONCRETE_POWDER
    LightBlueConcretePowder = 196845,
    //% blockIdentity="blocks.block" enumval=262381 block="Yellow Concrete Powder"
    //% jres alias=YELLOW_CONCRETE_POWDER
    YellowConcretePowder = 262381,
    //% blockIdentity="blocks.block" enumval=327917 block="Lime Concrete Powder"
    //% jres alias=LIME_CONCRETE_POWDER
    LimeConcretePowder = 327917,
    //% blockIdentity="blocks.block" enumval=393453 block="Pink Concrete Powder"
    //% jres alias=PINK_CONCRETE_POWDER
    PinkConcretePowder = 393453,
    //% blockIdentity="blocks.block" enumval=458989 block="Gray Concrete Powder"
    //% jres alias=GRAY_CONCRETE_POWDER
    GrayConcretePowder = 458989,
    //% blockIdentity="blocks.block" enumval=524525 block="Light Gray Concrete Powder"
    //% jres alias=LIGHT_GRAY_CONCRETE_POWDER
    LightGrayConcretePowder = 524525,
    //% blockIdentity="blocks.block" enumval=590061 block="Cyan Concrete Powder"
    //% jres alias=CYAN_CONCRETE_POWDER
    CyanConcretePowder = 590061,
    //% blockIdentity="blocks.block" enumval=655597 block="Purple Concrete Powder"
    //% jres alias=PURPLE_CONCRETE_POWDER
    PurpleConcretePowder = 655597,
    //% blockIdentity="blocks.block" enumval=721133 block="Blue Concrete Powder"
    //% jres alias=BLUE_CONCRETE_POWDER
    BlueConcretePowder = 721133,
    //% blockIdentity="blocks.block" enumval=786669 block="Brown Concrete Powder"
    //% jres alias=BROWN_CONCRETE_POWDER
    BrownConcretePowder = 786669,
    //% blockIdentity="blocks.block" enumval=852205 block="Green Concrete Powder"
    //% jres alias=GREEN_CONCRETE_POWDER
    GreenConcretePowder = 852205,
    //% blockIdentity="blocks.block" enumval=917741 block="Red Concrete Powder"
    //% jres alias=RED_CONCRETE_POWDER
    RedConcretePowder = 917741,
    //% blockIdentity="blocks.block" enumval=983277 block="Black Concrete Powder"
    //% jres alias=BLACK_CONCRETE_POWDER
    BlackConcretePowder = 983277,
    //% blockIdentity="blocks.block" enumval=240 block="Chorus Plant"
    //% jres alias=CHORUS_PLANT
    ChorusPlant = 240,
    //% blockIdentity="blocks.block" enumval=241 block="White Stained Glass"
    //% jres alias=WHITE_STAINED_GLASS
    WhiteStainedGlass = 241,
    //% blockIdentity="blocks.block" enumval=65777 block="Orange Stained Glass"
    //% jres alias=ORANGE_STAINED_GLASS
    OrangeStainedGlass = 65777,
    //% blockIdentity="blocks.block" enumval=131313 block="Magenta Stained Glass"
    //% jres alias=MAGENTA_STAINED_GLASS
    MagentaStainedGlass = 131313,
    //% blockIdentity="blocks.block" enumval=196849 block="Light Blue Stained Glass"
    //% jres alias=LIGHT_BLUE_STAINED_GLASS
    LightBlueStainedGlass = 196849,
    //% blockIdentity="blocks.block" enumval=262385 block="Yellow Stained Glass"
    //% jres alias=YELLOW_STAINED_GLASS
    YellowStainedGlass = 262385,
    //% blockIdentity="blocks.block" enumval=327921 block="Lime Stained Glass"
    //% jres alias=LIME_STAINED_GLASS
    LimeStainedGlass = 327921,
    //% blockIdentity="blocks.block" enumval=393457 block="Pink Stained Glass"
    //% jres alias=PINK_STAINED_GLASS
    PinkStainedGlass = 393457,
    //% blockIdentity="blocks.block" enumval=458993 block="Gray Stained Glass"
    //% jres alias=GRAY_STAINED_GLASS
    GrayStainedGlass = 458993,
    //% blockIdentity="blocks.block" enumval=524529 block="Light Gray Stained Glass"
    //% jres alias=LIGHT_GRAY_STAINED_GLASS
    LightGrayStainedGlass = 524529,
    //% blockIdentity="blocks.block" enumval=590065 block="Cyan Stained Glass"
    //% jres alias=CYAN_STAINED_GLASS
    CyanStainedGlass = 590065,
    //% blockIdentity="blocks.block" enumval=655601 block="Purple Stained Glass"
    //% jres alias=PURPLE_STAINED_GLASS
    PurpleStainedGlass = 655601,
    //% blockIdentity="blocks.block" enumval=721137 block="Blue Stained Glass"
    //% jres alias=BLUE_STAINED_GLASS
    BlueStainedGlass = 721137,
    //% blockIdentity="blocks.block" enumval=786673 block="Brown Stained Glass"
    //% jres alias=BROWN_STAINED_GLASS
    BrownStainedGlass = 786673,
    //% blockIdentity="blocks.block" enumval=852209 block="Green Stained Glass"
    //% jres alias=GREEN_STAINED_GLASS
    GreenStainedGlass = 852209,
    //% blockIdentity="blocks.block" enumval=917745 block="Red Stained Glass"
    //% jres alias=RED_STAINED_GLASS
    RedStainedGlass = 917745,
    //% blockIdentity="blocks.block" enumval=983281 block="Black Stained Glass"
    //% jres alias=BLACK_STAINED_GLASS
    BlackStainedGlass = 983281,
    //% blockIdentity="blocks.block" enumval=243 block="Podzol"
    //% jres alias=PODZOL
    Podzol = 243,
    //% blockIdentity="blocks.block" enumval=244 block="Beetroot"
    //% jres alias=BEETROOT
    Beetroot = 244,
    //% blockIdentity="blocks.block" enumval=245 block="Stonecutter"
    //% jres alias=STONECUTTER
    Stonecutter = 245,
    //% blockIdentity="blocks.block" enumval=251 block="Observer"
    //% jres alias=OBSERVER
    Observer = 251,
    //% blockIdentity="blocks.block" enumval=252 block="Structure Block"
    //% jres alias=STRUCTURE_BLOCK
    StructureBlock = 252,
    //% blockIdentity="blocks.block" enumval=513 block="Prismarine Stairs"
    //% jres alias=PRISMARINE_STAIRS
    PrismarineStairs = 513,
    //% blockIdentity="blocks.block" enumval=514 block="Dark Prismarine Stairs"
    //% jres alias=DARK_PRISMARINE_STAIRS
    DarkPrismarineStairs = 514,
    //% blockIdentity="blocks.block" enumval=515 block="Prismarine Brick Stairs"
    //% jres alias=PRISMARINE_BRICK_STAIRS
    PrismarineBrickStairs = 515,
    //% blockIdentity="blocks.block" enumval=516 block="Stripped Spruce Wood"
    //% jres alias=STRIPPED_SPRUCE_WOOD
    StrippedSpruceWood = 516,
    //% blockIdentity="blocks.block" enumval=517 block="Stripped Birch Wood"
    //% jres alias=STRIPPED_BIRCH_WOOD
    StrippedBirchWood = 517,
    //% blockIdentity="blocks.block" enumval=518 block="Stripped Jungle Wood"
    //% jres alias=STRIPPED_JUNGLE_WOOD
    StrippedJungleWood = 518,
    //% blockIdentity="blocks.block" enumval=519 block="Stripped Acacia Wood"
    //% jres alias=STRIPPED_ACACIA_WOOD
    StrippedAcaciaWood = 519,
    //% blockIdentity="blocks.block" enumval=520 block="Stripped Dark Oak Wood"
    //% jres alias=STRIPPED_DARK_OAK_WOOD
    StrippedDarkOakWood = 520,
    //% blockIdentity="blocks.block" enumval=521 block="Stripped Oak Wood"
    //% jres alias=STRIPPED_OAK_WOOD
    StrippedOakWood = 521,
    //% blockIdentity="blocks.block" enumval=676 block="Scaffolding"
    //% jres alias=SCAFFOLDING
    Scaffolding = 676,
    //% blockIdentity="blocks.block" enumval=522 block="Blue Ice"
    //% jres alias=BLUE_ICE
    BlueIce = 522,
    //% blockIdentity="blocks.block" enumval=641 block="Seagrass"
    //% jres alias=SEAGRASS
    Seagrass = 641,
    //% blockIdentity="blocks.block" enumval=642 block="Tube Coral"
    //% jres alias=TUBE_CORAL
    TubeCoral = 642,
    //% blockIdentity="blocks.block" enumval=66178 block="Brain Coral"
    //% jres alias=BRAIN_CORAL
    BrainCoral = 66178,
    //% blockIdentity="blocks.block" enumval=131714 block="Bubble Coral"
    //% jres alias=BUBBLE_CORAL
    BubbleCoral = 131714,
    //% blockIdentity="blocks.block" enumval=197250 block="Fire Coral"
    //% jres alias=FIRE_CORAL
    FireCoral = 197250,
    //% blockIdentity="blocks.block" enumval=262786 block="Horn Coral"
    //% jres alias=HORN_CORAL
    HornCoral = 262786,
    //% blockIdentity="blocks.block" enumval=643 block="Tube Coral Block"
    //% jres alias=TUBE_CORAL_BLOCK
    TubeCoralBlock = 643,
    //% blockIdentity="blocks.block" enumval=66179 block="Brain Coral Block"
    //% jres alias=BRAIN_CORAL_BLOCK
    BrainCoralBlock = 66179,
    //% blockIdentity="blocks.block" enumval=131715 block="Bubble Coral Block"
    //% jres alias=BUBBLE_CORAL_BLOCK
    BubbleCoralBlock = 131715,
    //% blockIdentity="blocks.block" enumval=197251 block="Fire Coral Block"
    //% jres alias=FIRE_CORAL_BLOCK
    FireCoralBlock = 197251,
    //% blockIdentity="blocks.block" enumval=262787 block="Horn Coral Block"
    //% jres alias=HORN_CORAL_BLOCK
    HornCoralBlock = 262787,
    //% blockIdentity="blocks.block" enumval=328323 block="Dead Tube Coral Block"
    //% jres alias=DEAD_TUBE_CORAL_BLOCK
    DeadTubeCoralBlock = 328323,
    //% blockIdentity="blocks.block" enumval=393859 block="Dead Brain Coral Block"
    //% jres alias=DEAD_BRAIN_CORAL_BLOCK
    DeadBrainCoralBlock = 393859,
    //% blockIdentity="blocks.block" enumval=459395 block="Dead Bubble Coral Block"
    //% jres alias=DEAD_BUBBLE_CORAL_BLOCK
    DeadBubbleCoralBlock = 459395,
    //% blockIdentity="blocks.block" enumval=721539 block="Dead Fire Coral Block"
    //% jres alias=DEAD_FIRE_CORAL_BLOCK
    DeadFireCoralBlock = 721539,
    //% blockIdentity="blocks.block" enumval=787075 block="Dead Horn Coral Block"
    //% jres alias=DEAD_HORN_CORAL_BLOCK
    DeadHornCoralBlock = 787075,
    //% blockIdentity="blocks.block" enumval=644 block="Tube Coral Fan"
    //% jres alias=TUBE_CORAL_FAN
    TubeCoralFan = 644,
    //% blockIdentity="blocks.block" enumval=66180 block="Brain Coral Fan"
    //% jres alias=BRAIN_CORAL_FAN
    BrainCoralFan = 66180,
    //% blockIdentity="blocks.block" enumval=131716 block="Bubble Coral Fan"
    //% jres alias=BUBBLE_CORAL_FAN
    BubbleCoralFan = 131716,
    //% blockIdentity="blocks.block" enumval=197252 block="Fire Coral Fan"
    //% jres alias=FIRE_CORAL_FAN
    FireCoralFan = 197252,
    //% blockIdentity="blocks.block" enumval=262788 block="Horn Coral Fan"
    //% jres alias=HORN_CORAL_FAN
    HornCoralFan = 262788,
    //% blockIdentity="blocks.block" enumval=645 block="Dead Tube Coral Fan"
    //% jres alias=DEAD_TUBE_CORAL_FAN
    DeadTubeCoralFan = 645,
    //% blockIdentity="blocks.block" enumval=66181 block="Dead Brain Coral Fan"
    //% jres alias=DEAD_BRAIN_CORAL_FAN
    DeadBrainCoralFan = 66181,
    //% blockIdentity="blocks.block" enumval=131717 block="Dead Bubble Coral Fan"
    //% jres alias=DEAD_BUBBLE_CORAL_FAN
    DeadBubbleCoralFan = 131717,
    //% blockIdentity="blocks.block" enumval=197253 block="Dead Fire Coral Fan"
    //% jres alias=DEAD_FIRE_CORAL_FAN
    DeadFireCoralFan = 197253,
    //% blockIdentity="blocks.block" enumval=262789 block="Dead Horn Coral Fan"
    //% jres alias=DEAD_HORN_CORAL_FAN
    DeadHornCoralFan = 262789,
    //% blockIdentity="blocks.block" enumval=649 block="Kelp"
    //% jres alias=KELP
    Kelp = 649,
    //% blockIdentity="blocks.block" enumval=650 block="Dried Kelp Block"
    //% jres alias=DRIED_KELP_BLOCK
    DriedKelpBlock = 650,
    //% blockIdentity="blocks.block" enumval=651 block="Acacia Button"
    //% jres alias=ACACIA_BUTTON
    AcaciaButton = 651,
    //% blockIdentity="blocks.block" enumval=652 block="Birch Button"
    //% jres alias=BIRCH_BUTTON
    BirchButton = 652,
    //% blockIdentity="blocks.block" enumval=653 block="Dark Oak Button"
    //% jres alias=DARK_OAK_BUTTON
    DarkOakButton = 653,
    //% blockIdentity="blocks.block" enumval=654 block="Jungle Button"
    //% jres alias=JUNGLE_BUTTON
    JungleButton = 654,
    //% blockIdentity="blocks.block" enumval=655 block="Spruce Button"
    //% jres alias=SPRUCE_BUTTON
    SpruceButton = 655,
    //% blockIdentity="blocks.block" enumval=656 block="Acacia Trapdoor"
    //% jres alias=ACACIA_TRAPDOOR
    AcaciaTrapdoor = 656,
    //% blockIdentity="blocks.block" enumval=657 block="Birch Trapdoor"
    //% jres alias=BIRCH_TRAPDOOR
    BirchTrapdoor = 657,
    //% blockIdentity="blocks.block" enumval=658 block="Dark Oak Trapdoor"
    //% jres alias=DARK_OAK_TRAPDOOR
    DarkOakTrapdoor = 658,
    //% blockIdentity="blocks.block" enumval=659 block="Jungle Trapdoor"
    //% jres alias=JUNGLE_TRAPDOOR
    JungleTrapdoor = 659,
    //% blockIdentity="blocks.block" enumval=660 block="Spruce Trapdoor"
    //% jres alias=SPRUCE_TRAPDOOR
    SpruceTrapdoor = 660,
    //% blockIdentity="blocks.block" enumval=661 block="Acacia Pressure Plate"
    //% jres alias=ACACIA_PRESSURE_PLATE
    AcaciaPressurePlate = 661,
    //% blockIdentity="blocks.block" enumval=662 block="Birch Pressure Plate"
    //% jres alias=BIRCH_PRESSURE_PLATE
    BirchPressurePlate = 662,
    //% blockIdentity="blocks.block" enumval=663 block="Dark Oak Pressure Plate"
    //% jres alias=DARK_OAK_PRESSURE_PLATE
    DarkOakPressurePlate = 663,
    //% blockIdentity="blocks.block" enumval=664 block="Jungle Pressure Plate"
    //% jres alias=JUNGLE_PRESSURE_PLATE
    JunglePressurePlate = 664,
    //% blockIdentity="blocks.block" enumval=665 block="Spruce Pressure Plate"
    //% jres alias=SPRUCE_PRESSURE_PLATE
    SprucePressurePlate = 665,
    //% blockIdentity="blocks.block" enumval=666 block="Carved Pumpkin"
    //% jres alias=CARVED_PUMPKIN
    CarvedPumpkin = 666,
    //% blockIdentity="blocks.block" enumval=667 block="Sea Pickle"
    //% jres alias=SEA_PICKLE
    SeaPickle = 667,
    //% blockIdentity="blocks.block" enumval=711 block="Cartography Table"
    //% jres alias=CARTOGRAPHY_TABLE
    CartographyTable = 711,
    //% blockIdentity="blocks.block" enumval=712 block="Fletching Table"
    //% jres alias=FLETCHING_TABLE
    FletchingTable = 712,
    //% blockIdentity="blocks.block" enumval=707 block="Blast Furnace"
    //% jres alias=BLAST_FURNACE
    BlastFurnace = 707,
    //% blockIdentity="blocks.block" enumval=708 block="Stonecutter Block"
    //% jres alias=STONECUTTER_BLOCK
    StonecutterBlock = 708,
    //% blockIdentity="blocks.block" enumval=709 block="Smoker"
    //% jres alias=SMOKER
    Smoker = 709,
    //% blockIdentity="blocks.block" enumval=713 block="Smithing Table"
    //% jres alias=SMITHING_TABLE
    SmithingTable = 713,
    //% blockIdentity="blocks.block" enumval=714 block="Barrel"
    //% jres alias=BARREL
    Barrel = 714,
    //% blockIdentity="blocks.block" enumval=715 block="Loom"
    //% jres alias=LOOM
    Loom = 715,
    //% blockIdentity="blocks.block" enumval=717 block="Bell"
    //% jres alias=BELL
    Bell = 717,
    //% blockIdentity="blocks.block" enumval=720 block="Campfire"
    //% jres alias=CAMPFIRE
    Campfire = 720,
    //% blockIdentity="blocks.block" enumval=724 block="Composter"
    //% jres alias=COMPOSTER
    Composter = 724,
    //% blockIdentity="blocks.block" enumval=729 block="Bee Nest"
    //% jres alias=BEE_NEST
    BeeNest = 729,
    //% blockIdentity="blocks.block" enumval=730 block="Beehive"
    //% jres alias=BEEHIVE
    Beehive = 730,
    //% blockIdentity="blocks.block" enumval=731 block="Honey Block"
    //% jres alias=HONEY_BLOCK
    HoneyBlock = 731,
    //% blockIdentity="blocks.block" enumval=732 block="Honeycomb Block"
    //% jres alias=HONEYCOMB_BLOCK
    HoneycombBlock = 732,
}
/*
 * Tools and treasures for players
 *
 */
//% emitAsConstant
declare const enum Item {
    //% blockIdentity="blocks.item" enumval=256 block="Iron Shovel"
    //% jres alias=IRON_SHOVEL
    IronShovel = 256,
    //% blockIdentity="blocks.item" enumval=257 block="Iron Pickaxe"
    //% jres alias=IRON_PICKAXE
    IronPickaxe = 257,
    //% blockIdentity="blocks.item" enumval=258 block="Iron Axe"
    //% jres alias=IRON_AXE
    IronAxe = 258,
    //% blockIdentity="blocks.item" enumval=259 block="Flint and Steel"
    //% jres alias=FLINT_AND_STEEL
    FlintAndSteel = 259,
    //% blockIdentity="blocks.item" enumval=260 block="Apple"
    //% jres alias=APPLE
    Apple = 260,
    //% blockIdentity="blocks.item" enumval=261 block="Bow"
    //% jres alias=BOW
    Bow = 261,
    //% blockIdentity="blocks.item" enumval=262 block="Arrow"
    //% jres alias=ARROW
    Arrow = 262,
    //% blockIdentity="blocks.item" enumval=263 block="Coal"
    //% jres alias=COAL
    Coal = 263,
    //% blockIdentity="blocks.item" enumval=65799 block="Charcoal"
    //% jres alias=CHARCOAL
    Charcoal = 65799,
    //% blockIdentity="blocks.item" enumval=264 block="Diamond"
    //% jres alias=DIAMOND
    Diamond = 264,
    //% blockIdentity="blocks.item" enumval=265 block="Iron Ingot"
    //% jres alias=IRON_INGOT
    IronIngot = 265,
    //% blockIdentity="blocks.item" enumval=266 block="Gold Ingot"
    //% jres alias=GOLD_INGOT
    GoldIngot = 266,
    //% blockIdentity="blocks.item" enumval=267 block="Iron Sword"
    //% jres alias=IRON_SWORD
    IronSword = 267,
    //% blockIdentity="blocks.item" enumval=268 block="Wooden Sword"
    //% jres alias=WOODEN_SWORD
    WoodenSword = 268,
    //% blockIdentity="blocks.item" enumval=269 block="Wooden Shovel"
    //% jres alias=WOODEN_SHOVEL
    WoodenShovel = 269,
    //% blockIdentity="blocks.item" enumval=270 block="Wooden Pickaxe"
    //% jres alias=WOODEN_PICKAXE
    WoodenPickaxe = 270,
    //% blockIdentity="blocks.item" enumval=271 block="Wooden Axe"
    //% jres alias=WOODEN_AXE
    WoodenAxe = 271,
    //% blockIdentity="blocks.item" enumval=272 block="Stone Sword"
    //% jres alias=STONE_SWORD
    StoneSword = 272,
    //% blockIdentity="blocks.item" enumval=273 block="Stone Shovel"
    //% jres alias=STONE_SHOVEL
    StoneShovel = 273,
    //% blockIdentity="blocks.item" enumval=274 block="Stone Pickaxe"
    //% jres alias=STONE_PICKAXE
    StonePickaxe = 274,
    //% blockIdentity="blocks.item" enumval=275 block="Stone Axe"
    //% jres alias=STONE_AXE
    StoneAxe = 275,
    //% blockIdentity="blocks.item" enumval=276 block="Diamond Sword"
    //% jres alias=DIAMOND_SWORD
    DiamondSword = 276,
    //% blockIdentity="blocks.item" enumval=277 block="Diamond Shovel"
    //% jres alias=DIAMOND_SHOVEL
    DiamondShovel = 277,
    //% blockIdentity="blocks.item" enumval=278 block="Diamond Pickaxe"
    //% jres alias=DIAMOND_PICKAXE
    DiamondPickaxe = 278,
    //% blockIdentity="blocks.item" enumval=279 block="Diamond Axe"
    //% jres alias=DIAMOND_AXE
    DiamondAxe = 279,
    //% blockIdentity="blocks.item" enumval=280 block="Stick"
    //% jres alias=STICK
    Stick = 280,
    //% blockIdentity="blocks.item" enumval=281 block="Bowl"
    //% jres alias=BOWL
    Bowl = 281,
    //% blockIdentity="blocks.item" enumval=282 block="Mushroom Stew"
    //% jres alias=MUSHROOM_STEW
    MushroomStew = 282,
    //% blockIdentity="blocks.item" enumval=283 block="Golden Sword"
    //% jres alias=GOLDEN_SWORD
    GoldenSword = 283,
    //% blockIdentity="blocks.item" enumval=284 block="Golden Shovel"
    //% jres alias=GOLDEN_SHOVEL
    GoldenShovel = 284,
    //% blockIdentity="blocks.item" enumval=285 block="Golden Pickaxe"
    //% jres alias=GOLDEN_PICKAXE
    GoldenPickaxe = 285,
    //% blockIdentity="blocks.item" enumval=286 block="Golden Axe"
    //% jres alias=GOLDEN_AXE
    GoldenAxe = 286,
    //% blockIdentity="blocks.item" enumval=287 block="String"
    //% jres alias=STRING
    String = 287,
    //% blockIdentity="blocks.item" enumval=288 block="Feather"
    //% jres alias=FEATHER
    Feather = 288,
    //% blockIdentity="blocks.item" enumval=289 block="Gunpowder"
    //% jres alias=GUNPOWDER
    Gunpowder = 289,
    //% blockIdentity="blocks.item" enumval=290 block="Wooden Hoe"
    //% jres alias=WOODEN_HOE
    WoodenHoe = 290,
    //% blockIdentity="blocks.item" enumval=291 block="Stone Hoe"
    //% jres alias=STONE_HOE
    StoneHoe = 291,
    //% blockIdentity="blocks.item" enumval=292 block="Iron Hoe"
    //% jres alias=IRON_HOE
    IronHoe = 292,
    //% blockIdentity="blocks.item" enumval=293 block="Diamond Hoe"
    //% jres alias=DIAMOND_HOE
    DiamondHoe = 293,
    //% blockIdentity="blocks.item" enumval=294 block="Golden Hoe"
    //% jres alias=GOLDEN_HOE
    GoldenHoe = 294,
    //% blockIdentity="blocks.item" enumval=295 block="Seeds"
    //% jres alias=SEEDS
    Seeds = 295,
    //% blockIdentity="blocks.item" enumval=296 block="Wheat"
    //% jres alias=WHEAT
    Wheat = 296,
    //% blockIdentity="blocks.item" enumval=297 block="Bread"
    //% jres alias=BREAD
    Bread = 297,
    //% blockIdentity="blocks.item" enumval=298 block="Leather Cap"
    //% jres alias=LEATHER_CAP
    LeatherCap = 298,
    //% blockIdentity="blocks.item" enumval=299 block="Leather Tunic"
    //% jres alias=LEATHER_CHESTPLATE
    LeatherChestplate = 299,
    //% blockIdentity="blocks.item" enumval=300 block="Leather Pants"
    //% jres alias=LEATHER_PANTS
    LeatherPants = 300,
    //% blockIdentity="blocks.item" enumval=301 block="Leather Boots"
    //% jres alias=LEATHER_BOOTS
    LeatherBoots = 301,
    //% blockIdentity="blocks.item" enumval=302 block="Chain Helmet"
    //% jres alias=CHAINMAIL_HELMET
    ChainmailHelmet = 302,
    //% blockIdentity="blocks.item" enumval=303 block="Chain Chestplate"
    //% jres alias=CHAINMAIL_CHESTPLATE
    ChainmailChestplate = 303,
    //% blockIdentity="blocks.item" enumval=304 block="Chain Leggings"
    //% jres alias=CHAINMAIL_LEGGINGS
    ChainmailLeggings = 304,
    //% blockIdentity="blocks.item" enumval=305 block="Chain Boots"
    //% jres alias=CHAINMAIL_BOOTS
    ChainmailBoots = 305,
    //% blockIdentity="blocks.item" enumval=306 block="Iron Helmet"
    //% jres alias=IRON_HELMET
    IronHelmet = 306,
    //% blockIdentity="blocks.item" enumval=307 block="Iron Chestplate"
    //% jres alias=IRON_CHESTPLATE
    IronChestplate = 307,
    //% blockIdentity="blocks.item" enumval=308 block="Iron Leggings"
    //% jres alias=IRON_LEGGINGS
    IronLeggings = 308,
    //% blockIdentity="blocks.item" enumval=309 block="Iron Boots"
    //% jres alias=IRON_BOOTS
    IronBoots = 309,
    //% blockIdentity="blocks.item" enumval=310 block="Diamond Helmet"
    //% jres alias=DIAMOND_HELMET
    DiamondHelmet = 310,
    //% blockIdentity="blocks.item" enumval=311 block="Diamond Chestplate"
    //% jres alias=DIAMOND_CHESTPLATE
    DiamondChestplate = 311,
    //% blockIdentity="blocks.item" enumval=312 block="Diamond Leggings"
    //% jres alias=DIAMOND_LEGGINGS
    DiamondLeggings = 312,
    //% blockIdentity="blocks.item" enumval=313 block="Diamond Boots"
    //% jres alias=DIAMOND_BOOTS
    DiamondBoots = 313,
    //% blockIdentity="blocks.item" enumval=314 block="Golden Helmet"
    //% jres alias=GOLDEN_HELMET
    GoldenHelmet = 314,
    //% blockIdentity="blocks.item" enumval=315 block="Golden Chestplate"
    //% jres alias=GOLDEN_CHESTPLATE
    GoldenChestplate = 315,
    //% blockIdentity="blocks.item" enumval=316 block="Golden Leggings"
    //% jres alias=GOLDEN_LEGGINGS
    GoldenLeggings = 316,
    //% blockIdentity="blocks.item" enumval=317 block="Golden Boots"
    //% jres alias=GOLDEN_BOOTS
    GoldenBoots = 317,
    //% blockIdentity="blocks.item" enumval=318 block="Flint"
    //% jres alias=FLINT
    Flint = 318,
    //% blockIdentity="blocks.item" enumval=319 block="Raw Porkchop"
    //% jres alias=RAW_PORKCHOP
    RawPorkchop = 319,
    //% blockIdentity="blocks.item" enumval=320 block="Cooked Porkchop"
    //% jres alias=COOKED_PORKCHOP
    CookedPorkchop = 320,
    //% blockIdentity="blocks.item" enumval=321 block="Painting"
    //% jres alias=PAINTING
    Painting = 321,
    //% blockIdentity="blocks.item" enumval=322 block="Golden Apple"
    //% jres alias=GOLDEN_APPLE
    GoldenApple = 322,
    //% blockIdentity="blocks.item" enumval=323 block="Sign"
    //% jres alias=SIGN_ITEM
    Sign = 323,
    //% blockIdentity="blocks.item" enumval=324 block="Oak Door"
    //% jres alias=OAK_DOOR
    OakDoor = 324,
    //% blockIdentity="blocks.item" enumval=325 block="Bucket"
    //% jres alias=BUCKET
    Bucket = 325,
    //% blockIdentity="blocks.item" enumval=65861 block="Milk"
    //% jres alias=MILK
    Milk = 65861,
    //% blockIdentity="blocks.item" enumval=131397 block="Bucket of Cod"
    //% jres alias=BUCKET_OF_COD
    BucketOfCod = 131397,
    //% blockIdentity="blocks.item" enumval=196933 block="Bucket of Salmon"
    //% jres alias=BUCKET_OF_SALMON
    BucketOfSalmon = 196933,
    //% blockIdentity="blocks.item" enumval=262469 block="Bucket of Tropical Fish"
    //% jres alias=BUCKET_OF_TROPICAL_FISH
    BucketOfTropicalFish = 262469,
    //% blockIdentity="blocks.item" enumval=524613 block="Water Bucket"
    //% jres alias=WATER_BUCKET
    WaterBucket = 524613,
    //% blockIdentity="blocks.item" enumval=655685 block="Lava Bucket"
    //% jres alias=LAVA_BUCKET
    LavaBucket = 655685,
    //% blockIdentity="blocks.item" enumval=328 block="Minecart"
    //% jres alias=MINECART
    Minecart = 328,
    //% blockIdentity="blocks.item" enumval=329 block="Saddle"
    //% jres alias=SADDLE
    Saddle = 329,
    //% blockIdentity="blocks.item" enumval=330 block="Iron Door"
    //% jres alias=IRON_DOOR
    IronDoor = 330,
    //% blockIdentity="blocks.item" enumval=331 block="Redstone"
    //% jres alias=REDSTONE
    Redstone = 331,
    //% blockIdentity="blocks.item" enumval=332 block="Snowball"
    //% jres alias=SNOWBALL
    Snowball = 332,
    //% blockIdentity="blocks.item" enumval=333 block="Oak Boat"
    //% jres alias=BOAT
    Boat = 333,
    //% blockIdentity="blocks.item" enumval=65869 block="Spruce Boat"
    //% jres alias=SPRUCE_BOAT
    SpruceBoat = 65869,
    //% blockIdentity="blocks.item" enumval=131405 block="Birch Boat"
    //% jres alias=BIRCH_BOAT
    BirchBoat = 131405,
    //% blockIdentity="blocks.item" enumval=196941 block="Jungle Boat"
    //% jres alias=JUNGLE_BOAT
    JungleBoat = 196941,
    //% blockIdentity="blocks.item" enumval=262477 block="Acacia Boat"
    //% jres alias=ACACIA_BOAT
    AcaciaBoat = 262477,
    //% blockIdentity="blocks.item" enumval=328013 block="Dark Oak Boat"
    //% jres alias=DARK_OAK_BOAT
    DarkOakBoat = 328013,
    //% blockIdentity="blocks.item" enumval=334 block="Leather"
    //% jres alias=LEATHER
    Leather = 334,
    //% blockIdentity="blocks.item" enumval=335 block="Kelp"
    //% jres alias=KELP_ITEM
    Kelp = 335,
    //% blockIdentity="blocks.item" enumval=336 block="Brick"
    //% jres alias=BRICK
    Brick = 336,
    //% blockIdentity="blocks.item" enumval=337 block="Clay"
    //% jres alias=CLAY_BALL
    ClayBall = 337,
    //% blockIdentity="blocks.item" enumval=338 block="Sugar Canes"
    //% jres alias=REEDS
    Reeds = 338,
    //% blockIdentity="blocks.item" enumval=339 block="Paper"
    //% jres alias=PAPER
    Paper = 339,
    //% blockIdentity="blocks.item" enumval=340 block="Book"
    //% jres alias=BOOK
    Book = 340,
    //% blockIdentity="blocks.item" enumval=341 block="Slimeball"
    //% jres alias=SLIMEBALL
    Slimeball = 341,
    //% blockIdentity="blocks.item" enumval=342 block="Minecart with Chest"
    //% jres alias=MINECART_WITH_CHEST
    MinecartWithChest = 342,
    //% blockIdentity="blocks.item" enumval=344 block="Egg"
    //% jres alias=EGG
    Egg = 344,
    //% blockIdentity="blocks.item" enumval=345 block="Compass"
    //% jres alias=COMPASS
    Compass = 345,
    //% blockIdentity="blocks.item" enumval=346 block="Fishing Rod"
    //% jres alias=FISHING_ROD
    FishingRod = 346,
    //% blockIdentity="blocks.item" enumval=347 block="Clock"
    //% jres alias=CLOCK
    Clock = 347,
    //% blockIdentity="blocks.item" enumval=348 block="Glowstone Dust"
    //% jres alias=GLOWSTONE_DUST
    GlowstoneDust = 348,
    //% blockIdentity="blocks.item" enumval=349 block="Raw Fish"
    //% jres alias=RAW_FISH
    RawFish = 349,
    //% blockIdentity="blocks.item" enumval=350 block="Cooked Fish"
    //% jres alias=COOKED_FISH
    CookedFish = 350,
    //% blockIdentity="blocks.item" enumval=351 block="Ink Sac"
    //% jres alias=INK_SAC
    InkSac = 351,
    //% blockIdentity="blocks.item" enumval=65887 block="Rose Red"
    //% jres alias=ROSE_RED
    RoseRed = 65887,
    //% blockIdentity="blocks.item" enumval=131423 block="Cactus Green"
    //% jres alias=CACTUS_GREEN
    CactusGreen = 131423,
    //% blockIdentity="blocks.item" enumval=196959 block="Cocoa Beans"
    //% jres alias=COCOA_BEANS
    CocoaBeans = 196959,
    //% blockIdentity="blocks.item" enumval=262495 block="Lapis Lazuli"
    //% jres alias=LAPIS_LAZULI
    LapisLazuli = 262495,
    //% blockIdentity="blocks.item" enumval=328031 block="Purple Dye"
    //% jres alias=PURPLE_DYE
    PurpleDye = 328031,
    //% blockIdentity="blocks.item" enumval=393567 block="Cyan Dye"
    //% jres alias=CYAN_DYE
    CyanDye = 393567,
    //% blockIdentity="blocks.item" enumval=459103 block="Light Gray Dye"
    //% jres alias=LIGHT_GRAY_DYE
    LightGrayDye = 459103,
    //% blockIdentity="blocks.item" enumval=524639 block="Gray Dye"
    //% jres alias=GRAY_DYE
    GrayDye = 524639,
    //% blockIdentity="blocks.item" enumval=590175 block="Pink Dye"
    //% jres alias=PINK_DYE
    PinkDye = 590175,
    //% blockIdentity="blocks.item" enumval=655711 block="Lime Dye"
    //% jres alias=LIME_DYE
    LimeDye = 655711,
    //% blockIdentity="blocks.item" enumval=721247 block="Dandelion Yellow"
    //% jres alias=DANDELION_YELLOW
    DandelionYellow = 721247,
    //% blockIdentity="blocks.item" enumval=786783 block="Light Blue Dye"
    //% jres alias=LIGHT_BLUE_DYE
    LightBlueDye = 786783,
    //% blockIdentity="blocks.item" enumval=852319 block="Magenta Dye"
    //% jres alias=MAGENTA_DYE
    MagentaDye = 852319,
    //% blockIdentity="blocks.item" enumval=917855 block="Orange Dye"
    //% jres alias=ORANGE_DYE
    OrangeDye = 917855,
    //% blockIdentity="blocks.item" enumval=983391 block="Bone Meal"
    //% jres alias=BONE_MEAL
    BoneMeal = 983391,
    //% blockIdentity="blocks.item" enumval=352 block="Bone"
    //% jres alias=BONE
    Bone = 352,
    //% blockIdentity="blocks.item" enumval=353 block="Sugar"
    //% jres alias=SUGAR
    Sugar = 353,
    //% blockIdentity="blocks.item" enumval=354 block="Cake"
    //% jres alias=CAKE_ITEM
    Cake = 354,
    //% blockIdentity="blocks.item" enumval=355 block="White Bed"
    //% jres alias=BED_ITEM
    Bed = 355,
    //% blockIdentity="blocks.item" enumval=65891 block="Orange Bed"
    //% jres alias=ORANGE_BED
    OrangeBed = 65891,
    //% blockIdentity="blocks.item" enumval=131427 block="Magenta Bed"
    //% jres alias=MAGENTA_BED
    MagentaBed = 131427,
    //% blockIdentity="blocks.item" enumval=196963 block="Light Blue Bed"
    //% jres alias=LIGHT_BLUE_BED
    LightBlueBed = 196963,
    //% blockIdentity="blocks.item" enumval=262499 block="Yellow Bed"
    //% jres alias=YELLOW_BED
    YellowBed = 262499,
    //% blockIdentity="blocks.item" enumval=328035 block="Lime Bed"
    //% jres alias=LIME_BED
    LimeBed = 328035,
    //% blockIdentity="blocks.item" enumval=393571 block="Pink Bed"
    //% jres alias=PINK_BED
    PinkBed = 393571,
    //% blockIdentity="blocks.item" enumval=459107 block="Gray Bed"
    //% jres alias=GRAY_BED
    GrayBed = 459107,
    //% blockIdentity="blocks.item" enumval=524643 block="Light Gray Bed"
    //% jres alias=LIGHT_GRAY_BED
    LightGrayBed = 524643,
    //% blockIdentity="blocks.item" enumval=590179 block="Cyan Bed"
    //% jres alias=CYAN_BED
    CyanBed = 590179,
    //% blockIdentity="blocks.item" enumval=655715 block="Purple Bed"
    //% jres alias=PURPLE_BED
    PurpleBed = 655715,
    //% blockIdentity="blocks.item" enumval=721251 block="Blue Bed"
    //% jres alias=BLUE_BED
    BlueBed = 721251,
    //% blockIdentity="blocks.item" enumval=786787 block="Brown Bed"
    //% jres alias=BROWN_BED
    BrownBed = 786787,
    //% blockIdentity="blocks.item" enumval=852323 block="Green Bed"
    //% jres alias=GREEN_BED
    GreenBed = 852323,
    //% blockIdentity="blocks.item" enumval=917859 block="Red Bed"
    //% jres alias=RED_BED
    RedBed = 917859,
    //% blockIdentity="blocks.item" enumval=983395 block="Black Bed"
    //% jres alias=BLACK_BED
    BlackBed = 983395,
    //% blockIdentity="blocks.item" enumval=356 block="Redstone Repeater"
    //% jres alias=REPEATER
    Repeater = 356,
    //% blockIdentity="blocks.item" enumval=357 block="Cookie"
    //% jres alias=COOKIE
    Cookie = 357,
    //% blockIdentity="blocks.item" enumval=358 block="Map"
    //% jres alias=MAP
    Map = 358,
    //% blockIdentity="blocks.item" enumval=359 block="Shears"
    //% jres alias=SHEARS
    Shears = 359,
    //% blockIdentity="blocks.item" enumval=360 block="Melon"
    //% jres alias=MELON
    Melon = 360,
    //% blockIdentity="blocks.item" enumval=361 block="Pumpkin Seeds"
    //% jres alias=PUMPKIN_SEEDS
    PumpkinSeeds = 361,
    //% blockIdentity="blocks.item" enumval=362 block="Melon Seeds"
    //% jres alias=MELON_SEEDS
    MelonSeeds = 362,
    //% blockIdentity="blocks.item" enumval=363 block="Raw Beef"
    //% jres alias=RAW_BEEF
    RawBeef = 363,
    //% blockIdentity="blocks.item" enumval=364 block="Cooked Beef"
    //% jres alias=COOKED_BEEF
    CookedBeef = 364,
    //% blockIdentity="blocks.item" enumval=365 block="Raw Chicken"
    //% jres alias=RAW_CHICKEN
    RawChicken = 365,
    //% blockIdentity="blocks.item" enumval=366 block="Cooked Chicken"
    //% jres alias=COOKED_CHICKEN
    CookedChicken = 366,
    //% blockIdentity="blocks.item" enumval=367 block="Rotten Flesh"
    //% jres alias=ROTTEN_FLESH
    RottenFlesh = 367,
    //% blockIdentity="blocks.item" enumval=368 block="Ender Pearl"
    //% jres alias=ENDER_PEARL
    EnderPearl = 368,
    //% blockIdentity="blocks.item" enumval=369 block="Blaze Rod"
    //% jres alias=BLAZE_ROD
    BlazeRod = 369,
    //% blockIdentity="blocks.item" enumval=370 block="Ghast Tear"
    //% jres alias=GHAST_TEAR
    GhastTear = 370,
    //% blockIdentity="blocks.item" enumval=371 block="Gold Nugget"
    //% jres alias=GOLD_NUGGET
    GoldNugget = 371,
    //% blockIdentity="blocks.item" enumval=372 block="Nether Wart"
    //% jres alias=NETHER_WART_ITEM
    NetherWart = 372,
    //% blockIdentity="blocks.item" enumval=374 block="Glass Bottle"
    //% jres alias=GLASS_BOTTLE
    GlassBottle = 374,
    //% blockIdentity="blocks.item" enumval=375 block="Spider Eye"
    //% jres alias=SPIDER_EYE
    SpiderEye = 375,
    //% blockIdentity="blocks.item" enumval=376 block="Fermented Spider Eye"
    //% jres alias=FERMENTED_SPIDER_EYE
    FermentedSpiderEye = 376,
    //% blockIdentity="blocks.item" enumval=377 block="Blaze Powder"
    //% jres alias=BLAZE_POWDER
    BlazePowder = 377,
    //% blockIdentity="blocks.item" enumval=378 block="Magma Cream"
    //% jres alias=MAGMA_CREAM
    MagmaCream = 378,
    //% blockIdentity="blocks.item" enumval=379 block="Brewing Stand"
    //% jres alias=BREWING_STAND_ITEM
    BrewingStand = 379,
    //% blockIdentity="blocks.item" enumval=380 block="Cauldron"
    //% jres alias=CAULDRON_ITEM
    Cauldron = 380,
    //% blockIdentity="blocks.item" enumval=381 block="Eye of Ender"
    //% jres alias=ENDER_EYE
    EnderEye = 381,
    //% blockIdentity="blocks.item" enumval=382 block="Glistering Melon"
    //% jres alias=GLISTERING_MELON
    GlisteringMelon = 382,
    //% blockIdentity="blocks.item" enumval=655743 block="Spawn Chicken"
    //% jres alias=SPAWN_CHICKEN
    SpawnChicken = 655743,
    //% blockIdentity="blocks.item" enumval=721279 block="Spawn Cow"
    //% jres alias=SPAWN_COW
    SpawnCow = 721279,
    //% blockIdentity="blocks.item" enumval=786815 block="Spawn Pig"
    //% jres alias=SPAWN_PIG
    SpawnPig = 786815,
    //% blockIdentity="blocks.item" enumval=852351 block="Spawn Sheep"
    //% jres alias=SPAWN_SHEEP
    SpawnSheep = 852351,
    //% blockIdentity="blocks.item" enumval=917887 block="Spawn Wolf"
    //% jres alias=SPAWN_WOLF
    SpawnWolf = 917887,
    //% blockIdentity="blocks.item" enumval=983423 block="Spawn Villager"
    //% jres alias=SPAWN_VILLAGER
    SpawnVillager = 983423,
    //% blockIdentity="blocks.item" enumval=1048959 block="Spawn Mooshroom"
    //% jres alias=SPAWN_MOOSHROOM
    SpawnMooshroom = 1048959,
    //% blockIdentity="blocks.item" enumval=1114495 block="Spawn Squid"
    //% jres alias=SPAWN_SQUID
    SpawnSquid = 1114495,
    //% blockIdentity="blocks.item" enumval=1180031 block="Spawn Rabbit"
    //% jres alias=SPAWN_RABBIT
    SpawnRabbit = 1180031,
    //% blockIdentity="blocks.item" enumval=1245567 block="Spawn Bat"
    //% jres alias=SPAWN_BAT
    SpawnBat = 1245567,
    //% blockIdentity="blocks.item" enumval=1442175 block="Spawn Ocelot"
    //% jres alias=SPAWN_OCELOT
    SpawnOcelot = 1442175,
    //% blockIdentity="blocks.item" enumval=1507711 block="Spawn Horse"
    //% jres alias=SPAWN_HORSE
    SpawnHorse = 1507711,
    //% blockIdentity="blocks.item" enumval=1573247 block="Spawn Donkey"
    //% jres alias=SPAWN_DONKEY
    SpawnDonkey = 1573247,
    //% blockIdentity="blocks.item" enumval=1638783 block="Spawn Mule"
    //% jres alias=SPAWN_MULE
    SpawnMule = 1638783,
    //% blockIdentity="blocks.item" enumval=1704319 block="Spawn Skeleton Horse"
    //% jres alias=SPAWN_SKELETON_HORSE
    SpawnSkeletonHorse = 1704319,
    //% blockIdentity="blocks.item" enumval=1769855 block="Spawn Zombie Horse"
    //% jres alias=SPAWN_ZOMBIE_HORSE
    SpawnZombieHorse = 1769855,
    //% blockIdentity="blocks.item" enumval=1835391 block="Spawn Polar Bear"
    //% jres alias=SPAWN_POLAR_BEAR
    SpawnPolarBear = 1835391,
    //% blockIdentity="blocks.item" enumval=1900927 block="Spawn Llama"
    //% jres alias=SPAWN_LLAMA
    SpawnLlama = 1900927,
    //% blockIdentity="blocks.item" enumval=1966463 block="Spawn Parrot"
    //% jres alias=SPAWN_PARROT
    SpawnParrot = 1966463,
    //% blockIdentity="blocks.item" enumval=2031960 block="Spawn Dolphin"
    //% jres alias=SPAWN_DOLPHIN
    SpawnDolphin = 2031960,
    //% blockIdentity="blocks.item" enumval=3867007 block="Spawn Ravager"
    //% jres alias=SPAWN_RAVAGER
    SpawnRavager = 3867007,
    //% blockIdentity="blocks.item" enumval=2097535 block="Spawn Zombie"
    //% jres alias=SPAWN_ZOMBIE
    SpawnZombie = 2097535,
    //% blockIdentity="blocks.item" enumval=2163071 block="Spawn Creeper"
    //% jres alias=SPAWN_CREEPER
    SpawnCreeper = 2163071,
    //% blockIdentity="blocks.item" enumval=2228607 block="Spawn Skeleton"
    //% jres alias=SPAWN_SKELETON
    SpawnSkeleton = 2228607,
    //% blockIdentity="blocks.item" enumval=2294143 block="Spawn Spider"
    //% jres alias=SPAWN_SPIDER
    SpawnSpider = 2294143,
    //% blockIdentity="blocks.item" enumval=2359679 block="Spawn Zombie Pigman"
    //% jres alias=SPAWN_ZOMBIE_PIGMAN
    SpawnZombiePigman = 2359679,
    //% blockIdentity="blocks.item" enumval=2425215 block="Spawn Slime"
    //% jres alias=SPAWN_SLIME
    SpawnSlime = 2425215,
    //% blockIdentity="blocks.item" enumval=2490751 block="Spawn Enderman"
    //% jres alias=SPAWN_ENDERMAN
    SpawnEnderman = 2490751,
    //% blockIdentity="blocks.item" enumval=2556287 block="Spawn Silverfish"
    //% jres alias=SPAWN_SILVERFISH
    SpawnSilverfish = 2556287,
    //% blockIdentity="blocks.item" enumval=2621823 block="Spawn Cave Spider"
    //% jres alias=SPAWN_CAVE_SPIDER
    SpawnCaveSpider = 2621823,
    //% blockIdentity="blocks.item" enumval=2687359 block="Spawn Ghast"
    //% jres alias=SPAWN_GHAST
    SpawnGhast = 2687359,
    //% blockIdentity="blocks.item" enumval=2752895 block="Spawn Magma Cube"
    //% jres alias=SPAWN_MAGMA_CUBE
    SpawnMagmaCube = 2752895,
    //% blockIdentity="blocks.item" enumval=2818431 block="Spawn Blaze"
    //% jres alias=SPAWN_BLAZE
    SpawnBlaze = 2818431,
    //% blockIdentity="blocks.item" enumval=2883967 block="Spawn Zombie Villager"
    //% jres alias=SPAWN_ZOMBIE_VILLAGER
    SpawnZombieVillager = 2883967,
    //% blockIdentity="blocks.item" enumval=2949503 block="Spawn Witch"
    //% jres alias=SPAWN_WITCH
    SpawnWitch = 2949503,
    //% blockIdentity="blocks.item" enumval=3015039 block="Spawn Stray"
    //% jres alias=SPAWN_STRAY
    SpawnStray = 3015039,
    //% blockIdentity="blocks.item" enumval=3080575 block="Spawn Husk"
    //% jres alias=SPAWN_HUSK
    SpawnHusk = 3080575,
    //% blockIdentity="blocks.item" enumval=3146111 block="Spawn Wither Skeleton"
    //% jres alias=SPAWN_WITHER_SKELETON
    SpawnWitherSkeleton = 3146111,
    //% blockIdentity="blocks.item" enumval=3211647 block="Spawn Guardian"
    //% jres alias=SPAWN_GUARDIAN
    SpawnGuardian = 3211647,
    //% blockIdentity="blocks.item" enumval=3277183 block="Spawn Elder Guardian"
    //% jres alias=SPAWN_ELDER_GUARDIAN
    SpawnElderGuardian = 3277183,
    //% blockIdentity="blocks.item" enumval=3539327 block="Spawn Shulker"
    //% jres alias=SPAWN_SHULKER
    SpawnShulker = 3539327,
    //% blockIdentity="blocks.item" enumval=3604863 block="Spawn Endermite"
    //% jres alias=SPAWN_ENDERMITE
    SpawnEndermite = 3604863,
    //% blockIdentity="blocks.item" enumval=3735935 block="Spawn Vindicator"
    //% jres alias=SPAWN_VINDICATOR
    SpawnVindicator = 3735935,
    //% blockIdentity="blocks.item" enumval=3801471 block="Spawn Phantom"
    //% jres alias=SPAWN_PHANTOM
    SpawnPhantom = 3801471,
    //% blockIdentity="blocks.item" enumval=4850047 block="Spawn Sea Turtle"
    //% jres alias=SPAWN_SEA_TURTLE
    SpawnSeaTurtle = 4850047,
    //% blockIdentity="blocks.item" enumval=4915583 block="Spawn Cat"
    //% jres alias=SPAWN_CAT
    SpawnCat = 4915583,
    //% blockIdentity="blocks.item" enumval=6816127 block="Spawn Evoker"
    //% jres alias=SPAWN_EVOKER
    SpawnEvoker = 6816127,
    //% blockIdentity="blocks.item" enumval=6881663 block="Spawn Vex"
    //% jres alias=SPAWN_VEX
    SpawnVex = 6881663,
    //% blockIdentity="blocks.item" enumval=7078271 block="Spawn Pufferfish"
    //% jres alias=SPAWN_PUFFERFISH
    SpawnPufferfish = 7078271,
    //% blockIdentity="blocks.item" enumval=7143768 block="Spawn Salmon"
    //% jres alias=SPAWN_SALMON
    SpawnSalmon = 7143768,
    //% blockIdentity="blocks.item" enumval=7209343 block="Spawn Drowned"
    //% jres alias=SPAWN_DROWNED
    SpawnDrowned = 7209343,
    //% blockIdentity="blocks.item" enumval=7274840 block="Spawn Tropical Fish"
    //% jres alias=SPAWN_TROPICAL_FISH
    SpawnTropicalFish = 7274840,
    //% blockIdentity="blocks.item" enumval=7340376 block="Spawn Cod"
    //% jres alias=SPAWN_COD
    SpawnCod = 7340376,
    //% blockIdentity="blocks.item" enumval=7930239 block="Spawn Fox"
    //% jres alias=SPAWN_FOX
    SpawnFox = 7930239,
    //% blockIdentity="blocks.item" enumval=7405951 block="Spawn Panda"
    //% jres alias=SPAWN_PANDA
    SpawnPanda = 7405951,
    //% blockIdentity="blocks.item" enumval=7471487 block="Spawn Pillager"
    //% jres alias=SPAWN_PILLAGER
    SpawnPillager = 7471487,
    //% blockIdentity="blocks.item" enumval=7733631 block="Spawn Wandering Trader"
    //% jres alias=SPAWN_WANDERING_TRADER
    SpawnWanderingTrader = 7733631,
    //% blockIdentity="blocks.item" enumval=7995775 block="Spawn Bee"
    //% jres alias=SPAWN_BEE
    SpawnBee = 7995775,
    //% blockIdentity="blocks.item" enumval=384 block="Bottle o' Enchanting"
    //% jres alias=EXPERIENCE_BOTTLE
    ExperienceBottle = 384,
    //% blockIdentity="blocks.item" enumval=385 block="Fire Charge"
    //% jres alias=FIREBALL
    Fireball = 385,
    //% blockIdentity="blocks.item" enumval=386 block="Book & Quill"
    //% jres alias=BOOK_QUILL
    BookQuill = 386,
    //% blockIdentity="blocks.item" enumval=388 block="Emerald"
    //% jres alias=EMERALD
    Emerald = 388,
    //% blockIdentity="blocks.item" enumval=389 block="Item Frame"
    //% jres alias=ITEM_FRAME
    ItemFrame = 389,
    //% blockIdentity="blocks.item" enumval=390 block="Flower Pot"
    //% jres alias=FLOWER_POT_ITEM
    FlowerPot = 390,
    //% blockIdentity="blocks.item" enumval=391 block="Carrot"
    //% jres alias=CARROT
    Carrot = 391,
    //% blockIdentity="blocks.item" enumval=392 block="Potato"
    //% jres alias=POTATO
    Potato = 392,
    //% blockIdentity="blocks.item" enumval=393 block="Baked Potato"
    //% jres alias=BAKED_POTATO
    BakedPotato = 393,
    //% blockIdentity="blocks.item" enumval=394 block="Poisonous Potato"
    //% jres alias=POISONOUS_POTATO
    PoisonousPotato = 394,
    //% blockIdentity="blocks.item" enumval=395 block="Empty Map"
    //% jres alias=EMPTY_MAP
    EmptyMap = 395,
    //% blockIdentity="blocks.item" enumval=131467 block="Empty Locator Map"
    //% jres alias=EMPTY_LOCATOR_MAP
    EmptyLocatorMap = 131467,
    //% blockIdentity="blocks.item" enumval=396 block="Golden Carrot"
    //% jres alias=GOLDEN_CARROT
    GoldenCarrot = 396,
    //% blockIdentity="blocks.item" enumval=398 block="Carrot on a Stick"
    //% jres alias=CARROT_ON_A_STICK
    CarrotOnAStick = 398,
    //% blockIdentity="blocks.item" enumval=399 block="Nether Star"
    //% jres alias=NETHER_STAR
    NetherStar = 399,
    //% blockIdentity="blocks.item" enumval=400 block="Pumpkin Pie"
    //% jres alias=PUMPKIN_PIE
    PumpkinPie = 400,
    //% blockIdentity="blocks.item" enumval=403 block="Enchanted Book"
    //% jres alias=ENCHANTED_BOOK
    EnchantedBook = 403,
    //% blockIdentity="blocks.item" enumval=404 block="Redstone Comparator"
    //% jres alias=COMPARATOR
    Comparator = 404,
    //% blockIdentity="blocks.item" enumval=405 block="Nether Brick"
    //% jres alias=NETHERBRICK
    Netherbrick = 405,
    //% blockIdentity="blocks.item" enumval=406 block="Nether Quartz"
    //% jres alias=QUARTZ
    Quartz = 406,
    //% blockIdentity="blocks.item" enumval=407 block="Minecart with TNT"
    //% jres alias=MINECART_WITH_T_N_T
    MinecartWithTNT = 407,
    //% blockIdentity="blocks.item" enumval=408 block="Minecart with Hopper"
    //% jres alias=MINECART_WITH_HOPPER
    MinecartWithHopper = 408,
    //% blockIdentity="blocks.item" enumval=409 block="Prismarine Shard"
    //% jres alias=PRISMARINE_SHARD
    PrismarineShard = 409,
    //% blockIdentity="blocks.item" enumval=410 block="Hopper"
    //% jres alias=HOPPER_ITEM
    Hopper = 410,
    //% blockIdentity="blocks.item" enumval=411 block="Raw Rabbit"
    //% jres alias=RAW_RABBIT
    RawRabbit = 411,
    //% blockIdentity="blocks.item" enumval=412 block="Cooked Rabbit"
    //% jres alias=COOKED_RABBIT
    CookedRabbit = 412,
    //% blockIdentity="blocks.item" enumval=413 block="Rabbit Stew"
    //% jres alias=RABBIT_STEW
    RabbitStew = 413,
    //% blockIdentity="blocks.item" enumval=414 block="Rabbit's Foot"
    //% jres alias=RABBIT_FOOT
    RabbitFoot = 414,
    //% blockIdentity="blocks.item" enumval=415 block="Rabbit Hide"
    //% jres alias=RABBIT_HIDE
    RabbitHide = 415,
    //% blockIdentity="blocks.item" enumval=416 block="Leather Horse Armor"
    //% jres alias=LEATHER_HORSE_ARMOR
    LeatherHorseArmor = 416,
    //% blockIdentity="blocks.item" enumval=417 block="Iron Horse Armor"
    //% jres alias=IRON_HORSE_ARMOR
    IronHorseArmor = 417,
    //% blockIdentity="blocks.item" enumval=418 block="Gold Horse Armor"
    //% jres alias=GOLD_HORSE_ARMOR
    GoldHorseArmor = 418,
    //% blockIdentity="blocks.item" enumval=419 block="Diamond Horse Armor"
    //% jres alias=DIAMOND_HORSE_ARMOR
    DiamondHorseArmor = 419,
    //% blockIdentity="blocks.item" enumval=420 block="Lead"
    //% jres alias=LEAD
    Lead = 420,
    //% blockIdentity="blocks.item" enumval=421 block="Name Tag"
    //% jres alias=NAME_TAG
    NameTag = 421,
    //% blockIdentity="blocks.item" enumval=422 block="Prismarine Crystals"
    //% jres alias=PRISMARINE_CRYSTALS
    PrismarineCrystals = 422,
    //% blockIdentity="blocks.item" enumval=423 block="Raw Mutton"
    //% jres alias=RAW_MUTTON
    RawMutton = 423,
    //% blockIdentity="blocks.item" enumval=424 block="Cooked Mutton"
    //% jres alias=COOKED_MUTTON
    CookedMutton = 424,
    //% blockIdentity="blocks.item" enumval=425 block="Armor Stand"
    //% jres alias=ARMOR_STAND
    ArmorStand = 425,
    //% blockIdentity="blocks.item" enumval=426 block="End Crystal"
    //% jres alias=END_CRYSTAL
    EndCrystal = 426,
    //% blockIdentity="blocks.item" enumval=427 block="Spruce Door"
    //% jres alias=SPRUCE_DOOR
    SpruceDoor = 427,
    //% blockIdentity="blocks.item" enumval=428 block="Birch Door"
    //% jres alias=BIRCH_DOOR
    BirchDoor = 428,
    //% blockIdentity="blocks.item" enumval=429 block="Jungle Door"
    //% jres alias=JUNGLE_DOOR
    JungleDoor = 429,
    //% blockIdentity="blocks.item" enumval=430 block="Acacia Door"
    //% jres alias=ACACIA_DOOR
    AcaciaDoor = 430,
    //% blockIdentity="blocks.item" enumval=431 block="Dark Oak Door"
    //% jres alias=DARK_OAK_DOOR
    DarkOakDoor = 431,
    //% blockIdentity="blocks.item" enumval=432 block="Chorus Fruit"
    //% jres alias=CHORUS_FRUIT
    ChorusFruit = 432,
    //% blockIdentity="blocks.item" enumval=433 block="Popped Chorus Fruit"
    //% jres alias=CHORUS_FRUIT_POPPED
    ChorusFruitPopped = 433,
    //% blockIdentity="blocks.item" enumval=437 block="Dragon's Breath"
    //% jres alias=DRAGON_S_BREATH
    DragonSBreath = 437,
    //% blockIdentity="blocks.item" enumval=444 block="Elytra Wings"
    //% jres alias=ELYTRA
    Elytra = 444,
    //% blockIdentity="blocks.item" enumval=445 block="Shulker Shell"
    //% jres alias=SHULKER_SHELL
    ShulkerShell = 445,
    //% blockIdentity="blocks.item" enumval=450 block="Totem of Undying"
    //% jres alias=TOTEM
    Totem = 450,
    //% blockIdentity="blocks.item" enumval=452 block="Iron Nugget"
    //% jres alias=IRON_NUGGET
    IronNugget = 452,
    //% blockIdentity="blocks.item" enumval=455 block="Trident"
    //% jres alias=TRIDENT
    Trident = 455,
    //% blockIdentity="blocks.item" enumval=457 block="Beetroot"
    //% jres alias=BEETROOT_ITEM
    Beetroot = 457,
    //% blockIdentity="blocks.item" enumval=458 block="Beetroot Seeds"
    //% jres alias=BEETROOT_SEEDS
    BeetrootSeeds = 458,
    //% blockIdentity="blocks.item" enumval=459 block="Beetroot Soup"
    //% jres alias=BEETROOT_SOUP
    BeetrootSoup = 459,
    //% blockIdentity="blocks.item" enumval=460 block="Raw Salmon"
    //% jres alias=RAW_SALMON
    RawSalmon = 460,
    //% blockIdentity="blocks.item" enumval=461 block="Clownfish"
    //% jres alias=CLOWNFISH
    Clownfish = 461,
    //% blockIdentity="blocks.item" enumval=462 block="Pufferfish"
    //% jres alias=PUFFERFISH_ITEM
    Pufferfish = 462,
    //% blockIdentity="blocks.item" enumval=463 block="Cooked Salmon"
    //% jres alias=COOKED_SALMON
    CookedSalmon = 463,
    //% blockIdentity="blocks.item" enumval=464 block="Dried Kelp"
    //% jres alias=DRIED_KELP
    DriedKelp = 464,
    //% blockIdentity="blocks.item" enumval=466 block="Enchanted Apple"
    //% jres alias=ENCHANTED_APPLE
    EnchantedApple = 466,
    //% blockIdentity="blocks.item" enumval=467 block="Heart of the Sea"
    //% jres alias=HEART_OF_THE_SEA
    HeartOfTheSea = 467,
    //% blockIdentity="blocks.item" enumval=477 block="Sweet Berries"
    //% jres alias=SWEET_BERRIES
    SweetBerries = 477,
    //% blockIdentity="blocks.item" enumval=513 block="Shield"
    //% jres alias=SHIELD
    Shield = 513,
    //% blockIdentity="blocks.item" enumval=720 block="Campfire"
    //% jres alias=CAMPFIRE_ITEM
    Campfire = 720,
    //% blockIdentity="blocks.item" enumval=736 block="Honeycomb"
    //% jres alias=HONEYCOMB
    Honeycomb = 736,
    //% blockIdentity="blocks.item" enumval=737 block="Honey Bottle"
    //% jres alias=HONEY_BOTTLE
    HoneyBottle = 737
}

/**
 * The method of travel for player or mob
 */
//% emitAsConstant
declare const enum TravelMethod {
    /**
     * Walking normally (default if on ground)
     */
    //% block=walk enumval=1 alias=WALK
    Walk = 1,
    /**
     * Swimming in water
     */
    //% block="swim water" enumval=2 alias=SWIM_WATER
    SwimWater = 2,
    /**
     * In the air when not flying (Falling up or down)
     */
    //% block=fall enumval=3 alias=FALL
    Fall = 3,
    /**
     * Climbing a ladder
     */
    //% block=climb enumval=4 alias=CLIMB
    Climb = 4,
    /**
     * Swimming in lava
     */
    //% block="swim lava" enumval=5 alias=SWIM_LAVA
    SwimLava = 5,
    /**
     * Flying
     */
    //% block="fly" enumval=6 alias=FLY
    Fly = 6,
    /**
     * Riding anything
     */
    //% block=riding enumval=7 alias=RIDING
    Riding = 7,
    /**
     * Sneaking
     */
    //% block=sneak enumval=8 alias=SNEAK
    Sneak = 8,
    /**
     * Sprinting
     */
    //% block=sprint enumval=9 alias=SPRINT
    Sprint = 9,
    /**
     * Bounce
     */
    //% block=bounce enumval=10 alias=BOUNCE
    Bounce = 10
}

declare const enum TestForBlocksMask {
    /**
     * Every block in the source and destination regions must match exactly.
     */
    //% block=all
    All,
    /**
     * Air blocks in the source region will match any block in the destination region.
     */
    //% block=masked
    Masked
}

declare const enum CloneMask {
    //% block=replace
    Replace,
    //% block=masked
    Masked
}

declare const enum CloneMode {
    //% block=normal
    Normal,
    //% block=move
    Move,
    //% block=force
    Force
}

//% emitAsConstant
declare const enum TargetSelectorKind {
    //% block="nearest player (@p)" alias="NEAREST_PLAYER"
    NearestPlayer,
    //% block="yourself (@s)" alias=LOCAL_PLAYER
    LocalPlayer,
    //% block="random player (@r)" alias=RANDOM_PLAYER
    RandomPlayer,
    //% block="all players (@a)" alias=ALL_PLAYERS
    AllPlayers,
    //% block="all entities (@e)" alias=ALL_ENTITIES
    AllEntities,
    //% block="my Agent (@c)" alias=MY_AGENT
    MyAgent
}

declare const enum Axis {
    //% block="x (East/West)"
    X,
    //% block="y (Up/Down)"
    Y,
    //% block="z (South/North)"
    Z
}

//% emitAsConstant
declare const enum SixDirection {
    //% block=forward alias="FORWARD"
    Forward,
    //% block=back alias=BACK
    Back,
    //% block=left alias=LEFT
    Left,
    //% block=right alias=RIGHT
    Right,
    //% block=up alias=UP
    Up,
    //% block=down alias=DOWN
    Down
}

declare const enum FourDirection {
    //% block=forward
    Forward,
    //% block=back
    Back,
    //% block=left
    Left,
    //% block=right
    Right
}

//% emitAsConstant
declare const enum TurnDirection {
    //% block=left
    Left,
    //% block=right
    Right
}

//% emitAsConstant
declare const enum CardinalDirection {
    //% block="North (negative Z)" alias=NORTH_CARDINAL_DIRECTION
    North,
    //% block="East (positive X)" alias=EAST_CARDINAL_DIRECTION
    East,
    //% block="South (positive Z)" alias=SOUTH_CARDINAL_DIRECTION
    South,
    //% block="up (positive Y)" alias=UP_CARDINAL_DIRECTION
    Up,
    //% block="West (negative X)" alias=WEST_CARDINAL_DIRECTION
    West,
    //% block="down (negative Y)" alias=DOWN_CARDINAL_DIRECTION
    Down
}

//% emitAsConstant
declare const enum CompassDirection {
    //% block="West (negative X)" alias=WEST
    West = CardinalDirection.West,
    //% block="East (positive X)" alias=EAST
    East = CardinalDirection.East,
    //% block="North (negative Z)" alias=NORTH
    North = CardinalDirection.North,
    //% block="South (positive Z)" alias=SOUTH
    South = CardinalDirection.South
}

//% emitAsConstant
declare const enum AnimalMob {
    //% blockIdentity="mobs.animal" block="chicken" enumval=10
    //% jres alias=CHICKEN
    Chicken = 10,
    //% blockIdentity="mobs.animal" block="cow" enumval=11
    //% jres alias=COW
    Cow = 11,
    //% blockIdentity="mobs.animal" block="pig" enumval=12
    //% jres alias=PIG
    Pig = 12,
    //% blockIdentity="mobs.animal" block="sheep" enumval=13
    //% jres alias=SHEEP
    Sheep = 13,
    //% blockIdentity="mobs.animal" block="wolf" enumval=14
    //% jres alias=WOLF
    Wolf = 14,
    //% blockIdentity="mobs.animal" block="villager" enumval=15
    //% jres alias=VILLAGER
    Villager = 15,
    //% blockIdentity="mobs.animal" block="mooshroom" enumval=16
    //% jres alias=MUSHROOM_COW
    MushroomCow = 16,
    //% blockIdentity="mobs.animal" block="squid" enumval=17
    //% jres alias=SQUID
    Squid = 17,
    //% blockIdentity="mobs.animal" block="rabbit" enumval=18
    //% jres alias=RABBIT
    Rabbit = 18,
    //% blockIdentity="mobs.animal" block="bat" enumval=19
    //% jres alias=BAT
    Bat = 19,
    //% blockIdentity="mobs.animal" block="ocelot" enumval=22
    //% jres alias=OCELOT
    Ocelot = 22,
    //% blockIdentity="mobs.animal" block="horse" enumval=23
    //% jres alias=HORSE
    Horse = 23,
    //% blockIdentity="mobs.animal" block="donkey" enumval=24
    //% jres alias=DONKEY
    Donkey = 24,
    //% blockIdentity="mobs.animal" block="mule" enumval=25
    //% jres alias=MULE
    Mule = 25,
    //% blockIdentity="mobs.animal" block="skeleton horse" enumval=26
    //% jres alias=SKELETON_HORSE
    SkeletonHorse = 26,
    //% blockIdentity="mobs.animal" block="zombie horse" enumval=27
    //% jres alias=ZOMBIE_HORSE
    ZombieHorse = 27,
    //% blockIdentity="mobs.animal" block="polar bear" enumval=28
    //% jres alias=POLAR_BEAR
    PolarBear = 28,
    //% blockIdentity="mobs.animal" block="llama" enumval=29
    //% jres alias=LLAMA
    Llama = 29,
    //% blockIdentity="mobs.animal" block="parrot" enumval=30
    //% jres alias=PARROT
    Parrot = 30,
    //% blockIdentity="mobs.animal" block="dolphin" enumval=31
    //% jres alias=DOLPHIN
    Dolphin = 31,
    //% blockIdentity="mobs.animal" block="sea turtle" enumval=74
    //% jres alias=SEA_TURTLE
    SeaTurtle = 74,
    //% blockIdentity="mobs.animal" block="cat" enumval=75
    //% jres alias=CAT
    Cat = 75,
    //% blockIdentity="mobs.animal" block="pufferfish" enumval=108
    //% jres alias=PUFFERFISH
    Pufferfish = 108,
    //% blockIdentity="mobs.animal" block="salmon" enumval=109
    //% jres alias=SALMON
    Salmon = 109,
    //% blockIdentity="mobs.animal" block="tropical fish" enumval=111
    //% jres alias=TROPICAL_FISH
    TropicalFish = 111,
    //% blockIdentity="mobs.animal" block="cod" enumval=112
    //% jres alias=COD
    Cod = 112,
    //% blockIdentity="mobs.animal" block="panda" enumval=113
    //% jres alias=PANDA
    Panda = 113,
    //% blockIdentity="mobs.animal" block="wandering trader" enumval=118
    //% jres alias=WANDERING_TRADER
    WanderingTrader = 118,
    //% blockIdentity="mobs.animal" block="fox" enumval=121
    //% jres alias=FOX
    Fox = 121,
    //% blockIdentity="mobs.animal" block="bee" enumval=122
    //% jres alias=BEE
    Bee = 122
}

//% emitAsConstant
declare const enum MonsterMob {
    //% blockIdentity="mobs.monster" block="zombie" enumval=32
    //% jres alias=ZOMBIE
    Zombie,
    //% blockIdentity="mobs.monster" block="creeper" enumval=33
    //% jres alias=CREEPER
    Creeper,
    //% blockIdentity="mobs.monster" block="skeleton" enumval=34
    //% jres alias=SKELETON
    Skeleton,
    //% blockIdentity="mobs.monster" block="spider" enumval=35
    //% jres alias=SPIDER
    Spider,
    //% blockIdentity="mobs.monster" block="zombie pigman" enumval=36
    //% jres alias=PIG_ZOMBIE
    PigZombie,
    //% blockIdentity="mobs.monster" block="slime" enumval=37
    //% jres alias=SLIME
    Slime,
    //% blockIdentity="mobs.monster" block="enderman" enumval=38
    //% jres alias=ENDERMAN
    Enderman,
    //% blockIdentity="mobs.monster" block="silverfish" enumval=39
    //% jres alias=SILVERFISH
    Silverfish,
    //% blockIdentity="mobs.monster" block="cave spider" enumval=40
    //% jres alias=CAVE_SPIDER
    CaveSpider,
    //% blockIdentity="mobs.monster" block="ghast" enumval=41
    //% jres alias=GHAST
    Ghast,
    //% blockIdentity="mobs.monster" block="magma cube" enumval=42
    //% jres alias=LAVA_SLIME
    LavaSlime,
    //% blockIdentity="mobs.monster" block="blaze" enumval=43
    //% jres alias=BLAZE
    Blaze,
    //% blockIdentity="mobs.monster" block="zombie villager" enumval=44
    //% jres alias=ZOMBIE_VILLAGER
    ZombieVillager,
    //% blockIdentity="mobs.monster" block="witch" enumval=45
    //% jres alias=WITCH
    Witch,
    //% blockIdentity="mobs.monster" block="stray" enumval=46
    //% jres alias=STRAY
    Stray,
    //% blockIdentity="mobs.monster" block="husk" enumval=47
    //% jres alias=HUSK
    Husk,
    //% blockIdentity="mobs.monster" block="wither skeleton" enumval=48
    //% jres alias=WITHER_SKELETON
    WitherSkeleton,
    //% blockIdentity="mobs.monster" block="guardian" enumval=49
    //% jres alias=GUARDIAN
    Guardian,
    //% blockIdentity="mobs.monster" block="elder guardian" enumval=50
    //% jres alias=ELDER_GUARDIAN
    ElderGuardian,
    //% blockIdentity="mobs.monster" block="shulker" enumval=54
    //% jres alias=SHULKER
    Shulker,
    //% blockIdentity="mobs.monster" block="endermite" enumval=55
    //% jres alias=ENDERMITE
    Endermite,
    //% blockIdentity="mobs.monster" block="vindicator" enumval=57
    //% jres alias=VINDICATOR
    Vindicator,
    //% blockIdentity="mobs.monster" block="phantom" enumval=58
    //% jres alias=PHANTOM
    Phantom,
    //% blockIdentity="mobs.monster" block="ravager" enumval=59
    //% jres alias=RAVAGER
    Ravager = 59,
    //% blockIdentity="mobs.monster" block="evoker" enumval=104
    //% jres alias=EVOKER
    Evoker,
    //% blockIdentity="mobs.monster" block="vex" enumval=105
    //% jres alias=VEX
    Vex,
    //% blockIdentity="mobs.monster" block="drowned" enumval=110
    //% jres alias=DROWNED
    Drowned,
    //% blockIdentity="mobs.monster" block="pillager" enumval=114
    //% jres alias=PILLAGER
    Pillager = 114,
}

//% emitAsConstant
declare const enum ProjectileMob {
    //% block="primed tnt" enumval=65 alias="PRIMED_TNT"
    //% blockIdentity="mobs.projectile" alias=PRIMED_TNT
    PrimedTnt,
    //% block="xp bottle" enumval=68 alias=XP_BOTTLE
    //% blockIdentity="mobs.projectile" alias=XP_BOTTLE
    XpBottle,
    //% block="xp orb" enumval=69 alias=XP_ORB
    //% blockIdentity="mobs.projectile" alias=XP_ORB
    XpOrb,
    //% block="fireworks rocket" enumval=72 alias=FIREWORKS_ROCKET
    //% blockIdentity="mobs.projectile" alias=FIREWORKS_ROCKET
    FireworksRocket,
    //% block="arrow" enumval=80 alias=ARROW_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=ARROW_PROJECTILE_MOB
    Arrow,
    //% block="snowball" enumval=81 alias=SNOWBALL_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=SNOWBALL_PROJECTILE_MOB
    Snowball,
    //% block="egg" enumval=82 alias=EGG_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=EGG_PROJECTILE_MOB
    Egg,
    //% block="splash potion" enumval=86 alias=SPLASH_POTION
    //% blockIdentity="mobs.projectile" alias=SPLASH_POTION
    SplashPotion,
    //% block="lightning bolt" enumval=93 alias=LIGHTNING_BOLT
    //% blockIdentity="mobs.projectile" alias=LIGHTNING_BOLT
    LightningBolt,
    //% block="evocation fang" enumval=103 alias=EVOCATION_FANG
    //% blockIdentity="mobs.projectile" alias=EVOCATION_FANG
    EvocationFang
}

//% emitAsConstant
declare const enum Effect {
    //% block="Speed" enumval=1 alias="SPEED"
    //% jres alias=SPEED
    //% blockIdentity="mobs.__effect" alias=SPEED
    Speed = 1,
    //% block="Slowness" enumval=2
    //% jres alias=SLOWNESS
    //% blockIdentity="mobs.__effect" alias=SLOWNESS
    Slowness = 2,
    //% block="Haste" enumval=3
    //% jres alias=HASTE
    //% blockIdentity="mobs.__effect" alias=HASTE
    Haste = 3,
    //% block="Mining Fatigue" enumval=4
    //% jres alias=MINING_FATIGUE
    //% blockIdentity="mobs.__effect" alias=MINING_FATIGUE
    MiningFatigue = 4,
    //% block="Strength" enumval=5
    //% jres alias=STRENGTH
    //% blockIdentity="mobs.__effect" alias=STRENGTH
    Strength = 5,
    //% block="Jump Boost" enumval=8
    //% jres alias=JUMP_BOOST
    //% blockIdentity="mobs.__effect" alias=JUMP_BOOST
    JumpBoost = 8,
    //% block="Nausea" enumval=9
    //% jres alias=NAUSEA
    //% blockIdentity="mobs.__effect" alias=NAUSEA
    Nausea = 9,
    //% block="Regeneration" enumval=10
    //% jres alias=REGENERATION
    //% blockIdentity="mobs.__effect" alias=REGENERATION
    Regeneration = 10,
    //% block="Resistance" enumval=11
    //% jres alias=RESISTANCE
    //% blockIdentity="mobs.__effect" alias=RESISTANCE
    Resistance = 11,
    //% block="Fire Resistance" enumval=12
    //% jres alias=FIRE_RESISTANCE
    //% blockIdentity="mobs.__effect" alias=FIRE_RESISTANCE
    FireResistance = 12,
    //% block="Water Breathing" enumval=13
    //% jres alias=WATER_BREATHING
    //% blockIdentity="mobs.__effect" alias=WATER_BREATHING
    WaterBreathing = 13,
    //% block="Invisibility" enumval=14
    //% jres alias=INVISIBILITY
    //% blockIdentity="mobs.__effect" alias=INVISIBILITY
    Invisibility = 14,
    //% block="Blindness" enumval=15
    //% jres alias=BLINDNESS
    //% blockIdentity="mobs.__effect" alias=BLINDNESS
    Blindness = 15,
    //% block="Night Vision" enumval=16
    //% jres alias=NIGHT_VISION
    //% blockIdentity="mobs.__effect" alias=NIGHT_VISION
    NightVision = 16,
    //% block="Hunger" enumval=17
    //% jres alias=HUNGER
    //% blockIdentity="mobs.__effect" alias=HUNGER
    Hunger = 17,
    //% block="Weakness" enumval=18
    //% jres alias=WEAKNESS
    //% blockIdentity="mobs.__effect" alias=WEAKNESS
    Weakness = 18,
    //% block="Poison" enumval=19
    //% jres alias=POISON
    //% blockIdentity="mobs.__effect" alias=POISON
    Poison = 19,
    //% block="Wither" enumval=20
    //% jres alias=WITHER
    //% blockIdentity="mobs.__effect" alias=WITHER
    Wither = 20,
    //% block="Health Boost" enumval=21
    //% jres alias=HEALTH_BOOST
    //% blockIdentity="mobs.__effect" alias=HEALTH_BOOST
    HealthBoost = 21,
    //% block="Absorption" enumval=22
    //% jres alias=ABSORPTION
    //% blockIdentity="mobs.__effect" alias=ABSORPTION
    Absorption = 22,
    //% block="Levitation" enumval=24
    //% jres alias=LEVITATION
    //% blockIdentity="mobs.__effect" alias=LEVITATION
    Levitation = 24
}

//% emitAsCommand
declare const enum AgentCommand {
    //% block=attack alias="ATTACK"
    Attack,
    //% block=destroy alias=DESTROY
    Destroy,
    //% block=till alias=TILL
    Till,
    //% block=dropall alias=DROP_ALL
    DropAll
}

declare const enum AgentDetection {
    //% block="block"
    Block,
    //% block="redstone"
    Redstone
}

declare const enum AgentInspection {
    //% block="block"
    Block,
    //% block="data"
    Data
}

//% emitAsConstant
declare const enum BlockColor {
    //% block="white" enumval=14540253 blockIdentity="blocks.color" alias="WHITE"
    White,
    //% block="orange" enumval=14384446 blockIdentity="blocks.color" alias=ORANGE
    Orange,
    //% block="magenta" enumval=11751612 blockIdentity="blocks.color" alias=MAGENTA
    Magenta,
    //% block="light blue" enumval=7047881 blockIdentity="blocks.color" alias=LIGHT_BLUE
    LightBlue,
    //% block="yellow" enumval=11642407 blockIdentity="blocks.color" alias=YELLOW
    Yellow,
    //% block="lime" enumval=4304440 blockIdentity="blocks.color" alias=LIME
    Lime,
    //% block="pink" enumval=13665433 blockIdentity="blocks.color" alias=PINK
    Pink,
    //% block="gray" enumval=4210752 blockIdentity="blocks.color" alias=GRAY
    Gray,
    //% block="light gray" enumval=10133921 blockIdentity="blocks.color" alias=LIGHT_GRAY
    LightGray,
    //% block="cyan" enumval=3042953 blockIdentity="blocks.color" alias=CYAN
    Cyan,
    //% block="purple" enumval=8273333 blockIdentity="blocks.color" alias=PURPLE
    Purple,
    //% block="blue" enumval=3029133 blockIdentity="blocks.color" alias=BLUE
    Blue,
    //% block="brown" enumval=5190175 blockIdentity="blocks.color" alias=BROWN
    Brown,
    //% block="green" enumval=3491355 blockIdentity="blocks.color" alias=GREEN
    Green,
    //% block="red" enumval=9843760 blockIdentity="blocks.color" alias=RED
    Red,
    //% block="black" enumval=1644054 blockIdentity="blocks.color" alias=BLACK
    Black
}

//% emitAsConstant
declare const enum GameMode {
    //% block=survival alias=SURVIVAL
    Survival,
    //% block=creative alias=CREATIVE
    Creative,
    //% block=adventure alias=ADVENTURE
    Adventure
}

//% emitAsConstant
declare const enum Weather {
    //% block=clear alias=CLEAR
    Clear,
    //% block=rain alias=RAIN
    Rain,
    //% block=thunder alias=THUNDER
    Thunder
}

/**
 * The time of day
 */
//% emitAsConstant
declare const enum DayTime {
    //% block=day enumval=0 blockIdentity="gameplay.time" alias=DAY
    Day = 0,
    //% block=dawn enumval=23000 blockIdentity="gameplay.time" alias=DAWN
    Dawn = 23000,
    //% block=midday enumval=6000 blockIdentity="gameplay.time" alias=MIDDAY
    Midday = 6000,
    //% block=dusk enumval=12000 blockIdentity="gameplay.time" alias=DUSK
    Dusk = 12000,
    //% block=night enumval=14000 blockIdentity="gameplay.time" alias=NIGHT
    Night = 14000,
    //% block=midnight enumval=18000 blockIdentity="gameplay.time" alias=MIDNIGHT
    Midnight = 18000
}

/**
 * Fill options for exixting blocks. Control keeping, replacing, or destroying existing blocks
 */
declare const enum FillOperation {
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
     */
    //% block=replace
    Replace,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are changed to air, dropping their contents as entities but not themselves.
     * If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=hollow
    Hollow,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are not affected. If the fill region has no inner blocks
     * (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=outline
    Outline,
    /**
     * Replaces only air blocks in the fill region with the specified block.
     */
    //% block=keep
    Keep,
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, dropping the existing blocks
     * (including those that are unchanged) and block contents as entities as if they had been mined with an unenchanted
     * diamond shovel or pickaxe. (Blocks that can only be mined with shears, such as vines, will not drop; neither will liquids.)
     */
    //% block=destroy
    Destroy
}

/**
 * Game rule for gameplay settings
 */
//% emitAsConstant
declare const enum GameRule {
    //% block=PvP alias=PV_P
    PvP,
    //% block="drowning damage" alias=DROWNING_DAMAGE
    DrowningDamage,
    //% block="fall damage" alias=FALL_DAMAGE
    FallDamage,
    //% block="fire damage" alias=FIRE_DAMAGE
    FireDamage,
    //% block="daylight cycle" alias=DAYLIGHT_CYCLE
    DaylightCycle,
    //% block="mob loot" alias=MOB_LOOT
    MobLoot,
    //% block="mob spawning" alias=MOB_SPAWNING
    MobSpawning,
    //% block="weather cycle" alias=WEATHER_CYCLE
    WeatherCycle,
    //% block="mob griefing" alias=MOB_GRIEFING
    MobGriefing,
    //% block="block drops" alias=TILE_DROPS
    TileDrops,
    //% block="keep inventory" alias=KEEP_INVENTORY
    KeepInventory,
    //% block="tnt explodes" alias=TNT_EXPLODES
    TntExplodes,
    //% block="natural regeneration" alias=NATURAL_REGENERATION
    NaturalRegeneration,
    //% block="command block output" alias=COMMAND_BLOCK_OUTPUT
    CommandBlockOutput,
    //% block="entity drops" alias=ENTITY_DROPS
    EntityDrops,
    //% block="fire spreads" alias=DO_FIRE_TICK
    DoFireTick,
    //% block="show player coordinate" alias=SHOW_COORDINATES
    ShowCoordinates
}

/**
 * Game difficulty for gameplay settings
 */
//% emitAsConstant
declare const enum GameDifficulty {
    //% block="peaceful" alias=PEACEFUL
    Peaceful,
    //% block="easy" alias=EASY
    Easy,
    //% block="normal" alias=NORMAL
    Normal,
    //% block="hard" alias=HARD
    Hard
}

/**
 * Agent assist action
 */
//% emitAsConstant
declare const enum AgentAssist {
    //% block="place on move" alias="PLACE_ON_MOVE"
    PlaceOnMove,
    //% block="place from any slot" alias=PLACE_FROM_ANY_SLOT
    PlaceFromAnySlot,
    //% block="destroy obstacles" alias=DESTROY_OBSTACLES
    DestroyObstacles,
    //% blockHidden=true
    DetroyObstacles
}

/**
 * Time value type for time queries
 */
//% emitAsConstant
declare const enum TimeQuery {
    //% block=gametime alias=GAME_TIME
    GameTime,
    //% block=daytime alias=DAY_TIME
    DayTime,
    //% block=day alias=DAY_TIME_QUERY
    Day,
    /**
     * The real-life time of day, expressed in Minecraft game ticks
     */
    //% block="real life" alias=REAL_LIFE
    RealLife
}

/**
 * Positions for aligning a lever when on or off
 */
//% emitAsConstant
declare const enum LeverPosition {
    //% block="on block bottom pointing West" alias=BLOCK_BOTTOM_EAST_WHEN_OFF
    BlockBottomEastWhenOff,
    //% block="on block East side" alias=BLOCK_SIDE_FACING_EAST
    BlockSideFacingEast,
    //% block="on block West side" alias=BLOCK_SIDE_FACING_WEST
    BlockSideFacingWest,
    //% block="on block South side" alias=BLOCK_SIDE_FACING_SOUTH
    BlockSideFacingSouth,
    //% block="on block North side" alias=BLOCK_SIDE_FACING_NORTH
    BlockSideFacingNorth,
    //% block="on block top pointing South" alias=BLOCK_TOP_POINTS_SOUTH_WHEN_OFF
    BlockTopPointsSouthWhenOff,
    //% block="on block top pointing West" alias=BLOCK_TOP_POINTS_EAST_WHEN_OFF
    BlockTopPointsEastWhenOff,
    //% block="on block bottom pointing South" alias=BLOCK_BOTTOM_POINTS_SOUTH_WHEN_OFF
    BlockBottomPointsSouthWhenOff,
}

/**
 * Comparator modes
 */
declare const enum ComparatorMode {
    //% block="compare"
    Compare,
    //% block="substract"
    Substract
}

/**
 * Shape fill operators
 */
declare const enum ShapeOperation {
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
     */
    //% block=replace
    Replace,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are changed to air, dropping their contents as entities but not themselves.
     * If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=hollow
    Hollow,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are not affected. If the fill region has no inner blocks
     * (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block=outline
    Outline
}

/**
 * Arguments valid for chat commands
 */
declare const enum ChatArgument {
    number,
    number2,
    string,
    string2,
    position,
    position2,
    selector,
    selector2
}

/**
 * Blocks that can change color
*/
//% emitAsConstant
declare const enum ColoredBlock {
    //% blockIdentity="blocks.block" enumval=35 block="wool"
    //% jres alias=WOOL_COLORED_BLOCK
    Wool = 35,
    //% blockIdentity="blocks.block" enumval=236 block="concrete" alias=CONCRETE
    Concrete = 236
}
