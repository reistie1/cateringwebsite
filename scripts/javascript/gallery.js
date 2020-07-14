//variables for the modal navigation, gallery image click events and main navigation display

var picture = document.getElementsByClassName("galleryPics");
var close = document.getElementsByClassName("close")[0];
var right = document.getElementById("right");
var left = document.getElementById("left");
var modal = document.getElementById("picModal");
var modalPic = document.getElementById("modalImg");
var slideMenu = document.getElementById("nav-container");
var temp = new Array();
var modalPos = 0;

/* check if addEventListener is present in the window and add a load event for the gallery images and 
click events for displaying the navigation menu, closing the picture modal and navigating to the next 
or previous image in the picture gallery */
if('addEventListener' in window){
    window.addEventListener("load", init);
    document.getElementById("hover-icon").addEventListener("click", function(){
        slideMenu.style.display = showContainer(slideMenu);
    });
    //close picture modal by hiding it
    close.addEventListener("click", function(){
        modal.style.display = "none";
        modalPos = 0;
    });
    //set modalPos to the next index in the picture array
    right.addEventListener("click", function(){
        modalPos = moveRight(modalPos, temp);
        modalPic.src = temp[modalPos];
    });
    //set modalPos to the previous index in the picture array
    left.addEventListener("click", function(){
        modalPos = moveLeft(modalPos, temp);
        modalPic.src = temp[modalPos];
    });
}
/* otherwise, check if attach event is present in the window and add a onload event for the gallery images 
and onclick events for display the navigation menu, closing the picture modal and navigating to the next 
or previous image in the picture gallery */
else if('attachEvent' in window){
    window.attachEvent("onload", init);
    document.getElementById("hover-icon").attachEvent("onclick", function(){
        slideMenu.style.display = showContainer(slideMenu);
    });
    //close picture modal by hiding it
    close.attachEvent("onclick", function(){
        modal.style.display = "none";
        modalPos = 0;
    });
    //set modalPos to the next index in the picture array
    right.attachEvent("onclick", function(){
        modalPos = moveRight(modalPos, temp);
        modalPic.src = temp[modalPos];
    });
     //set modalPos to the previous index in the picture array
    left.attachEvent("onclick", function(){
        modalPos = moveLeft(modalPos, temp);
        modalPic.src = temp[modalPos];
    });
}

/*initialize function to create an image array from HTML collection of images and for each image
add a click event to display the selected image and set modalPos to position of image in the array */
function init(){
    for(var i = 0; i < picture.length; i++){
        temp.push(picture[i].src);
    }
    //add click event to each image if addEventListener is present in the window
    temp.forEach((item,index) => {
        var self = item;
        var pos = index;
        if ('addEventListener' in window){
            picture[index].addEventListener("click", function(){
                modal.style.display = "block";
                modalPic.src = self;
                modalPos = pos;
            });
        }
        //add onclick event to each image if addEventListener is not present in the window
        else if('attachEvent' in window)
            picture[index].attachEvent("onclick", function(){
                modal.style.display = "block";
                modalPic.src = self;
                modalPos = pos;
            });
    });
}

//function moves to the previous index in the given array while checking the bounds and returns the new index
function moveLeft(index, arr){
    if(index < 0){
        index = arr.length - 1;
    }
    else{
        index--;
        if(index < 0)
            index = arr.length - 1;
    }
    return index;
}

//function moves to the next index in the given array while checking the bounds and returns the new index
function moveRight(index, arr){
    if(index > arr - 1){
        index = 0;
    }
    else{
        index++;
        if(index > arr.length - 1)
            index = 0;
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



