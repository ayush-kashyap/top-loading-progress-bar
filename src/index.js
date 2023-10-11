import React from 'react'
export function ProgressBar(props) {
    
    return (
        <div className="pro-bar" style={{
            display:"none",
            width: '100vw',
            position: 'fixed',
            top: '0',
            backgroundColor: 'transparent'
        }}>
            <div className="progress" style={{
                height: `${props.height}`,
                width: '0%',
                backgroundColor: `${props.color}`,
                transition: 'width linear 50ms'
            }}></div>
        </div>
    )
}

var progressbar;
export function hideBar() {
    document.querySelector(".progress").style.width = '0';
    document.querySelector(".pro-bar").style.display = 'none';
    clearInterval(progressbar);
}
export function showBar() {
    document.querySelector(".pro-bar").style.display = 'block';
    var progress = document.querySelector('.progress');
    var per = 0
    progressbar= setInterval(() => {
    if (progress.style.width <= "80%") {
        per++;
        progress.style.width = `${per}%`;
    } else if (progress.style.width >= "80%") {
        per += 0.1;
        progress.style.width = `${per}%`;
    }
}, 50);
}
