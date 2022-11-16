Add external css files
In this section i want to add an external css library: https://animate.style/

It is, as they say, a Just-add-water CSS animation library

so first install via npm
npm install animate.css --save

we could just make import 'animate.css';
 I don't like to include an external file like "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
 if, for any reasons, the external cdn doesn't give back the file your application may break down



 A further step could be to integrate a theme that support this libray

 and put that if the theme already load the library the block will just load the css trouhg the handler

 References: 
 https://developer.wordpress.org/block-editor/explanations/architecture/styles/
 https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/applying-styles-with-stylesheets/

 TODO: remove ./node_modules/ reference in code
 https://www.npmjs.com/package/@wordpress/scripts#using-css