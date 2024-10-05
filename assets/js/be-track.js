// Function to send tracking data using fetch
async function beTrackData(data) {
  try {
    const response = await fetch(
      `https://tracker.broadengage.com/api/vi/add-track-data`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Tracking response:", result);
  } catch (error) {
    console.error("Error tracking data:", error);
  }
}

function initializeTracking() {
    console.log("Initializing tracking...");
  let trackingId = Cookies.get("be_tracking_id");

  if (!trackingId) {
    trackingId = uuidv4();
    Cookies.set("be_tracking_id", trackingId, { expires: 365 });
  }

  const urlParams = new URLSearchParams(window.location.search);
  let utmId = urlParams.get("utm_id") || "organic";

  if (utmId.startsWith('"') && utmId.endsWith('"')) {
    utmId = utmId.substring(1, utmId.length - 1);
  }

  console.log("utmId after processing:", utmId);

  const data = {
    id: trackingId,
    sdk_id: "Jas salon",
    utm_id: utmId ? utmId : "organic",
    json: {},
    url: window.location.href
  };

  // Assuming there's a global `hasTracked` variable
  if (!window.hasTracked) {
    console.log("Sending tracking data..."); 
    beTrackData(data);
    window.hasTracked = true;
  }
}

document.addEventListener("DOMContentLoaded", initializeTracking);
