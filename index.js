const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shane Langnes - Resume</title>
        <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    line-height: 1.6;
                    background-color: white;
                    color: black;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                h1, h2, h3, a{
                    color: #369061;
                }

                @media (prefers-color-scheme: dark) {
                    body {
                        background-color: black;
                        color: white
                    }
                }
                h1 {
                    border-bottom: 2px solid #666;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin-bottom: 10px;
                }
            </style>
    </head>
    <body>
        <h1>Shane Langnes</h1>
        <p><strong>Professional Summary:</strong> Experienced web developer with a background in financial systems, business process automation, and game design.</p>
        <p>Consistent success in varied roles, demonstrating adaptability, a practical approach, and a dedication to forward-thinking solutions</p>
        
        <h2><p><a href=mailto:"shane@shanelangnes.com">Email</a> | <a href="https://github.com/Slangnes">Github</a> | <a href="https://www.linkedin.com/in/slangnes/">Linkedin</a></p></h2>
        
        <h2>Professional Experience:</h2>
        <h3>Georgia's Own Credit Union (Programmer/Developer 2019 - 2023)</h3>
        <ul>
            <li>Managed online banking platforms, overseeing transitions and updates.</li>
            <li>Trained in DNA Creator and Alkami software systems.</li>
            <li>Implemented WordPress updates through code review and process improvement.</li>
        </ul>
    
	<h3>Consultant (Art & Tech Integration 2020-2022)</h3>
    <ul>
        <li>Collaborated with organizations such as Artlanta, Chase Village, and Art & Industry Atlanta.</li>
        <li>Facilitated coding tutorials and AR experiences at Arcadia.</li>
        <li>Partnered with vendors and artists for projection mapping projects like "Through the Door" and Arcadia's opening festival.</li>
    </ul>

        <h3>Latitude (Developer 2019 - 2020)</h3>
        <ul>
            <li>Contributed to game prototype design, with one game becoming notably popular.</li>
            <li>Assisted in forming creator policies for AI game compatibility.</li>
            <li>Supported customer service inquiries related to game functionality.</li>
        </ul>
    
        <h3>National Credit Resolution (Collector 2015 - 2018)</h3>
        <ul>
            <li>Developed an automation system, significantly reducing workforce requirements.</li>
            <li>Achieved consistent sales targets, earning $70K+ monthly.</li>
        </ul>
    
        <h3>Web Developer (Freelance & Agencies 2011 - 2019)</h3>
        <ul>
            <li>Worked with agencies including Sovrn, Fourwinds, and ACR.</li>
            <li>Utilized tools and frameworks like JavaScript, React, Express, and Python.</li>
        </ul>
    
        <h3>Navy Quartermaster (2009 - 2011)</h3>
        <ul>
            <li>Responded to the Fukushima crisis, receiving a humanitarian service award.</li>
            <li>Received advanced training in navigation and seamanship.</li>
        </ul>
    
        <h2>Education:</h2>
        <p>Nicholls State University: Studied public relations and took on leadership roles.<br>RefactorU: Completed a coding bootcamp, working on projects with CSU Boulder.</p>
    
        <h2>Community Involvement:</h2>
        <ul>
            <li>Supported the Smyrna GA government and Free Thought Society.</li>
            <li>Engaged in charitable initiatives like feeding the homeless and donating bicycles.</li>
        </ul>
        
        <h2>Skills:</h2>
<p>
    <strong>Languages:</strong>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>,
    <a href="https://www.python.org/doc/" target="_blank">Python</a>,
    <a href="https://www.php.net/docs.php" target="_blank">PHP</a>,
    <a href="https://www.typescriptlang.org/docs/" target="_blank">TypeScript</a><br>
    
    <strong>Front-End:</strong>
    <a href="https://reactjs.org/docs/getting-started.html" target="_blank">React</a>,
    <a href="https://vuejs.org/v2/guide/" target="_blank">Vue</a>,
    <a href="https://vitejs.dev/guide/" target="_blank">Vite</a>,
    <a href="https://svelte.dev/tutorial" target="_blank">Svelte</a>,
    <a href="https://nextjs.org/docs/getting-started" target="_blank">Next.js</a>,
    <a href="https://tailwindcss.com/docs" target="_blank">Tailwinds</a><br>
    
    <strong>Back-End:</strong>
    <a href="https://nodejs.org/en/docs/" target="_blank">Node</a>,
    <a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank">Flask</a>,
    <a href="https://fastapi.tiangolo.com/" target="_blank">FastAPI</a><br>
    
    <strong>Databases:</strong>
    <a href="https://www.postgresql.org/docs/" target="_blank">Postgres</a>,
    <a href="https://docs.mongodb.com/" target="_blank">MongoDB</a>,
    <a href="https://docs.microsoft.com/en-us/sql/sql-server/documentation?view=sql-server-ver15" target="_blank">Windows SQL Server</a>,
    <a href="https://dev.mysql.com/doc/" target="_blank">MySQL</a><br>
    
    <strong>Tools & Environment:</strong>
    <a href="https://docs.docker.com/" target="_blank">Docker</a>,
    <a href="https://www.jenkins.io/doc/" target="_blank">Jenkins</a>,
    <a href="https://git-scm.com/doc" target="_blank">Git</a>,
    <a href="https://httpd.apache.org/docs/" target="_blank">Apache</a>,
    <a href="https://www.linux.org/pages/manuals/" target="_blank">Linux</a><br>
    
    <strong>Others:</strong>
    <a href="https://docs.retool.com/docs" target="_blank">Retool</a>,
    <a href="https://wordpress.org/support/documentation/" target="_blank">WordPress</a>
</p>
    </body>
    </html>
    `);
    res.end();
});

server.listen(3008, () => {
    console.log('Server is listening on port 3008');
});
