"use strict";

const timeTable = document.querySelector("#timeTable");

const mediaQuery = window.matchMedia("(max-width: 555px)");

const handleMediaQueryChange = function (e) {
  if (e.matches) {
    timeTable.innerHTML = `
<div class="accordion">
  <details>
    <summary>Monday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 10:45</p>
        <p class="subject"><strong>Analog IC Lecture</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">11:00 - 12:45</p>
        <p class="subject"><strong>RTL Lecture</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">01:00 - 2:00</p>
        <p class="subject"><strong>Break</strong></p>
      </div>
      <div class="time-row">
        <p class="time">2:00 - 05:00</p>
        <p class="subject"><strong>Analog IC Lab</strong><br>IDK</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Tuesday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 10:45</p>
        <p class="subject"><strong>Digital IC Lecture</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">11:00 - 12:00</p>
        <p class="subject"><strong>Soft Skills (1 Hour)</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 02:00</p>
        <p class="subject"><strong>Break</strong></p>
      </div>
      <div class="time-row">
        <p class="time">2:00 - 03:30</p>
        <p class="subject"><strong>Analog IC Makeup</strong><br>B-227</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Wednesday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 10:45</p>
        <p class="subject"><strong>Analog IC Lecture</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">11:00 - 12:45</p>
        <p class="subject"><strong>RTL Lecture</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">01:00 - 02:00</p>
        <p class="subject">Break</p>
      </div>
      <div class="time-row">
        <p class="time">02:00 - 05:00</p>
        <p class="subject"><strong>Digital IC laboratory</strong><br>IDK</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Thursday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 12:45</p>
        <p class="subject"><strong>Research Methodology Lecture</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">01:00 - 02:00</p>
        <p class="subject">Break</p>
      </div>
      <div class="time-row">
        <p class="time">02:00 - 03:30</p>
        <p class="subject"><strong>Digital IC Makeup</strong><br>B-227</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Friday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 10:45</p>
        <p class="subject"><strong>Digital IC Lecture</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">11:00 - 12:45</p>
        <p class="subject"><strong>RTL Makeup</strong><br>B-227</p>
      </div>
      <div class="time-row">
        <p class="time">01:00 - 02:00</p>
        <p class="subject">Break</p>
      </div>
      <div class="time-row">
        <p class="time">02:00 - 05:00</p>
        <p class="subject"><strong>RTL Laboratory</strong><br>IDK</p>
      </div>
    </div>
    </div>
  </details>
</div>
    `;
  } else {
    timeTable.innerHTML = `
    <div style="overflow-x: auto; max-width: 100%;">
    <table style="width: 100%; table-layout: fixed; word-wrap: break-word; border-collapse: collapse;">
    <tr>
        <th>Time</th>
        <th>09:00 - 10:45</th>
        <th>11:00 - 12:45</th>
        <th>01:00 - 02:00</th>
        <th>02:00 - 03:30</th>
        <th>03:30 - 05:00</th>
    </tr>
    <tr>
        <th>Monday</th>
        <td colspan="1" data-label="09:00 - 10:45"><strong class="subject">Analog IC Lecture</strong><br>B-227</td>
        <td colspan="1" data-label="11:00 - 12:45"><strong class="subject">RTL Lecture</strong><br>B-227</td>
        <td colspan="1" data-label="01:00 - 02:00"></td>
        <td colspan="2" data-label="02:00 - 05:00"><strong class="subject">Analog IC laboratory</strong><br>IDK</td>
    </tr>
    <tr>
        <th>Tuesday</th>
        <td colspan="1" data-label="09:00 - 10:45"><strong class="subject">Digital IC Lecture</strong><br>B-227</td>
        <td colspan="1" data-label="11:00 - 12:45"><strong class="subject">Soft Skills (1 Hour)</strong><br>B-227</td>
        <td colspan="1" data-label="01:00 - 02:00"></td>
        <td colspan="1" data-label="02:00 - 03:30"><strong class="subject">Analog IC Makeup</strong><br>B-227</td>
        <td colspan="1" data-label="03:30 - 05:00"></td>
    </tr>
    <tr>
        <th>Wednesday</th>
        <td colspan="1" data-label="09:00 - 10:45"><strong class="subject">Analog IC Lecture</strong><br>B-227</td>
        <td colspan="1" data-label="11:00 - 12:45"><strong class="subject">RTL Lecture</strong><br>B-227</td>
        <td colspan="1" data-label="01:00 - 02:00"></td>
        <td colspan="2" data-label="02:00 - 05:00"><strong class="subject">Digital IC laboratory</strong><br>IDK</td>
    </tr>
    <tr>
        <th>Thursday</th>
        <td colspan="2" data-label="09:00 - 12:45"><strong class="subject">Research Methodology Lecture</strong><br>B-227</td>
        <td colspan="1" data-label="01:00 - 02:00"></td>
        <td colspan="1" data-label="02:00 - 03:30"><strong class="subject">Digital IC Makeup</strong><br>IDK</td>
        <td colspan="1" data-label="03:30 - 05:00"></td>
    </tr>
    <tr>
        <th>Friday</th>
        <td colspan="1" data-label="09:00 - 10:45"><strong class="subject">Digital IC Lecture</strong><br>B-227</td>
        <td colspan="1" data-label="11:00 - 12:45"><strong class="subject">RTL Makeup</strong><br>B-227</td>
        <td colspan="1" data-label="01:00 - 02:00"></td>
        <td colspan="2" data-label="02:00 - 05:00"><strong class="subject">RTL Laboratory</strong><br>IDK</td>
    </tr>
</table><div>`;
  }
};

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
