class Sprite {
    constructor(position) {
        this.position = position
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, 150)        
    }
}

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const player = new Sprite({
    x:0,
    y:0
})

const enemy = new Sprite({
    x: 400,
    y: 100
})

canvas.width =  1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)


player.draw()
enemy.draw()

console.log(player)