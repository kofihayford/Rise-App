
// Create api ajax call function to link the playlist; use the soundcloud api //

async function playlist() {

    var queryURL = "https://api.soundcloud.com";

    var response = await $.ajax({
        url: queryURL,
        method: "GET"
      })
        console.log(response);
        
    var iframeElement   = document.querySelector('iframe');
    var iframeElementID = iframeElement.id;
    var widget1         = SC.Widget(iframeElement);
    var widget2         = SC.Widget(iframeElementID);
    }