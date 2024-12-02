//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPic)

function getPic(){
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=wZhr8rVAP0SLiwOdERob4WrQsrn0Cp1p0nuzw5xe&date=${date}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            if (data.media_type === 'image') {
                // Handle image display
                document.querySelector('img').src = data.hdurl;
                document.querySelector('img').style.display = 'block';
                document.querySelector('iframe').style.display = 'none';
              } else if (data.media_type === 'video') {
                // Handle YouTube video display
                document.querySelector('iframe').src = data.url;
                document.querySelector('iframe').style.display = 'block';
                document.querySelector('img').style.display = 'none';
              }
        })
        .catch(err=>{
            console.log(`error $(err)`)
        })
}