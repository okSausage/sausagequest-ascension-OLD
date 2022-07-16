Sau'Sage Quest
Ascension of the Wiener Wizard

This originally started as a project to mess around with TypeScript. The initial thought
was to create a website that was completely unnavigable. Essentially you'd have to find the
links through a series of events. There was not going to be any documentation on how to do that.

This morphed into a game, and now it's going to be Sau'Sage Quest.

In the spirit of keeping the out of control nature I decided that I'd let anyone push code to it,
and upon approval it will be merged into master and deployed out to the site.

It's really just starting out, so I don't know what will happen - but it is a fun way to learn, so
I'll keep it going until I get too busy or too bored.

Thanks for looking...

[Sau'Sage Quest](https://okSausage.com)
[GitHub Community Discussion](https://github.com/orgs/okSausage/teams/contributors/discussions)

##How to get it running:

<ol>
<li>Install a basic web server, I use the python http.server for development work:</li>
`pip install -g simple-http-server`

<li>Then download the git repository.</li>

<li>Change into the root directory for the project.</li>

<li>Install the npm packages</li>
`npm install`

<li>Build the project:</li>
`npm run build`

<li>Change to the directory  for the distribution:</li>
`cd ./dist`

<li>Run the python server</li>
`python -m http.server`

<li>Visit the app in your web browser</li>
`localhost:8000`
</ol>
