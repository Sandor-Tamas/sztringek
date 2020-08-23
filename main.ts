let list: number[] = []
let betu = 65
let szoveg: string[] = []
let i = 0
for (let index = 0; index <= 8; index++) {
    list[index * 2] = betu
    list[index * 2 + 1] = betu + 32
    betu = betu + 1
}
for (let value of list) {
    szoveg[i] = String.fromCharCode(value)
    basic.showString("" + (szoveg[i]))
    i = i + 1
}
basic.forever(function () {
	
})
