let layout = 
[
    1, 0, 1,
    2, 0, 2,
    0, 2, 0
]

class GPS {
    constructor(rowSize, layout) {
        this.rowSize = rowSize
        this.layout = layout
        this.current = 0
        this.previous = 0
        this.isSearching = true
    }

    // SEARCH WHILE START IS NOT EQUALS TO THE END
    
    // MOVE
    search() {
        while(this.isSearching) {
            this.move()
        }
        return "YOU WON"
    }

    move() {
        if(this.isSearching) {
            this.up()
            let interval = window.setInterval(console.log("waiting"), 3000)
        }
        if(this.isSearching) {
            this.right()
            let interval = window.setInterval(console.log("waiting"), 3000)            
        }
        if(this.isSearching) {
            this.down()
            let interval = window.setInterval(console.log("waiting"), 3000)
        }
        if(this.isSearching) {
            this.left()
            let interval = window.setInterval(console.log("waiting"), 3000)
        }

        return "hello from move"
    }

    up() {
        if(this.current === 0 || this.current === 1 || this.current === 2) {
            console.log("top wall")
            return "wall"
        }  else {
            if(this.layout[this.current - this.rowSize] === 0 && this.current - this.rowSize !== this.previous) {
                console.log("not found")
                this.previous = this.current
                this.current = this.current - this.rowSize
            } else if(this.layout[this.current - this.rowSize] !== this.layout[0]) {
                console.log("wrong way")
                return "wrong"
            } else {
                if(this.current - this.rowSize === this.previous) {
                    console.log("previous zone")
                    return -1
                } else {
                    console.log("found")
                    this.previous = this.current
                    this.current = this.current - this.rowSize
                    this.isSearching = false
                    return "found"

                }
            }   
        }
    }

    right() {
        if(((this.current + 1)%(this.rowSize) === 0)){
            console.log("right wall")
            return "wall"
        } else {
            if(this.layout[this.current + 1] === 0 && this.current + 1 !== this.previous) {
                console.log("not found")
                this.previous = this.current
                console.log(this.previous)
                this.current = this.current + 1
                console.log(this.current)
            } else if(this.layout[this.current + 1] !== this.layout[0]) {
                console.log("wrong way")
                return "wrong"
            } else {
                if(this.current + 1 === this.previous) {
                    console.log("previous zone")
                    return -1
                } else {
                    console.log("found")
                    this.previous = this.current
                    this.current = this.current + 1
                    this.isSearching = false
                    return "found"
                }
            }
        }
    }

    down() {
        if(this.current === 6 || this.current === 7 || this.current === 8) {
            console.log("bottom wall")
            return "wall"
        }  else {
            if(this.layout[this.current + this.rowSize] === 0 && this.current + this.rowSize !== this.previous) {                
                this.previous = this.current
                this.current = this.current + this.rowSize
                console.log(this.current)
                console.log("not found")
            } else if(this.layout[this.current + this.rowSize] !== this.layout[0]) {
                console.log(this.current)
                console.log("wrong way")
                return "wrong"
            } else {
                if(this.current + this.rowSize === this.previous) {
                    console.log("previous zone")
                    return -1
                } else {
                    this.previous = this.current
                    this.current = this.current + this.rowSize
                    console.log(this.current)
                    console.log("found")
                    this.isSearching = false
                    return "found"
                }
            }   
        }
    }

    left() {
        if(((this.current)%(this.rowSize) === 0)){
            console.log("left wall")
            return "wall"
        } else {
            if(this.layout[this.current - 1] === 0 && this.current -1 !== this.previous) {
                console.log("not found")
                this.previous = this.current
                this.current = this.current - 1
            } else if(this.layout[this.current - 1] !== this.layout[0]) {
                console.log("wrong way")
                return "wrong"
            } else {
                if(this.current - 1 === this.previous) {
                    console.log("previous zone")
                    return -1
                } else {
                    console.log("found")
                    this.previous = this.current
                    this.current = this.current -1
                    this.isSearching = false
                    return "found"
                }
            }
        }
    }
}

const gps = new GPS(3, layout, 0)