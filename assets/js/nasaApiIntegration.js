

// NASA API INTEGRATION
// click event that call a function
document.querySelector('button').addEventListener('click', nasaApod)
// 
function nasaApod(){
  // gets the value out of the input
  const date = document.querySelector('input').value
  // plugs that value into the url
  const url = `https://api.nasa.gov/planetary/apod?api_key=0KuYU4LtcUZAWlNhOSCRkzjtMZkWT8il1V9okInw&date=${date}`

  // fetches the information
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        if (data.media_type === 'image'){
        // put in the image in the dom
        document.querySelector('img').src = data.hdurl
          // turn off class .hidden
          document.querySelector('img').classList.remove('hidden')
        // add .hidden to iframe
        document.querySelector('iframe').classList.add('hidden') 
      } else if (data.media_type === 'video'){
        // put video in dom
        document.querySelector('iframe').src = data.url
        // add .hidden class to img
        document.querySelector('img').classList.add('hidden')
        // turn off class .hidden
        document.querySelector('iframe').classList.remove('hidden')
      }
      document.querySelector('.description').innerText = data.explanation
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = 'Description'
      document.querySelector('.date').innerText = data.date
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

