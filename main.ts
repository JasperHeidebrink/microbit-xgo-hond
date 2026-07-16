let moveY = 0
let moveX = 0
radio.setGroup(25)
basic.forever(function () {
    radio.onReceivedValue(function( name, value) {
        basic.showString(name+':'+value)
        if(name=='rockerX'){
            moveX = value;

            xgo.move_xgo(xgo.direction_enum.Forward, value)
        } else if(name == 'rockerY'){
            moveY = value;
            xgo.move_xgo(xgo.direction_enum.Left, value)
        }

    });
})
