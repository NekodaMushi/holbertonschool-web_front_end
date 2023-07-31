<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/nfVQHfcMtd7s8dCcr8CxLA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<h3>General</h3>

<ul>
<li>What Sass means</li>
<li>How to write Sass &amp; Scss file</li>
<li>What is the difference between Sass and Scss</li>
<li>What is the Sass preprocessing</li>
<li>How to declare a variable</li>
<li>How to use nested definition</li>
<li>How to import a Sass file</li>
<li>How to use mixins</li>
<li>How to declare extend/inheritance styles</li>
<li>How to manipulate operators</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code></li>
<li>All your files will be executed on Ubuntu 18.04 LTS using <code>Sass 3.7.4</code> (or higher)</li>
<li>All your files should end with a new line</li>
<li>All your Scss files should have a comment at the beginning (i.e. syntax above)</li>
<li>All your files should start by a comment describing the task</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>The length of your files will be tested using <code>wc</code></li>
</ul>

<h2>More Info</h2>

<h3>Comments for your Scss file:</h3>

<p><strong>All your Scss file must start with a comment block</strong></p>

<pre><code>$ cat my_styles.scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}
$
</code></pre>

<h3>Install Sass/Scss on Ubuntu 18.04 LTS</h3>

<pre><code>$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
Ruby Sass 3.7.4
</code></pre>
