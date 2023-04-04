// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`18001800060202020202020202020202020202020202020202020202010205010101010101020202020202020202020202020202010202020202020201010202020202020202020202020202010202020202020202010202010101010101010102020202010202020202020202010202010202020202020101020202010101010101010101010202010202020202020201010202010202020202020202020202010202020202020202010202010202020202020202020202010202020202020202010202010202020101010101010101010202020202020202010101010202020402020202020202020202020202020202020201010202020202020202020202020202020202020202020201010101010101010101010101010101010101010101010101010202020202020202020202020202020202020202020202010202020202010101010101010101020201010101020202010202020202010202020202020201020201020201010102010101020202010101010101010201010101020202020102010201020202020202020202010202020202020202020102010201020202020202020201010202010101010102020102010201020202020202020201020201010202020102020102010201020202020202020101020201020202020102020102010201020202020201010102020201020202020101010102010201020201010101020202010101020202020202020202010201020201020202020202010202020202020202020202010201010101020202020202010101010101010101010103`, img`
.22222222222222222222222
.2.......222222222222222
.2222222..22222222222222
.22222222.22........2222
.22222222.22.222222..222
..........22.2222222..22
.22222222222.22222222.22
.22222222222.22222222.22
.222.........22222222...
.222.222222222222222222.
.2222222222222222222222.
........................
.22222222222222222222222
.22222.........22....222
.22222.2222222.22.22...2
...222.......2....2222.2
.2.222222222.222222222.2
.2.22222222..22.....22.2
.2.22222222.22..222.22.2
.2.2222222..22.2222.22.2
.2.22222...222.2222....2
.2.22....222...222222222
.2.22.222222.22222222222
.2....222222............
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
