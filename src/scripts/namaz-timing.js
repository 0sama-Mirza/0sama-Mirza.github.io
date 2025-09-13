"use strick";

document.addEventListener("menuLoaded", function () {
  const countries = document.getElementById("countries");
  const closeMapButton = document.getElementById("closeMapButton");
  const Salah_Time = document.getElementById("Salah-Time");
  const prayer_list = document.querySelector(".prayer-list");
  let countriesData;
  let selectedLocation;
  let currentMarker;
  let map;
  const zoomLevel = 6;

  const getCurrentDate = function () {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const getJSON = async function (url, errorMsg = "Something went wrong.") {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${errorMsg}: ${response.status}`);
    return await response.json();
  };

  const getSensableSubRegion = function () {
    if (!selectedLocation || !selectedLocation.address) {
      console.log("Location data not available");
      return null;
    }

    const address = selectedLocation.address;

    // Prioritize the available sub-region in a sensible order
    if (address.village) {
      return address.village;
    } else if (address.suburb) {
      return address.suburb;
    } else if (address.town) {
      return address.town;
    } else if (address.city_district) {
      return address.city_district;
    } else if (address.city) {
      return address.city;
    } else if (address.county) {
      return address.county;
    } else if (address.state) {
      return address.state;
    } else if (address.country) {
      return address.country;
    } else {
      console.log("No sub-region found");
      return null;
    }
  };

  const Namaz_Timing = async function (lat, lng) {
    try {
      const currentDate = getCurrentDate();
      // Check if namazData exists in localStorage
      const storedNamazDataString = localStorage.getItem("namazData");
      const storedNamazData = storedNamazDataString
        ? JSON.parse(storedNamazDataString)
        : null;
      // If namazData exists and the date matches, use the stored data
      if (storedNamazData && storedNamazData.date === currentDate) {
        renderNamazTimings(
          storedNamazData.timings,
          storedNamazData.flag,
          storedNamazData.subRegion,
          storedNamazData.country,
          true
        );
        return;
      }
      const Namaz_Obj = await getJSON(
        `https://api.aladhan.com/v1/timings/${getCurrentDate()}?latitude=${lat}&longitude=${lng}&method=4&school=1&adjustment=1`,
        "Salah Timing Not Found!"
      );

      // Reverse GeoCoding:

      selectedLocation = await getJSON(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
        "No response from the reverse geocoding API."
      );
      // LocalStorage
      const selectedLocationString = JSON.stringify(selectedLocation);
      localStorage.setItem("selectedLocation", selectedLocationString);

      // Extract the country code
      const countryCode = selectedLocation.address.country_code.toLowerCase();

      // Find the matching country
      const matchingCountry = countriesData.find(
        (country) => country.altSpellings[0].toLowerCase() === countryCode
      );

      if (matchingCountry) {
      } else {
        console.error("No match found.");
      }

      renderNamazTimings(Namaz_Obj.data.timings, matchingCountry.flag, getSensableSubRegion(),selectedLocation.address.country,false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNamazTimings = function (Namaz_times, flag, subRegion, country,hmmm) {
    Salah_Time.textContent = `${
      flag
    } ${subRegion} ${country}`;
    prayer_list.innerHTML = `
              <li class="prayer-item">
                <span class="prayer-name">Fajr</span>
                <span class="prayer-time">${Namaz_times.Fajr}</span>
              </li>
              <li class="prayer-item">
                <span class="prayer-name">Dhuhr</span>
                <span class="prayer-time">${Namaz_times.Dhuhr}</span>
              </li>
              <li class="prayer-item">
                <span class="prayer-name">Asr</span>
                <span class="prayer-time">${Namaz_times.Asr}</span>
              </li>
              <li class="prayer-item">
                <span class="prayer-name">Maghrib</span>
                <span class="prayer-time">${Namaz_times.Maghrib}</span>
              </li>
              <li class="prayer-item">
                <span class="prayer-name">Isha</span>
                <span class="prayer-time">${Namaz_times.Isha}</span>
              </li>
    `;
    if(!hmmm){  
      const namazData = {
        date: getCurrentDate(),
        subRegion: subRegion,
        country: selectedLocation.address.country,
        timings: Namaz_times,
        flag: flag,
      };
      localStorage.setItem("namazData", JSON.stringify(namazData));
    }
  };

  const showNamazTiming = function () {
    document.getElementById("map").style.display = "none";
    closeMapButton.style.display = "none";
    countries.value = "default";
    prayer_list.style.display = "flex";
  };

  (async function () {
    try {
      const storageKey = "countriesData";
      countriesData = localStorage.getItem(storageKey);
      if (countriesData) {
        countriesData = JSON.parse(countriesData);
        const savedLocationString = localStorage.getItem("selectedLocation");
        if (savedLocationString) {
          const savedLocation = JSON.parse(savedLocationString);
          Namaz_Timing(savedLocation.lat, savedLocation.lon);
          showNamazTiming();
        }
      } else {
        countriesData = await getJSON("https://restcountries.com/v3.1/all?fields=name,flag,latlng,altSpellings");
        localStorage.setItem(storageKey, JSON.stringify(countriesData));
      }
      let outputCountries =
        '<option value="default" disabled selected>Select a country</option>';
      countriesData.forEach((country, index) => {
        let countryName = country.name.common;
        if (country.name.common === "Israel")
          countryName = "💩Terrorist Dog Madarchod IsNotReal💩";
        outputCountries += `<option value=${index}>${countryName} ${country.flag}</option>`;
      });
      countries.innerHTML = outputCountries;
      // Load MAP:
      map = L.map("map").setView([51.505, -0.09], zoomLevel);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      map.on("click", (mapE) => {
        mapEvent = mapE;
        if (currentMarker) {
          map.removeLayer(currentMarker);
        }
        currentMarker = L.marker(mapEvent.latlng)
          .addTo(map)
          .bindPopup(
            L.popup({
              autoClose: false,
              closeOnClick: false,
            })
          )
          .setPopupContent(
            `
Location Set! You Can Close Now.
  `
          )
          .openPopup();
        const { lat } = currentMarker._latlng;
        const { lng } = currentMarker._latlng;
        Namaz_Timing(lat, lng);
        prayer_list.style.display = "flex";
      });
    } catch (error) {
      console.error(error);
    }
  })();

  const movMap = function (latlng) {
    map.setView(latlng, zoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
  };

  countries.addEventListener("change", function () {
    if (this.value === "default" || !this.value) return;
    document.getElementById("map").style.display = "block";
    selectedLocation = countriesData[+this.value];
    window.dispatchEvent(new Event("resize")); // weird map behaviour. More Info At:
    // https://laracasts.com/discuss/channels/code-review/leaflet-js-map-not-showing-fully-on-page-load
    closeMapButton.style.display = "block";
    movMap(selectedLocation.latlng);
  });

  closeMapButton.addEventListener("click", function () {
    document.getElementById("map").style.display = "none";
    closeMapButton.style.display = "none";
    countries.value = "default";
  });
});
