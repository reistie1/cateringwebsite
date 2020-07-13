//slideMenu variable used to add a click event listener
var slideMenu = document.getElementById("nav-container");


/*check if event listener is present in the window and add a load event for carousel images and 
click event for display navigation menu */
if('addEventListener' in window){
    console.log("eventlistener");
    window.addEventListener("load", rotateCarousel(0, document.getElementsByClassName("carousel_image")));
    document.getElementById("hover-icon").addEventListener("click", function(){
        slideMenu.style.display = showContainer(slideMenu);
    });
}
/* otherwise, check if attach event is present in the window and add a onload event for carousel images and 
onclick event for display navigation menu */
else if('attachEvent' in window){
    console.log("attachEvent");
    window.attachEvent("onload", rotateCarousel(0, document.getElementsByClassName("carousel_image")));
    document.getElementById("hover-icon").attachEvent("onclick", function(){
        slideMenu.style.display = showContainer(slideMenu);
    });
}

/* function that rotated through 3 carousel images, hiding the other images and showing the
current carousel image at an interval of every 5.5 seconds*/
function rotateCarousel(index, collection){
    collection[index].style.display = "block";
    var pos = index;
    var coll = collection;
    setInterval(function(){
        pos = rotateImages(pos, coll);
        if(pos == 0){
            coll[coll.length-1].style.display = "none";
            coll[pos].style.display = "block";
        }else{
            coll[pos-1].style.display = "none";
            coll[pos].style.display = "block";
        }
    }, 5500);
}

//function calculates the next index in a given image collection and returns the new index
function rotateImages(index, collection){
    if (index == collection.length-1){
        index = 0;
    }
    else if(index < collection.length){
        ++index;
    }
    return index;
}

//function makes a container visible or non-visible based on its current display setting
function showContainer(item){
    if(item.style.display == "none"){
        return "inline-block";
    }else{
        return "none";
    }
}









