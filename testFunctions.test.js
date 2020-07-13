//unit tests for each of the major function on the index and gallery pages

const { exportAllDeclaration } = require('@babel/types');
const container = require('./testFunctions.js');
const [showContainer,rotateImages,moveLeft,moveRight] =  container;
const element = document.createElement("h1");
const element2 = document.createElement('h3');
const arr = [55,86,2];
const galleryArray = [35,78,3,89,0,22,52]
element.style.display = "none";
element2.style.display = "inline-block";


test("make container visible", () =>{
    expect(showContainer(element)).toBe("inline-block");
});

test("make container hidden", () =>{
    expect(showContainer(element2)).not.toBe("inline-block");
});

test("rotate images", () => {
    expect(rotateImages(0,arr)).toBe(1);
    expect(rotateImages(1,arr)).toBe(2);
    expect(rotateImages(2,arr)).toBe(0);
});

test("move array index left", () => {
    expect(moveLeft(0, galleryArray)).toBe(6);
    expect(moveLeft(6, galleryArray)).toBe(5);
    expect(moveLeft(5, galleryArray)).toBe(4);
    expect(moveLeft(4, galleryArray)).toBe(3);
    expect(moveLeft(3, galleryArray)).toBe(2);
    expect(moveLeft(2, galleryArray)).toBe(1);
    expect(moveLeft(1, galleryArray)).toBe(0);
});

test("move array index right", () => {
    expect(moveRight(0, galleryArray)).toBe(1);
    expect(moveRight(1, galleryArray)).toBe(2);
    expect(moveRight(2, galleryArray)).toBe(3);
    expect(moveRight(3, galleryArray)).toBe(4);
    expect(moveRight(4, galleryArray)).toBe(5);
    expect(moveRight(5, galleryArray)).toBe(6);
    expect(moveRight(6, galleryArray)).toBe(0);
});