This package provides a top loading progress bar that can be used to show loading animation. This animation can used whenever data is being fetched from server, navigating to another page, performing some other task that may require some time.

Guide to use top-loading-progress-bar package

Import the Component named 'ProgressBar' and two functions names 'showBar' and 'hideBar'.

Place the component 'ProgressBar' ( provide it two props 'height' and 'color' ) once in App.js file no need to plade it individually in every page.

Whenever the progress bar needs to be shown to user just call 'showBar' function, call 'hideBar' function when the desired task is accomplished.

Not calling 'hideBar' function and calling 'showBar' again may cause it to glitch.

