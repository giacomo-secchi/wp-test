How to create a guthenber module for wordpress
Create a developent environment for your plugin (Tutorial 1)
It needs just 2 files( or to be more precise just one): package.json
So let's start:
First thing first:
open your favorite editorin my case it is Visual studio code
run npm init ( in my case i already installed node.js on my desktop)
go over the prompt will guide you trouh a bunce of questions
for sake of this tutorial i will hit enter to all of than questions so it will pick up the default values

Now you have a package.json file in your folder
Install the Wordpress/env package with this command
npm i @wordpress/env --save-dev
now you will get listed the wordpressend package inside the dev dependencies in the package.json file
now i want to build up evrything in just one command 

Create a .wp-env.json configuration file, this is a configuration file for wordpress/env,
is not mandatory and it is just if you want to have more control on particular configurations, wordpress version, plguin folder and stuff like that

in this file we will write this 
{
    "core": null,
    "plugins": ["."]
  }
In this way we will explicity say to worpdess that the current directory will be the one where we will write  our plugin 
and set up wordpress as the last stable version

create the entrypoint file of all your module
it'is justa a php with the same name of the folder you are working on
and and the current intestation

<?php
/**
 * Plugin Name:       Wp Test
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-test
 */



since i installed the package locally, if i want to run the wp-env command i need to use the npm command line tool

so the complete command is
npx wp-env start 
and
BOOMM! let's the magic do the job
A little punctuation: i prefer insall npm node packages locally as for project so i can keep trace in fhe package.json file, for some reasons: avoid conflicts due to different version installed and for a easier distributed code

so i put evrything on git and if some folk want to pull my work he can stay up to date more easily

