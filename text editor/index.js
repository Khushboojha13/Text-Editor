function bold(){
   let text=document.getElementById("words");
   console.log(text);
   text.style.fontWeight="bold";
   const para=document.querySelector("p");
   para.innerText="Text get bolder";
}

function italic(){
    let text=document.getElementById("words");
    text.style.fontFamily="cursive";
    const para=document.querySelector("p");
    para.innerText="Text get italic";
}

function upper(){
    let text=document.getElementById("words");
    text.style.textTransform="uppercase";
    const para=document.querySelector("p");
    para.innerText="Text converted to uppercase";
}

function lower(){
    let text=document.getElementById("words");
    text.style.textTransform="lowercase";
    const para=document.querySelector("p");
    para.innerText="Text converted to lowercase";
}

function capital(){
    let text=document.getElementById("words");
    text.style.textTransform="capitalize";
    const para=document.querySelector("p");
    para.innerText="Text get capitalized";
}

function center(){
    let text=document.getElementById("words");
    text.style.textAlign="center";
    const para=document.querySelector("p");
    para.innerText="Text move to center";
}

function left(){
    let text=document.getElementById("words");
    text.style.textAlign="left";
    const para=document.querySelector("p");
    para.innerText="Text move to left";
}
function right(){
    let text=document.getElementById("words");
    console.log(text.value);
    text.style.textAlign="right";
    const para=document.querySelector("p");
    para.innerText="Text move to right";
}

function clears(){
    let text=document.getElementById("words");
    console.log(text.value);
    text.value=" ";
    const para=document.querySelector("p");
    para.innerText="Text get clear";
}


function download(){
   // let text=document.getElementById("words");
    const link = document.createElement("a");
    console.log(link);
    const content = document.querySelector("textarea").value;
    console.log(content);
    const file = new Blob([content], { type: 'text/plain' });
    console.log(file);
    console.log(link);
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    console.log(link);
    URL.revokeObjectURL(link.href);

    const para=document.querySelector("p");
    para.innerText="Text get downloaded";
}

//here we have taken content from the user, convert it into blob object and then save it to the text file

//Blob is a constructor function and file is a blob object
//yaha blob object hai jisme two values hai size:value(jo bhi text ka length hai) and type: "text/plain"

//A blob object is simply a collection of bytes that contains data stored in a file. A blob may appear to be a reference to the actual file, but it is not. A blob has the same size and MIME as a simple file. The blob data is stored in the user's memory, and it depends on the browser functions and the blob's size.


/*
// Create element with <a> tag
const link = document.createElement("a");

// Create a blog object with the file content which you want to add to the file
const file = new Blob([content], { type: 'text/plain' });

// Add file content in the object URL
link.href = URL.createObjectURL(file);

// Add file name
link.download = "sample.txt";

// Add click event to <a> tag to save file.
link.click();

URL.revokeObjectURL(link.href);


*/