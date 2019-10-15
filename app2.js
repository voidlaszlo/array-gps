let layout = 
[
    1, 0, 0,
    2, 0, 2,
    1, 0, 0
]

let squares = document.querySelectorAll(".box")

class GPS {
    constructor(rowSize, layout) {
        this.rowSize = rowSize
        this.layout = layout
        this.current = 0
        this.previous = 0
        this.isSearching = true
        this.moves = 0
    }

    show() {
        let output = document.getElementById('output')
        output.innerHTML = ""
        for(let i = 0; i < this.layout.length; i++) {
            output.innerHTML += `<div key="${i}" class="box">${this.layout[i]}</div>`
        }
        squares = document.querySelectorAll(".box")
        squares[0].style.color = "red"
    }
    
    // SEARCH
    search() {
        while(this.isSearching && this.moves <= 10) {
            this.move()
        }
        if(this.moves >= 10) {
            return "Not Found"
        } else {
            return `Found it in ${this.moves} moves.`
        }
    }

    move() {
        this.checkNearby()
        if(this.isSearching) {
            this.checkNearby()
            this.up()
            this.checkNearby()
        }
        if(this.isSearching) {
            this.checkNearby()
            this.right()
            this.checkNearby()
        }
        if(this.isSearching) {
            this.checkNearby()
            this.down()
            this.checkNearby()
        }
        if(this.isSearching) {
            this.checkNearby()
            this.left()
            this.checkNearby()
        }
    
    
    
    return "hello from move"
}

checkNearby() {

    if(this.layout[this.current + 1] === 1 && this.current + 1 !== 0 && this.isSearching) {
        console.log("from the new")
        squares[this.current].style.color = "red"
        this.right()
    } else if(this.layout[this.current - 1] === 1 && this.current - 1 !== 0 && this.isSearching) {
        console.log("from the new")
        squares[this.current].style.color = "red"
        this.left()
    } else if(this.layout[this.current - this.rowSize] === 1 && this.current - this.rowSize !== 0 && this.isSearching)  {
        console.log("from the new")
        squares[this.current].style.color = "red"
        this.up()
    } else if(this.layout[this.current + this.rowSize] === 1 && this.current + this.rowSize !== 0 && this.isSearching) {
        console.log("from the new")
        squares[this.current].style.color = "red"
        this.down()
    }          
    
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
                this.moves++
                squares[this.current].style.color = "red"
            } else if(this.layout[this.current - this.rowSize] !== this.layout[0]) {
                console.log("wrong way")
                return "wrong"
            } else {
                if(this.current - this.rowSize === this.previous) {
                    console.log("previous zone")
                    return -1
                } else {
                    console.log("found")
                    this.moves++
                    this.previous = this.current
                    this.current = this.current - this.rowSize
                    this.isSearching = false
                    squares[this.current].style.color = "red"
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
                this.current = this.current + 1
                this.moves++
                squares[this.current].style.color = "red"
            } else if(this.layout[this.current + 1] !== this.layout[0]) {
                console.log("wrong way")
                return "wrong"
            } else {
                if(this.current + 1 === this.previous) {
                    console.log("previous zone")
                    return -1
                } else {
                    console.log("found")
                    this.moves++
                    this.previous = this.current
                    this.current = this.current + 1
                    this.isSearching = false
                    squares[this.current].style.color = "red"
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
                this.moves++              
                this.previous = this.current
                this.current = this.current + this.rowSize
                squares[this.current].style.color = "red"
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
                    this.moves++
                    this.previous = this.current
                    this.current = this.current + this.rowSize
                    console.log(this.current)
                    console.log("found")
                    this.isSearching = false
                    squares[this.current].style.color = "red"
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
                this.moves++
                this.previous = this.current
                this.current = this.current - 1
                squares[this.current].style.color = "red"
            } else if(this.layout[this.current - 1] !== this.layout[0]) {
                console.log("wrong way")
                return "wrong"
            } else {
                if(this.current - 1 === this.previous) {
                    console.log("previous zone")
                    return -1
                } else {
                    console.log("found")
                    this.moves++
                    this.previous = this.current
                    this.current = this.current -1
                    this.isSearching = false
                    squares[this.current].style.color = "red"
                    return "found"
                }
            }
        }
    }
}

const gps = new GPS(3, layout, 0)
gps.show()
document.querySelector('button').addEventListener('click', (e) => {
    gps.search()
})