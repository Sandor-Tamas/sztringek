let list: string[] = []
let betu = 65
for (let index = 0; index <= 4; index++) {
    list.push(String.fromCharCode(betu))
    basic.showString("" + (list[index]))
    betu = betu + 1
}
basic.forever(function () {
	
})
