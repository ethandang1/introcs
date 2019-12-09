sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mysprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
})
let mysprite2: Sprite = null
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 5 
5 d d d d d 7 d d d d d d d d d d d d d d d d d d d d d d d d 5 
5 d d d d 7 7 7 d d d d d d d d d d 7 7 7 d d d d d d d d d d 5 
5 d d d d 7 7 7 d d d d d d d d d d 7 7 7 d d d d d d d d d d 5 
5 d d d d d e d d d d d d d d d d d 7 7 7 d d d d d d d d d d 5 
5 d d d d d e d d d d d d d d d d d d d d d d d d d d d d d d 5 
5 d d d d d e d d d d d d d d d d d d d d d d d d d d d d d d 5 
5 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 5 
5 d d d d d d d d d d d d d d d d d d d d d d d d 7 d d d d d 5 
5 d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 d d d d 5 
5 d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 d d d d 5 
5 d d d d d d d d d d d d d d d d f d d d f d d d e d d d d d 5 
5 d d d d d d d d d d d d d d d d d f d f d d d d e d d d d d 5 
5 d d d d d d d d d d d d d d d d d d 3 c d d d d e d d d d d 5 
5 d d d d d d d d d d d d d d d c d d c d d d d d d d d d d d 5 
5 d d d d d d d d d d d d d d d d c c c d d d d d d d d d d d 5 
5 d d d d d d d 7 d d d d d d d d c d c d d d d d d d d d d d 5 
5 d d d d d d 7 7 7 d d d d d d 9 9 9 9 9 9 9 9 9 d d d d d d 5 
5 d d d d d d 7 7 7 d d d d d d 9 8 8 8 8 8 8 8 9 9 9 9 d d d 5 
5 d d d d d d d e d d d d d d d 9 8 8 8 8 8 8 8 8 8 8 9 d d d 5 
5 d d d d d d d e d d d d d d d 9 8 8 8 8 8 8 8 8 8 8 9 d d d 5 
5 d d d d d d d e d d d d d d d 9 8 8 8 8 8 8 8 8 8 8 9 9 d d 5 
5 d d d d d d d d d d d d d d d 9 8 8 8 8 8 8 8 8 8 8 8 9 d d 5 
5 d d d 7 7 7 d d d d d d d d d 9 9 8 8 8 8 8 8 8 8 8 8 9 d d 5 
5 d d d 7 7 7 d d d d d d d d d d 9 8 8 8 8 8 8 8 8 8 8 9 d d 5 
5 d d d 7 7 7 d d d d d d d d d d 9 9 8 8 8 8 8 8 8 8 8 9 d d 5 
5 d d d d d d d d d d d d d d d d d 9 8 8 8 8 8 8 8 8 9 9 d d 5 
5 d d d d d d d d d d d d d d d d d 9 9 9 9 9 8 8 8 8 9 d d d 5 
5 d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 d d d 5 
5 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 5 
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
7 5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 
5 7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 
5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 5 5 5 5 5 7 7 7 7 7 5 
5 7 7 7 5 5 7 7 7 7 5 5 7 7 7 5 
5 7 7 5 5 7 7 7 7 7 7 5 5 7 7 5 
5 7 5 5 7 7 7 5 5 7 7 7 5 7 7 5 
5 7 5 7 7 7 5 5 7 7 7 7 5 7 7 5 
5 7 5 7 7 7 5 7 7 7 7 7 5 7 7 5 
5 7 5 7 7 7 5 5 7 7 7 7 5 7 7 5 
5 7 7 5 7 7 7 5 5 5 5 5 7 7 7 5 
5 7 7 5 5 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 5 5 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 5 5 7 7 7 7 7 7 5 5 7 
5 7 7 7 7 7 7 5 5 5 5 5 5 5 7 7 
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
`, true)
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
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 
7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 
7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 
7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 
7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 7 
7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 7 
7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 7 
7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 7 
7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 7 
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
scene.setTile(13, img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d 7 d d 7 d d d 7 d d d d d d 
7 d 7 d d 7 d d d 7 d d d d 7 d 
7 d d 7 d 7 d d d d 7 d d d 7 d 
7 d d 7 d 7 d d d d 7 d d d 7 d 
7 d d 7 d 7 7 d d d 7 d d d 7 d 
7 7 d d d d 7 d d d 7 d d d 7 d 
d 7 d d d d d d d d d d d d 7 d 
`, false)
scene.setTile(3, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e f f f f e e e e e e e e e 
e e f f 1 1 1 e e e e e e e e e 
e e f f 1 1 1 e e e e e e e e e 
e e f f 1 1 1 e e e e e e e e e 
e e f f f f f e e e e e e e e e 
e e f f f f f e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 3 3 3 3 3 3 3 3 7 . . . 
. . . 7 3 3 3 3 3 3 3 3 7 . . . 
. . . 7 3 5 f 3 3 5 f 3 7 . . . 
. . . 7 8 4 5 8 8 4 5 8 7 . . . 
. . . 7 8 8 8 8 8 8 8 8 7 . . . 
. . . 7 8 8 8 9 9 8 8 8 7 . . . 
. . . 7 2 2 2 2 2 2 2 2 7 . . . 
. . . 7 2 2 f a a a f 2 7 . . . 
. . . 7 2 2 2 2 2 2 2 2 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// controls the sprite
controller.moveSprite(mySprite)
// Camera follows the sprite throughout the game
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 1; index++) {
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
}
info.startCountdown(10)
