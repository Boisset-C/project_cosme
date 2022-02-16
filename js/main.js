// <!--Project 1-->
// <div class="col-md-4 ">
//   <div class="card border-0  bg-mirage color color-gullgray filterDiv">
//     <h5 class="card-title">Project title</h5>
//       <img src="/assets/landing-images/project-placeholder.png" class="card-img-top" alt="...">
//         <div class="card-body">
//           <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus dolor purus non enim</p>
//           <button type="submit" class="btn about-btn-custom mx-3 mb-3">Git Repo</a>
//           <button type="submit" class="btn about-btn-custom mx-3 mb-3">Live URL</a>
//         </div>
//     </div>
// </div>
// <!--End of Project 1-->

//fetch array of projects
function fetchProjectData(projects) {
  let promises = [];

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    let category = project.category;

    fetch("../data/dummyData.json");
  }
}

//render json to portfolio gallery cards
function renderAllProjects(projects) {
  const parent = document.getElementById("portfolio");

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    let htmlString = `
    <!--Project 1-->
    <div class="col-md-4 ">
      <div class="card border-0  bg-mirage color color-gullgray filterDiv">
        <h5 class="card-title">${project.title}</h5>
          <img src="${project.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${project.description}</p>
              <button type="submit" class="btn about-btn-custom mx-3 mb-3">${project.github}</a>
              <button type="submit" class="btn about-btn-custom mx-3 mb-3">${project.url}</a>
            </div>
        </div>
    </div>
    <!--End of Project 1-->`;
    let col = document.createElement("div");
    col.className = "col col-md-4";
    col.innerHTML = htmlString;
    parent.appendChild(col);
  }
}
