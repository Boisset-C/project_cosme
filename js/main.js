//fetch all projects
function fetchAllProjects() {
  fetch("../data/dummyData.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      let projects = data.projects;
      projects.forEach((project) => {
        output += `    <!--Project 1-->
      <div class="col-md-4 ">
          <div class="card border-0  bg-mirage color color-gullgray filterDiv">
            <h5 class="card-title">${project.title}</h5>
             <a class="project-images" href="${project.url}">
              <img src="${project.image}" class="card-img-top" alt="...">
              </a>  
              <div class="card-body">
                <p class="card-text">${project.description}</p>
                <a href="${project.github}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Git repo</a>
                <a href="${project.url}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Live Url</a>
              </div>
          </div>
      </div>
      <!--End of Project 1-->`;
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
        if (project.category === "client") {
          output += `    <!--Project 1-->
          <div class="col-md-4 ">
            <div class="card border-0  bg-mirage color color-gullgray filterDiv">
              <h5 class="card-title">${project.title}</h5>
                <img src="${project.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">${project.description}</p>
                    <a href="${project.github}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Git repo</a>
                    <a href="${project.url}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Live Url</a>
                  </div>
              </div>
          </div>
          <!--End of Project 1-->`;
        }
      });
      document.getElementById("portfolio").innerHTML = output;
    });
}

// const clientProjects = fetchClientProjects();

//fetch hackathons projects
function fetchHackathonProjects() {
  fetch("../data/dummyData.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      let projects = data.projects;
      projects.forEach((project) => {
        if (project.category === "hackathon") {
          output += `    <!--Project 1-->
          <div class="col-md-4 ">
            <div class="card border-0  bg-mirage color color-gullgray filterDiv">
              <h5 class="card-title">${project.title}</h5>
                <img src="${project.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">${project.description}</p>
                    <a href="${project.github}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Git repo</a>
                    <a href="${project.url}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Live Url</a>
                  </div>
              </div>
          </div>
          <!--End of Project 1-->`;
        }
      });
      document.getElementById("portfolio").innerHTML = output;
    });
}

// const hackathonProjects = fetchHackathonProjects();

//fetch other projects
function fetchOtherProjects() {
  fetch("../data/dummyData.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      let projects = data.projects;
      projects.forEach((project) => {
        if (project.category === "other") {
          output += `    <!--Project 1-->
          <div class="col-md-4 ">
            <div class="card border-0  bg-mirage color color-gullgray filterDiv">
              <h5 class="card-title">${project.title}</h5>
                <img src="${project.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">${project.description}</p>
                    <a href="${project.github}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Git repo</a>
                    <a href="${project.url}" class="btn about-btn-custom mx-3 mb-3" target="_blank">Live Url</a>
                  </div>
              </div>
          </div>
          <!--End of Project 1-->`;
        }
      });
      document.getElementById("portfolio").innerHTML = output;
    });
}

// const otherProjects = fetchOtherProjects();
