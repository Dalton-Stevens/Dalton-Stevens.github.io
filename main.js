let views = {
    'about-link': `
        <section id="about">
            <h2>About</h2>
            <div id="about-div">
                <p id="about-p">I am currently in the Web Development program at DevMountain. My love for coding started a few years ago when it was introduced to me by my brother-in-law. I decided to go the bootcamp route and it has been great.</p>

                <br>
                <br>
                <br>

                <p id="about-p">Outside of coding I love fitness. My life revolves around the outdoors and working out. I take my dog on hikes every weekend. And I try to get a workout in everyday of the week. When I'm not working out or outside I am reading. Huge fan of The Stormlight Archive.</p>
            </div>
        </section>
    `,
    'skills-link': `
        <section id="skills">
            <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Express</li>
                    <li>Axios</li>
                    <li>SQL</li>    
                </ul>
        </section>
    `,
    'projects-link': `
        <section id="projects">
            <h2>Projects</h2>
                <div id="pokemon">
                    <h3>Pokemon Team Builder</h3>
                    <p>Plan out your team for your next pokemon game by building a team of six pokemon.</p>
                    <p>JavaScript, HTML, CSS, Express, Axios</p>
                    <a href="https://youtu.be/ZifLR_XIqv0" target="_blank" id="pokemon-project">Demo Video</a>
                    <a href="https://github.com/Dalton-Stevens/Foundations-Capstone" target="_blank" id="pokemon-project">GitHub</a>
                    <a href="http://18.216.211.238" target="_blank" id="pokemon-project">Live Site</a>
                </div>
        </section>
    `,
    'contact-link': `
        <section id="contact">
            <h2>Contact</h2>
            <div id="contact-div">
                <a href="https://github.com/Dalton-Stevens" target="_blank" id="contact-git">GitHub</a>
            </div>
        </section>
    `
};

const links = document.querySelectorAll('a');
const main = document.querySelector('main');

const changeView = evt => {
    main.innerHTML = '';
    let section = evt.target.id;
    main.innerHTML = views[section];
};

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', changeView);
};

const pageLoad = () => {
    main.innerHTML = views['about-link'];
};

pageLoad();