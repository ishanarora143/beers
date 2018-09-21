function ishan(event) {
    var param = document.getElementById('search').value
    fetch("https://api.punkapi.com/v2/beers?beer_name="+ param +"&per_page=6")
    .then(response=>response.json())
    .then(function(data){
      let beers = data;
      var i;
      var span=document.getElementsByTagName("span");
      var img =document.getElementsByTagName("img");
      console.log(img);
      for(i=0;i<span.length;i++){
        span[i].innerHTML=beers[i].name;
        img[i].setAttribute("src",beers[i].image_url);
      }
    })
    
  if (param){
    togglediv();
  }
}

  function togglediv(){
      var x = document.getElementById("grid");
      x.style.display="block";
  }

  var myBtn = document.getElementById('searchButton');
  myBtn.addEventListener('click',ishan);

