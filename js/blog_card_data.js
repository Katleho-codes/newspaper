blogData = [
  {
    id: 1,
    image: "images/bottom-left-1.jpg",
    _date: new Date().toDateString(),
    title: "Latest apple speaker is out",
    paragraph:
      "The latest apple speaker is out and people can't stop talking about it",
  },
  {
    id: 2,
    image: "./images/bottom-left-2.jpg",
    _date: new Date().toDateString(),
    title: "Ipads crashing?",
    paragraph: "Several people compained about their tablets not working...",
  },
  {
    id: 3,
    image: "./images/right-5.jpg",
    _date: new Date().toDateString(),
    title: "The galaxy smartphone",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    image: "./images/right-2.jpg",
    _date: new Date().toDateString(),
    title: "Kids should play!",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 5,
    image: "./images/banner.jpg",
    _date: new Date().toDateString(),
    title: "Algorithms are the thing!",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 6,
    image: "./images/top-left.jpg",
    _date: new Date().toDateString(),
    title: "BMW latest model",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
];

// Function to iterate over the course content into a table

let schoolRowOfcards = document.getElementById("blog-row");
showgallery(blogData);
function showgallery(currarray) {
  schoolRowOfcards.innerText = "";

  currarray.map((res) => {
    schoolRowOfcards.innerHTML += `
     <div class="col-sm-4">
    <div class="card h-100 shadow-sm" >
    
            <div class="img-wrapper">
              <img src="${res.image}" alt="" class="img-fluid card-img-top" />
            </div>
            <div class="card-body">
              <p class="date"><small>${res._date}</small></p>

              <h5><a href="#">${res.title}</a></h5>
              <p>
                <small>
                  ${res.paragraph}
                </small>
              </p>
            </div>
    </div>
          </div>`;
  });
}
