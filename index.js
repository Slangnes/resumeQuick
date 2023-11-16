const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const htmlContent = getHtmlContent();
    writeChunk(res, htmlContent, () => {
        console.log('Finished writing HTML content to response.');
        res.end();
    });
});

server.listen(3008, () => {
    console.log('Server is listening on port 3008');
});

function getHtmlContent() {
    return `
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
                        color: white;
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
        <p><h2>Professional Summary:</h2> Experienced and versatile web developer with a robust background in software development, AI integration, and system optimization. Proven ability to adapt to various roles, demonstrating skills in full-stack development, project management, and AI implementation. Passionate about innovating and streamlining processes to enhance system functionalities and user experience.</p>
        
        <h3><p><a href="mailto:shane@shanelangnes.com">Email</a> | <a href="https://github.com/Slangnes">Github</a> | <a href="https://www.linkedin.com/in/slangnes/">Linkedin</a></p></h3>

        <h2>Professional Experience:</h2>
        <h3>Georgia's Own Credit Union (Programmer/Developer, 2019 - 2023)</h3>
        <ul>
            <li>Actively participated in Scrum methodology implementation and team Agile training, enhancing project delivery efficiency.</li>
            <li>Contributed to the development of 'Voltron', an interface integrating CRM systems with conversion data for online payment system transitions, using SQL Server, Oracle Database, and PowerQuery.</li>
            <li>Assisted in setting up and maintaining the Alkami Online Banking System SDK; developed mortgage rate features using C# .NET.</li>
            <li>Managed Git repository configurations and WordPress environment code maintenance, ensuring robust source code control.</li>
            <li>Addressed security vulnerabilities and optimized website performance using tools like New Relic and Azure Load Testing.</li>
            <li>Supported full-stack development using Java, VanillaJS, React, PHP, JavaScript, and CSS; maintained custom WordPress themes and plugins.</li>
            <li>Aided in UX research, wireframe design, and site redesign processes, enhancing user interaction and engagement.</li>
            <li>Participated in API integration and development using Node.js, Google Cloud Functions, Firebase/Firestore, and Google Sheets for dynamic rate updates.</li>
            <li>Supported various web and email system integrations, contributing to improved user experience and communications efficiency.</li>
            <li>Streamlined the development intake process and created comprehensive technical documentation.</li>
        </ul>
    
        <h3>Latitude (AI Dungeon, Developer, 2019 - 2020)</h3>
        <ul>
            <li>Collaborated with the AI team on AI Dungeon, working with early versions of GPT-2 and GPT-3 models to enhance gaming experiences.</li>
            <li>Engaged in front-end development and testing; involved in greenlighting games and strategic decisions for AI functionalities.</li>
            <li>Conducted explorations and practical implementations of AI models, contributing to the development of engaging and innovative games.</li>
        </ul>

        <h3>Freelance Web Developer & Consultant (2011 - 2019)</h3>
        <ul>
            <li>Worked with various agencies, including Sovrn, Fourwinds, and ACR, delivering robust web solutions and innovations.</li>
            <li>Utilized a range of technologies, including JavaScript, React, Express, Python, Docker, Maven, Spring Boot, Swift, and Next.js.</li>
            <li>Provided consultancy services for art and tech integrations, collaborating on projection mapping and AR experiences.</li>
        </ul>
    
        <h3>National Credit Resolution (Collector, 2015 - 2018)</h3>
        <ul>
            <li>Developed an automation system, significantly reducing workforce requirements and enhancing operational efficiency.</li>
            <li>Achieved and sustained high sales performance, generating over $70K monthly.</li>
        </ul>
    
        <h3>United States Navy (Quartermaster, 2009 - 2011)</h3>
        <ul>
            <li>Responded to the Fukushima crisis, receiving a humanitarian service award for outstanding performance and dedication.</li>
            <li>Received advanced training in navigation and seamanship, contributing to critical missions and operations.</li>
        </ul>
    
        <h2>Education:</h2>
        <p>Nicholls State University: Public Relations Studies<br>RefactorU: Coding Bootcamp</p>

        <h2>United States Navy Training (2009 - 2011):</h2>
        <ul>
            <li>Basic Training: Completed at Recruit Training Command, Naval Station Great Lakes. This rigorous program included physical fitness, naval customs, first aid, firefighting, water survival, and shipboard safety.</li>
            <li>'A' School for Quartermasters: Attended at the Naval Training Center in Great Lakes, IL. Focused on navigation fundamentals, charting, naval correspondence, use of navigational tools, and signaling.</li>
            <li>Advanced Training: Participation in specialized seamanship training at Naval Base Yokosuka, Japan. This advanced training included practical navigation, electronic navigation systems, and bridge simulator exercises.</li>
            <li>Hands-On Experience: Gained at Naval Base Kitsap in Puget Sound, emphasizing real-world navigation, ship handling, and leadership responsibilities in various sea conditions.</li>
        </ul>
    
        <h2>Community Involvement:</h2>
        <ul>
            <li>Engaged in various initiatives, including supporting the Smyrna GA government, Free Thought Society, and organizing charitable activities.</li>
        </ul>
        
        <h2>Skills:</h2>
    <p>
        <strong>Web Development:</strong> JavaScript, React, Express, Python, Docker, Maven, Spring Boot, Swift, Next.js<br>
        <strong>AI & Machine Learning:</strong> Experience with GPT-2, GPT-3, Stable Diffusion, TensorFlow, PyTorch<br>
        <strong>Systems Integration:</strong> CRM Systems, Online Banking Systems, WordPress<br>
        <strong>Project Management:</strong> Agile, Scrum, Technical Documentation
    </p>
    </body>
    </html>
    `;
}

function writeChunk(res, data, cb) {
    if (!res.write(data)) {
        res.once('drain', cb);
    } else {
        process.nextTick(cb);
    }
}