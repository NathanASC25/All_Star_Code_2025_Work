async function getDogImage(){
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);

    let imgTag = document.getElementById("dogPhoto");
    imgTag.src = data.message;
}