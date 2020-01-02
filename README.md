Wolfish HTML v2.1
======


HTML, CSS and JavaScript basic template for static websites with extra boosters: Grid System form Bootstrap v4.3.1, jQuery v3.4.1, Lightbox 2, OwlCarousel v2.3.4 . Full list of additional packages can be find in package.json.\
\\
To change files in your project, please modify files in ```/src``` folder.
\\
**Latest version of NPM is necessary - please download package from [Node JS site](http://nodejs.org)!**
\\
**Since version 2.0.0, Gulp is no longer needed - Wolfish now use NPM Scripts**
\\
Full README.md file soon. Well, probably ¯\_(ツ)_/¯

  

First run:
---

  

Go to project folder and run in terminal window:

```

npm install

```

  

then

  

```

npm run dev

```

  

That's all, happy coding! Remeber to modify files in ```/src``` folder!

  
  

Usage:
---

  

__For development:__

```

npm run dev

```

 \
__For deploy to production (minify images, HTML, CSS and JS):__

```

npm run deploy

```

  
Additional information:
---
```npm run sass``` - compile Sass files in ```/sass``` folder ONLY ONCE
\
```npm run sass:watch``` - watching changes in Sass files
\
```npm run browsersync``` - starts basic webserwer and reload automaticly when find changes in ```.html``` and ```.css``` files
\
```npm run dev``` - starts developer environment
\
```npm run deploy:made``` - coping project files to ```/dist``` folder **without optimalization** 
\
```npm run deploy:optiimg``` - optimalization for images ONLY in ```/images``` folder **without subfolders**
\
```npm run deploy:opticss``` - optimalization for main CSS stylesheets (```mobile.css``` and ```style.css```) in ```/css``` folder
\
```npm run deploy:optijs``` - optimalization for JS all scripts in ```/js``` folder **then merge them into one file ```main.js```**
\
```npm run deploy:optihtml``` - optimalization for HTML files in main folder **without subfolders**
\
```npm run deploy``` - makes folder ready to put on server - copy files from ```/dist``` to your server


License:
---

MIT