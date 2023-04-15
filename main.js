logo_menu_var = false
taille_item_bool = false

function logo_menu() {
    if (logo_menu_var == false){
        logo_menu_var = true
        return 0
    }
    if (logo_menu_var == true) {
        logo_menu_var = false
        return -23
    }
}