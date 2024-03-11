let added = false;


class Application {
    constructor() {

        this.main();
    }



    changeThePlackSpeed(speed) {
        document.querySelector("video").playbackRate = speed;
    }

    main() {
        let container = document.createElement("div");
        let input = document.createElement("input");
        let button = document.createElement('button');

        button.innerText = "Done"

        container.style.paddingBlock = "2rem"

        button.classList.add("yt-spec-button-shape-next", "yt-spec-button-shape-next--filled",
            "yt-spec-button-shape-next--call-to-action", "yt-spec-button-shape-next--size-m")

        input.style.backgroundColor = "#272727";
        input.style.color = "white";
        input.style.padding = "0.9em"


        input.style.flex = 0.7
        button.style.flex = 0.3

        container.style.width = "50%"


        container.appendChild(input);
        container.appendChild(button);

        input.type = "number"
        input.max = 16
        input.min = 0.1
        button.onclick = () => this.changeThePlackSpeed(input.value)

        container.style.display = "flex";
        container.style.gap = "2em";


        document.querySelector("#above-the-fold").prepend(container);

    }

}


document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.ctrlKey && event.shiftKey && event.key === 'Q') {
        if (!added) {
            added = true

            window.app = new Application();
        }
    }

    if (event.ctrlKey && event.shiftKey && event.key === "K") {
        const videoElement = document.querySelector("video");
        const adShowingElement = document.querySelector("div.ad-showing");

        videoElement.playbackRate = 16;
        function resetPlaybackRate() {
            if (!adShowingElement) {
                videoElement.playbackRate = 1;
            }
        }

        const observer = new MutationObserver(resetPlaybackRate);
        observer.observe(adShowingElement, { childList: true });

    }

});
