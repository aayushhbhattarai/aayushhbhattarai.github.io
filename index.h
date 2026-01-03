<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aayush Bhattarai</title>
  <link rel="icon" href="projects/logoo.png" type="image/png" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Fira+Code&family=Poppins:wght@300;500&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #0f0f0f;
      color: #e0e0e0;
      overflow-x: hidden;
    }

    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at center, #00ffc310 0%, transparent 70%);
      transform: translate(-50%, -50%) scale(1);
      pointer-events: none;
      z-index: 0;
      transition: transform 0.2s ease-out;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
      background-color: #161616;
      padding: 1.5rem;
      position: relative;
      z-index: 1;
    }

    nav a {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      color: #00ffc3;
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 1.5rem;
      position: relative;
    }

    nav a:hover {
      color: #ffffff;
    }

    nav a::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #00ffc3;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    .small-img {
      width: 90%;
      max-width: 400px;
      margin: 0 auto;
      display: block;
    }


    nav a:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    section {
      max-width: 1000px;
      margin: auto;
      padding: 2rem;
      position: relative;
      z-index: 1;
    }

    h1, h2 {
      color: #00ffc3;
    }

    .cta-no-blue {
      color: #ffffff;
      background-color: #222;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s ease;
      display: inline-block;
      margin-top: 1.5rem;
    }

    .cta-no-blue:hover {
      background-color: #444;
    }

    /* Projects layout */
    .projects-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .project-item {
      flex: 1 1 calc(33.333% - 1rem);
      background-color: #161616;
      padding: 1rem;
      border-radius: 10px;
      text-align: center;
      overflow: hidden;
    }

    .project-item img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 0.75rem;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .project-item:hover img {
      transform: scale(1.05);
    }

    .project-item p {
      font-size: 0.95rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .project-item {
        flex: 1 1 100%;
      }
    }

    section.exploring {
      background: #161616;
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 2rem;
    }

    blockquote {
      font-style: italic;
      opacity: 0.7;
      border-left: 3px solid #00ffc3;
      padding-left: 1rem;
      margin-top: 2rem;
    }

    .contact {
      text-align: center;
      margin-top: 3rem;
    }

    .contact a {
      color: #00ffc3;
      text-decoration: none;
    }

    .contact a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="projects.html">Projects</a>
    <a href="about.html">About Me</a>
  </nav>

  <section>
    <h1>Me!!</h1>
    <p>Hi, My name is Aayush Bhattarai, from Nepal, currently studying in Germany. I’m a 20-year-old passionate about 3D graphics, computers, and all things tech. I love exploring new technologies, learning by doing, and challenging myself with creative and technical problems. Whether it's building visuals or solving complex tasks, I'm always eager to grow and experiment.</p>
    <a href="about.html" class="cta-no-blue">Know More About Me →</a>
  </section>

  <section>
    <h2>Projects</h2>
    <div class="projects-grid">
      <div class="project-item">
        <img src="projects/INSOMNIA.png" alt="INSOMNIA project image" />
        <p>A surreal 3D scene visualizing insomnia using lighting and animation.</p>
      </div>

      <div class="project-item">
        <img src="projects/sunflower.png" alt="Sunflower procedural art" />
        <p>Procedural artwork based on the golden ratio and parametric curves.</p>
      </div>

      <div class="project-item"> 
      <img src="projects/STARWARS.png" alt="Particle simulation project" class="small-img" />
      <p>Poster Design in Photoshop for the movie Star Wars</p>
      </div>
    </div>

    <a href="projects.html" class="cta-no-blue">Show More Projects →</a>
  </section>

  <section class="exploring">
    <h2>Currently Exploring</h2>
    <p>Experimenting with real-time rendering, procedural generation, and shader development. Always curious to try new tools and break things to learn how they work.</p>
  </section>

  <section>
    <blockquote>“The best way to predict the future is to invent it.” – Alan Kay</blockquote>
  </section>

  <section class="contact">
    <h2>Contact</h2>
    <p>You can reach me at <a href="mailto:baayush061@gmail.com">baayush061@gmail.com</a></p>
  </section>
</body>
</html>
