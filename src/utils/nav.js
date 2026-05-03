const newNav = document.createElement('nav');
newNav.classList = "navbar"

//Todo: center h1
const Title = document.createElement("h1");
Title.textContent = "Conley Becker";
newNav.appendChild(Title);

const ul = document.createElement("ul");
ul.classList = "nav-links"

function addPage(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    li.appendChild(a);
    return li;
}

ul.appendChild(addPage("Home", "/index.html"));
ul.appendChild(addPage("Coding Projects", "/src/pages/coding_projects.html"));
ul.appendChild(addPage("CAD Projects", "/src/pages/cad_projects.html"));
ul.appendChild(addPage("Architecture", "/src/pages/arch.html"));

newNav.appendChild(ul);
document.getElementById("container").appendChild(newNav);