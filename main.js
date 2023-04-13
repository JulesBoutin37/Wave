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

function taille_item() {
    if (taille_item_bool == false){
        taille_item_bool = true
        return 100
    }
    if (taille_item_bool == true) {
        taille_item_bool = false
        return 20
    }
}