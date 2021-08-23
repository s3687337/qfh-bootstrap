# qfh-bootstrap
Live sandbox of a customised bootstrap library for a super secret project.


# To use
(I've only tried this in VSCode, sorry if you use something else. It's likely just as achievable though.)  
1: Clone the repo  
2: npm install  
3: In the file explorer panel of vscode, expand the "sass" folder and open qfh-css.scss, ensuring the file remains highlighted.  
3: Follow this video (https://youtu.be/nCX3QVl_PiI?t=420) from 7:00 to 8:25 (do step 4 at 7:56)
4: @7:56 - When you get into settings.json, replace the part in mention with this:
```
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/src/"
        }
```
5: npm start  
6: edit App.js and/or qfh-css.scss as you like, watching the changes happen live in browser (after a few seconds).
