const menu = document.getElementById("menu");


Array.from(document.getElementsByClassName('menu-item')) //allow menu items to be iterable
    .forEach((item, index) => {
        console.log(item)
        item.onmouseover = () => {
            menu.dataset.activeIndex = index; //update an active index to the currently
                                            //hovered index for proper transitions
                                            //based on mouse location
        }
    })

