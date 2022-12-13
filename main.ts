controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . f f f . . . . . . . . . 
        . . . . f e f . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . . f 5 5 f . . . . . . . . 
        . . . f 5 5 5 f . . . . . . . . 
        . . f 5 5 5 5 5 f . . . . . . . 
        . . f 5 5 5 5 5 f . . . . . . . 
        . f 5 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 5 5 5 5 5 f . . . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f f f f 5 5 5 5 5 5 f . 
        . . . . . . . f f f f f f f f . 
        `, Monkey, -50, 50)
    pause(1000)
})
info.onLifeZero(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.fire, 500)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let Monkey: Sprite = null
Monkey = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
let Dinosaur = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `, SpriteKind.Enemy)
Dinosaur.setVelocity(randint(35, 80), randint(30, 80))
Monkey.setPosition(141, 11)
Dinosaur.setBounceOnWall(true)
scene.setBackgroundColor(7)
info.startCountdown(10)
info.setLife(3)
