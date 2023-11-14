document.addEventListener("DOMContentLoaded", function () {
    // Get references to the large image, the small image list, the caption, and the flower name
    var largeImage = document.querySelector("#gallery figure img");
    var smallImages = document.querySelectorAll("#gallery ul li img");
    var caption = document.getElementById("imageCaption");
    var flowerName = document.querySelector(".flowerName");

    // Initialize the speech synthesis object
    var synth = window.speechSynthesis;

    // Function to speak the given text
    function speak(text) {
        var utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    // Add click event listeners to each small image
    smallImages.forEach(function (smallImage) {
        smallImage.addEventListener("click", function () {
            // Set the source and alt attributes of the large image based on the clicked small image
            largeImage.src = this.src.replace("-small.jpg", "-large.jpg");
            largeImage.alt = this.alt;

            // Update the caption and flower name with the data-title attribute of the clicked small image's parent li
            var flowerTitle = this.parentElement.getAttribute("data-title");
            caption.innerText = flowerTitle;
            flowerName.innerText = flowerTitle;

            // Speak the flower name
            speak(flowerTitle);
        });
    });
});
