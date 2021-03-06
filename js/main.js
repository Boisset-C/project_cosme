//fetch all projects
function fetchAllProjects() {
  fetch("../data/dummyData.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      let projects = data.projects;
      projects.forEach((project) => {
        if (project.title === "Ventia") {
          output += `    <!--Project-->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.github}" class="btn about-btn-custom mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project -->`;
        } else if (project.title === "WP Livestream Platform") {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          </div>
          </div>
          </div>
          <!--End of Project-->`;
        } else {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          <a href="${project.github}" class="btn about-btn-custom ms-3 mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project-->`;
        }
      });
      document.getElementById("portfolio").innerHTML = output;
    });
}

//automatically shows all projects
fetchAllProjects();

//fetch client work
function fetchClientProjects() {
  fetch("../data/dummyData.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      let projects = data.projects;
      projects.forEach((project) => {
        if (project.title === "Ventia" && project.category === "client") {
          output += `    <!--Project-->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.github}" class="btn about-btn-custom mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project-->`;
        } else if (
          project.title === "WP Livestream Platform" &&
          project.category === "client"
        ) {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          </div>
          </div>
          </div>
          <!--End of Project -->`;
        } else if (project.category === "client") {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          <a href="${project.github}" class="btn about-btn-custom ms-3 mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project -->`;
        }
      });
      document.getElementById("portfolio").innerHTML = output;
    });
}

//fetch hackathons projects
function fetchHackathonProjects() {
  fetch("../data/dummyData.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      let projects = data.projects;
      projects.forEach((project) => {
        if (project.title === "Ventia" && project.category === "hackathon") {
          output += `    <!--Project-->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.github}" class="btn about-btn-custom mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project-->`;
        } else if (
          project.title === "WP Livestream Platform" &&
          project.category === "hackathon"
        ) {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          </div>
          </div>
          </div>
          <!--End of Project -->`;
        } else if (project.category === "hackathon") {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          <a href="${project.github}" class="btn about-btn-custom ms-3 mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project -->`;
        }
      });
      document.getElementById("portfolio").innerHTML = output;
    });
}
//fetch other projects
function fetchOtherProjects() {
  fetch("../data/dummyData.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      let projects = data.projects;
      projects.forEach((project) => {
        if (project.title === "Ventia" && project.category === "other") {
          output += `    <!--Project-->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.github}" class="btn about-btn-custom mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project-->`;
        } else if (
          project.title === "WP Livestream Platform" &&
          project.category === "other"
        ) {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          </div>
          </div>
          </div>
          <!--End of Project -->`;
        } else if (project.category === "other") {
          output += `    <!--Project -->
          <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
          <h5 class="card-title">${project.title}</h5>
          <a class="project-images" href="${project.url}">
          <img src="${project.image}" class="card-img-top" alt="...">
          </a>  
          <div class="card-body">
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn about-btn-custom mb-3" target="_blank">Live Url</a>
          <a href="${project.github}" class="btn about-btn-custom ms-3 mb-3" target="_blank">Git repo</a>
          </div>
          </div>
          </div>
          <!--End of Project -->`;
        }
      });
      document.getElementById("portfolio").innerHTML = output;
    });
}
