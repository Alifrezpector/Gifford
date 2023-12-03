const api_url =
  "https://api.thingspeak.com/channels/2366987/feeds.json?api_key=KRHGKQRGE4THW95X&results=1";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1;
      document.getElementById("field-2").innerHTML = obj.field2;
      document.getElementById("field-3").innerHTML = obj.field3;
    });
}, 1000);
