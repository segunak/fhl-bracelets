
/**
 * Whenever the window is resized, we resize the Etsy Mini. An Etsy Mini is 184px in width and 
 * height, so we grab the width of the viewport and calculate how many 184px cells can fit at 
 * minimum, and then set the Etsy Mini iframe to that number of columns. The number of rows can 
 * be set as well, but really is up to preference given that most browsers will infinite scroll 
 * for however many rows you want.
 */
let resizeEtsyMini = () => {
    let minColumns = 1;
    let maxColumns = 5;
    let clientWidth = document.documentElement.clientWidth;
    let etsyMiniColumns = Math.floor(clientWidth / 184);

    if (etsyMiniColumns < minColumns) {
        etsyMiniColumns = minColumns;
    }
    else if (etsyMiniColumns > maxColumns) {
        etsyMiniColumns = maxColumns
    }

    // Row value can be whatever, browsers have infinite scroll these days.
    setEtsyMiniSize(5, etsyMiniColumns, clientWidth);
}

let setEtsyMiniSize = (rows, columns, iframeWidth) => {
    let etsyIframe = document.getElementById("etsy-iframe-container").getElementsByTagName("iframe");
    let etsyURL = new URL(etsyIframe[0].src);
    etsyURL.searchParams.set("rows", rows);
    etsyURL.searchParams.set("columns", columns);

    etsyIframe[0].src = etsyURL.toString();
    etsyIframe[0].width = iframeWidth;
}

// On initial page load, and on every window resize, call resizeEtsyMini.
window.onload = window.onresize = resizeEtsyMini;