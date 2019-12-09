sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        otherSprite.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    }
    info.startCountdown(10)
})
let mysprite2: Sprite = null
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 
5 b b b b b 7 b b b b b b b b b b b b b b b b b b b b b b b b 5 
5 b b b b 7 7 7 b b b b b b b b b b 7 7 7 b b b b b b b b b b 5 
5 b b b b 7 7 7 b b b b b b b b b b 7 7 7 b b b b b b b b b b 5 
5 b b b b b e b b b b b b b b b b b 7 7 7 b b b b b b b b b b 5 
5 b b b b b e b b b b b b b b b b b b b b b b b b b b b b b b 5 
5 b b b b b e b b b b b b b b b b b b b b b b b b b b b b b b 5 
5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 
5 b b b b b b b b b b b b b b b b b b b b b b b b 7 b b b b b 5 
5 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 b b b b 5 
5 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 b b b b 5 
5 b b b b b b b b b b b b b b b b f b b b f b b b e b b b b b 5 
5 b b b b b b b b b b b b b b b b b f b f b b b b e b b b b b 5 
5 b b b b b b b b b b b b b b b b b b 3 c b b b b e b b b b b 5 
5 b b b b b b b b b b b b b b b c b b c b b b b b b b b b b b 5 
5 b b b b b b b b b b b b b b b b c c c b b b b b b b b b b b 5 
5 b b b b b b b 7 b b b b b b b b c b c b b b b b b b b b b b 5 
5 b b b b b b 7 7 7 b b b b b b f f f f f f f f f b b b b b b 5 
5 b b b b b b 7 7 7 b b b b b b f 8 8 8 8 8 8 8 f f f f b b b 5 
5 b b b b b b b e b b b b b b b f 8 8 8 8 8 8 8 8 8 8 f b b b 5 
5 b b b b b b b e b b b b b b b f 8 8 8 8 8 8 8 8 8 8 f b b b 5 
5 b b b b b b b e b b b b b b b f 8 8 8 8 8 8 8 8 8 8 f f b b 5 
5 b b b b b b b b b b b b b b b f 8 8 8 8 8 8 8 8 8 8 8 f b b 5 
5 b b b 7 7 7 b b b b b b b b b f f 8 8 8 8 8 8 8 8 8 8 f b b 5 
5 b b b 7 7 7 b b b b b b b b b b f 8 8 8 8 8 8 8 8 8 8 f b b 5 
5 b b b 7 7 7 b b b b b b b b b b f f 8 8 8 8 8 8 8 8 8 f b b 5 
5 b b b b b b b b b b b b b b b b b f 8 8 8 8 8 8 8 8 f f b b 5 
5 b b b b b b b b b b b b b b b b b f f f f f 8 8 8 8 f b b b 5 
5 b b b b b b b b b b b b b b b b b b b b b f f f f f f b b b 5 
5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
scene.setTile(14, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e f e e e e e e e f e e e 
e e e e f e e e e e e f f e e e 
e e e e f e e e e e e f e e e e 
e e e f f e e e e e e f e e e e 
e e e f f e e e e e e f e e e e 
e e e f e e e e e e e f e e e e 
e e e f e e e e e e e f e e e e 
e e f f e e e e e e f f e e e e 
e e f e e e e e e e f e e e e e 
e f f e e e e e e f f e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
// when turned on, player can't move to this color.
// There is a color texture to add to the yellow.
scene.setTile(5, img`
f f f f f f f f f f f f f f f f 
f a a a a a a a a a a a a a a f 
f a c c c c c c c c c c c c a f 
f a c b b b b b b b b b b c a f 
f a c b f f f f f f f f b c a f 
f a c b f a a a a a a f b c a f 
f a c b f a c c c c a f b c a f 
f a c b f a c b b c a f b c a f 
f a c b f a c b b c a f b c a f 
f a c b f a c c c c a f b c a f 
f a c b f a a a a a a f b c a f 
f a c b f f f f f f f f b c a f 
f a c b b b b b b b b b b c a f 
f a c c c c c c c c c c c c a f 
f a a a a a a a a a a a a a a f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
scene.setTile(12, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 a a a a a 7 7 
7 7 7 7 7 7 7 7 7 a c c c a 7 7 
7 7 7 7 7 7 7 7 7 a c b c a 7 7 
7 7 7 7 7 7 7 7 7 a c c c a 7 7 
7 7 7 7 7 7 7 7 7 a a a a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 a a a a a 7 7 7 7 7 7 7 
7 7 7 7 a c c c a 7 7 7 7 7 7 7 
7 7 7 7 a c b c a 7 7 7 7 7 7 7 
7 7 7 7 a c c c a 7 7 7 7 7 7 7 
7 7 7 7 a a a a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 
8 8 8 1 8 8 8 8 8 1 8 8 8 8 8 8 
8 8 8 1 1 8 8 8 8 1 8 8 8 8 8 8 
8 8 8 8 1 1 8 8 8 1 1 8 8 8 8 8 
8 8 8 8 8 1 1 8 8 8 1 1 8 8 8 8 
8 8 8 1 8 8 1 8 8 8 8 8 1 1 8 8 
8 8 8 1 8 8 1 1 8 8 8 8 8 1 1 8 
8 8 8 8 1 8 8 8 1 1 8 8 8 8 1 8 
8 8 8 8 8 1 1 8 8 1 8 8 8 8 1 8 
8 1 8 8 8 8 1 8 8 8 1 1 8 8 1 8 
8 1 1 8 8 8 8 1 1 8 8 8 8 8 8 8 
8 8 8 1 8 8 8 8 1 8 8 8 8 8 8 8 
8 8 8 8 1 1 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 1 1 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 1 1 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(11, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b 7 b b 7 b b b 7 b b b b b b 
7 b 7 b b 7 b b b 7 b b b b 7 b 
7 b b 7 b 7 b b b b 7 b b b 7 b 
7 b b 7 b 7 b b b b 7 b b b 7 b 
7 b b 7 b 7 7 b b b 7 b b b 7 b 
7 7 b b b b 7 b b b 7 b b b 7 b 
b 7 b b b b b b b b b b b b 7 b 
`, false)
scene.setTile(3, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e f a a a a e e e e e e e e 
e e e f a a a 1 e e e e e e e e 
e e e f a a a a e e e e e e e e 
e e e f f f f f e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
let mySprite = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
// controls the sprite
controller.moveSprite(mySprite)
// Camera follows the sprite throughout the game
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 4; index++) {
    mysprite2 = sprites.create(img`
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 a c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c a 7 7 c . . . 
. . . . . . . . c a a a c . . . 
. . . . . . . . c a a a c c . . 
. . . c c c c c c c a a a c c . 
. . c a 7 7 7 7 a c c a a a c . 
. c 7 7 7 7 7 7 7 7 c a a a c c 
c a 7 7 7 7 7 7 7 7 a c a a a c 
c 7 7 c 7 7 7 7 c 7 7 c a a a c 
c 7 7 c c 7 7 c c 7 7 c a a a c 
c 7 7 a f 7 7 f a 7 7 c a a a c 
. f 7 7 7 7 7 7 7 7 7 a a a c . 
. f f 1 f f f 1 f f c c c c c . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    mysprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    mysprite2.z = 1
}
info.startCountdown(10)
