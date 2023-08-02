function showInfoPopup(type, message) {
    
    const infoPopupContainer = document.querySelector(".info-popup__container");
    let typeSign = ``;

    const successSign = `<svg class="success-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 32">
    <g>
                <path
                    d="M18.32 32c-1.51 0-2.93-.62-3.997-1.746-.43-.455-.43-1.19 0-1.645.43-.455 1.128-.455 1.558 0 .653.686 1.52 1.065 2.44 1.065.92 0 1.787-.38 2.438-1.066l19.03-20.077c.652-.687 1.01-1.6 1.01-2.572 0-.97-.358-1.885-1.01-2.572-1.344-1.418-3.532-1.418-4.876 0L24.31 14.573c-.43.454-1.13.454-1.56 0-.43-.454-.43-1.19 0-1.644L33.354 1.743c2.204-2.325 5.79-2.325 7.994 0 2.204 2.325 2.204 6.108 0 8.433l-19.03 20.077C21.25 31.38 19.83 32 18.32 32z"></path>
                    <path fill-opacity=".359"
                    d="M24 26.134l-3.295 3.44c-1.82 1.9-4.77 1.9-6.59 0L2.365 17.307c-1.82-1.9-1.82-4.98 0-6.88 1.82-1.9 4.77-1.9 6.59 0L24 26.133z"></path>
                <path
                    d="M18.053 32c-1.592 0-3.088-.645-4.214-1.817L1.742 17.59c-2.324-2.42-2.324-6.354 0-8.773C2.868 7.645 4.365 7 5.957 7c1.592 0 3.088.645 4.213 1.817L25.66 24.94c.453.473.453 1.24 0 1.712l-3.393 3.53C21.142 31.356 19.645 32 18.053 32zM5.957 9.42c-.97 0-1.884.393-2.57 1.108-1.42 1.475-1.42 3.876 0 5.352l12.096 12.592c.686.715 1.6 1.11 2.57 1.11.97 0 1.884-.395 2.57-1.11l2.572-2.676L8.527 10.528c-.686-.715-1.6-1.11-2.57-1.11z"></path>
            </g>
    </svg>`;

    const errorSign = `<svg  class="error-sign" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="438.533px" height="438.533px" viewBox="0 0 438.533 438.533" style="enable-background:new 0 0 438.533 438.533;" xml:space="preserve">
    <g>
        <path d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
            c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
            c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
            s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062
            C438.533,179.485,428.732,142.795,409.133,109.203z M322.621,270.939c3.617,3.613,5.428,7.905,5.428,12.854
            c0,5.133-1.811,9.514-5.428,13.127l-25.693,25.701c-3.614,3.613-7.994,5.42-13.135,5.42c-4.948,0-9.236-1.807-12.847-5.42
            l-51.676-51.682l-51.678,51.682c-3.616,3.613-7.898,5.42-12.847,5.42c-5.14,0-9.517-1.807-13.134-5.42l-25.697-25.701
            c-3.616-3.613-5.424-7.994-5.424-13.127c0-4.948,1.809-9.24,5.424-12.854l51.678-51.673l-51.678-51.678
            c-3.616-3.612-5.424-7.898-5.424-12.847c0-5.14,1.809-9.517,5.424-13.134l25.697-25.693c3.617-3.616,7.994-5.424,13.134-5.424
            c4.949,0,9.231,1.809,12.847,5.424l51.678,51.674l51.676-51.674c3.61-3.616,7.898-5.424,12.847-5.424
            c5.141,0,9.521,1.809,13.135,5.424l25.693,25.693c3.617,3.617,5.428,7.994,5.428,13.134c0,4.948-1.811,9.235-5.428,12.847
            l-51.675,51.678L322.621,270.939z" id="id_101"></path>
    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>`;

    if (type === "succes") {
        typeSign = successSign;
    } else if (type === "error") {
        typeSign = errorSign;
    }

    infoPopupContainer.querySelector(".info-popup__icon").innerHTML = typeSign;
    infoPopupContainer.querySelector(".info-popup__message").innerHTML = message;

    infoPopupContainer.classList.add("active");

}