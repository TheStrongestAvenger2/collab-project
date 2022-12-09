controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let Monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
let banana = sprites.create(img`
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
    `, SpriteKind.Projectile)
Monkey.setPosition(7, 7)
scene.setBackgroundColor(7)
