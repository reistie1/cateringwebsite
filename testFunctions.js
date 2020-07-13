//function calculates the next index in a given image collection and returns the new index
function rotateImages(index, collection){
    if (index == collection.length-1){
        index = 0;
    }
    else{
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

//export all the test function for unit testing
module.exports = [showContainer,rotateImages, moveLeft, moveRight];

