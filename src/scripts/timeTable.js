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
        <p class="time">No classes scheduled</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Tuesday</summary>
    <div>
      <div class="time-row">
        <p class="time">08:00 - 09:20</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">09:20 - 10:40</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">10:40 - 12:00</p>
        <p class="subject"><strong>Wireless Communication</strong><br>B-202</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 01:20</p>
        <p class="subject"><strong>Software Engineering</strong><br>B-106</p>
      </div>
      <div class="time-row">
        <p class="time">01:20 - 02:40</p>
        <p class="subject"><strong>Class Advisor</strong><br>B-108</p>
      </div>
      <div class="time-row">
        <p class="time">02:40 - 04:00</p>
        <p class="subject"><strong>Foreign Language French</strong><br>B-203</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Wednesday</summary>
    <div>
      <div class="time-row">
        <p class="time">08:00 - 09:20</p>
        <p class="subject"><strong>Final Year Project 3</strong><br>B-107</p>
      </div>
      <div class="time-row">
        <p class="time">09:20 - 10:40</p>
        <p class="subject"><strong>Wireless Communication</strong><br>B-202</p>
      </div>
      <div class="time-row">
        <p class="time">10:40 - 12:00</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 01:20</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">01:20 - 02:40</p>
        <p class="subject"><strong>Engineering Management &amp Enterpreneurship</strong><br>B-106</p>
      </div>
      <div class="time-row">
        <p class="time">02:40 - 04:00</p>
        <p class="subject"><strong>Engineering Management &amp Enterpreneurship</strong><br>B-203</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Thursday</summary>
    <div>
      <div class="time-row">
        <p class="time">08:00 - 09:20</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">09:20 - 10:40</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">10:40 - 12:00</p>
        <p class="subject"><strong>Software Engineering</strong><br>B-110</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 01:20</p>
        <p class="subject"><strong>Conternporary International Relations</strong><br>B-106</p>
      </div>
      <div class="time-row">
        <p class="time">01:20 - 02:40</p>
        <p class="subject"><strong>Conternporary International Relations</strong><br>B-105</p>
      </div>
      <div class="time-row">
        <p class="time">02:40 - 04:00</p>
        <p class="subject"><strong>Foreign Language French</strong><br>B-110</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Friday</summary>
    <div>
      <div class="time-row">
        <p class="time">No classes scheduled</p>
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
        <th>08:00 - 09:20</th>
        <th>09:20 - 10:40</th>
        <th>10:40 - 12:00</th>
        <th>12:00 - 01:20</th>
        <th>01:20 - 02:40</th>
        <th>02:40 - 04:00</th>
    </tr>
    <tr>
        <th>Monday</th>
        <td><strong class="subject">C</strong></td>
        <td><strong class="subject">H</strong></td>
        <td><strong class="subject">U</strong></td>
        <td><strong class="subject">T</strong></td>
        <td><strong class="subject">I</strong></td>
        <td><strong class="subject">E</strong></td>
    </tr>
    <tr>
        <th>Tuesday</th>
        <td></td>
        <td></td>
        <td><strong class="subject">Wireless Communication</strong><br>B-202</td>
        <td><strong class="subject">Software Engineering</strong><br>B-106</td>
        <td><strong class="subject">Class Advisor</strong><br>B-106</td>
        <td><strong class="subject">Foreign Language French</strong><br>B-203</td>
    </tr>
    <tr>
        <th>Wednesday</th>
        <td><strong class="subject">Final Year Project III</strong><br>B-107</td>
        <td><strong class="subject">Wireless Communication</strong><br>B-202</td>
        <td></td>
        <td></td>
        <td><strong class="subject">Engineering Management &amp Enterpreneurship</strong><br>B-106</td>
        <td><strong class="subject">Engineering Management &amp Enterpreneurship</strong><br>B-203</td>

    </tr>
    <tr>
        <th>Thursday</th>
        <td></td>
        <td></td>
        <td><strong class="subject">Software Engineering</strong><br>B-110</td>
        <td><strong class="subject">Conternporary International Relations</strong><br>B-106</td>
        <td><strong class="subject">Conternporary International Relations</strong><br>B-105</td>
        <td><strong class="subject">Foreign Language French</strong><br>B-110</td>
    </tr>
    <tr>
        <th>Friday</th>
        <td><strong class="subject">C</strong></td>
        <td><strong class="subject">H</strong></td>
        <td><strong class="subject">U</strong></td>
        <td><strong class="subject">T</strong></td>
        <td><strong class="subject">I</strong></td>
        <td><strong class="subject">E</strong></td>
    </tr>
</table><div>`;
  }
};

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
