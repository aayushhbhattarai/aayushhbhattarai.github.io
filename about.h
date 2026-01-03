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
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
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
      text-decoration: none;
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

    nav a:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    body a:not(nav a):hover {
      text-decoration: underline;
    }

    .container {
      max-width: 900px;
      margin: auto;
      padding: 6rem 2rem 2rem 2rem; /* Top padding to avoid nav overlap */
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.25rem;
      color: #00ffc3;
    }

    .tagline {
      font-size: 1.1rem;
      color: #bbb;
      margin-bottom: 2rem;
    }

    section {
      margin-bottom: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
      padding-bottom: 0.3rem;
      margin-bottom: 1rem;
      color: #00ffc3;
      border-bottom: none;
    }

    .skill {
      margin-bottom: 1rem;
    }

    .skill-name {
      font-weight: 600;
      margin-bottom: 0.3rem;
    }

    .progress {
      background: #e4e4e4;
      height: 8px;
      border-radius: 6px;
      overflow: hidden;
    }

    .progress-bar {
      height: 8px;
      background: linear-gradient(to right, #ffffff, #f8d700);
      width: 0;
      animation: fill 2s ease forwards;
    }

    @keyframes fill {
      to {
        width: var(--width);
      }
    }

    a {
      color: #00c6a2;
      text-decoration: none;
    }

    .contact p {
      margin: 0.5rem 0;
    }
  </style>
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="projects.html">Projects</a>
    <a href="about.html">About Me</a>
  </nav>

  <div class="container">
    <h1>Aayush Bhattarai</h1>
    <p class="tagline">3D Artist & Tech Explorer from Nepal, studying in Germany</p>

    <section>
      <h2>About Me</h2>
      <p>
        I'm Aayush, passionate about 3D graphics, game engines, and all things tech. Originally from Nepal and currently studying at Universität des Saarlandes, I enjoy exploring creative and technical boundaries — from real-time rendering to shader development and procedural systems. I thrive in hands-on learning environments and love solving both visual and logical problems through code and design.
      </p>
    </section>

    <section>
      <h2>Education</h2>
      <p><strong>Preparatory Course for BSc Computer Science</strong><br>Universität des Saarlandes, Germany (2025 – Present)</p>
      <p><strong>Higher Secondary (+2)</strong><br>Trinity International SS & College, Nepal (2021 – 2023)</p>
      <p><strong>German Language Courses (B1 & B2.1)</strong><br>Goethe-Zentrum Kathmandu</p>
    </section>

    <section>
      <h2>Skills</h2>
      <div class="skill">
        <div class="skill-name">Blender (3D Environment)</div>
        <div class="progress"><div class="progress-bar" style="--width: 85%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-name">Godot (Game Engine)</div>
        <div class="progress"><div class="progress-bar" style="--width: 50%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-name">Photoshop (Design)</div>
        <div class="progress"><div class="progress-bar" style="--width: 70%"></div></div>
      </div>
      <div class="skill">
        <div class="skill-name">Python & General Programming</div>
        <div class="progress"><div class="progress-bar" style="--width: 60%"></div></div>
      </div>
    </section>

    <section>
      <h2>Languages</h2>
      <p><strong>English:</strong> C1</p>
      <p><strong>German:</strong> B2 (in progress toward C1)</p>
      <p><strong>Nepali:</strong> Native</p>
    </section>

    <section class="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:baayush061@gmail.com">baayush061@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/aayushbhattarai1/" target="_blank">aayushbhattarai1</a></p>
    </section>
  </div>
</body>
</html>
