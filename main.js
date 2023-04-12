input_logo_menu = false

function logo_menu() {
    if (input_logo_menu == false){
        input_logo_menu = true
        return 0
    }
    if (input_logo_menu == true) {
        input_logo_menu = false
        return -23
    }
}