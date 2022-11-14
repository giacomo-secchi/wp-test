Hi everybody
Today we will start from scracth a new gutenberb block
or to be more precise
we will get the help of some helpfull tools to build up a block in less than 5 minutes


I remember that you need docker desktop and node with npm preinstalled to make evrithing work
first
open you console
move on your projects folder

cd /c/Projects
and run this command
npx @wordpress/create-block --wp-env
A prompt guide will ask you some infos about you blcok
static: is a block where the content of your block doesn't change at the saving time of the post
dinamic is one that change after the save of your post



I will choose static
the slug for me will be wp-test

Hit enter 
and voilà evrining is ready for start
This command will generate al the necessary files needed to register a new block type

run

npx wp-env start

To run the environment
Server modules, theme, all will start up from nothing lika a blackbox
and evrintng will start on localhost:8888
so your folder will be your module workspace without all other cluttering thing of a wordpress installation



now the module is installed and activated on the local environment

last of all run 
npm start
and the build script of the module will check all modification in the src folder and upgrade the files inside the build folder