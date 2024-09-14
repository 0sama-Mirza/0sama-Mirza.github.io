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
        <p class="time">08:00 - 09:20</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">09:20 - 12:00</p>
        <p class="subject"><strong>Data Base Systems Lab</strong><br>Computer Systems Design (CE)</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 01:20</p>
        <p class="subject"><strong>Class Advisor</strong><br>B-203</p>
      </div>
      <div class="time-row">
        <p class="time">01:20 - 02:40</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">02:40 - 04:00</p>
        <p class="subject"><strong>Parallel and Distributed Computing</strong><br>B-105</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Tuesday</summary>
    <div>
      <div class="time-row">
        <p class="time">08:00 - 09:20</p>
        <p class="subject"><strong>Data Base Systems</strong><br>B-202</p>
      </div>
      <div class="time-row">
        <p class="time">09:20 - 10:40</p>
        <p class="subject"><strong>Data Base Systems</strong><br>B-110</p>
      </div>
      <div class="time-row">
        <p class="time">10:40 - 12:00</p>
        <p class="subject"><strong>Final Year Project-II</strong><br>B-202</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 01:20</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">01:20 - 02:40</p>
        <p class="subject"><strong>Parallel and Distributed Computing</strong><br>B-107</p>
      </div>
      <div class="time-row">
        <p class="time">02:40 - 04:00</p>
        <p class="subject">N/A</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Wednesday</summary>
    <div>
      <div class="time-row">
        <p class="time">08:00 - 09:20</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">09:20 - 12:00</p>
        <p class="subject"><strong>Parallel and Distributed Computing Lab</strong><br>Signal & Image Processing (CE)</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 01:20</p>
        <p class="subject"><strong>Applied Robotics</strong><br>B-106</p>
      </div>
      <div class="time-row">
        <p class="time">01:20 - 02:40</p>
        <p class="subject"><strong>Applied Robotics</strong><br>B-109</p>
      </div>
      <div class="time-row">
        <p class="time">02:40 - 04:00</p>
        <p class="subject"><strong>Machine Learning</strong><br>B-203</p>
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
        <p class="subject"><strong>Tutorial</strong><br>B-108</p>
      </div>
      <div class="time-row">
        <p class="time">10:40 - 12:00</p>
        <p class="subject"><strong>Machine Learning</strong><br>B-106</p>
      </div>
      <div class="time-row">
        <p class="time">12:00 - 01:20</p>
        <p class="subject">N/A</p>
      </div>
      <div class="time-row">
        <p class="time">01:20 - 02:40</p>
        <p class="subject"><strong>Ethics</strong><br>B-110</p>
      </div>
      <div class="time-row">
        <p class="time">02:40 - 04:00</p>
        <p class="subject"><strong>Ethics</strong><br>B-206</p>
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
    timeTable.innerHTML = `<table>
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
        <td></td>
        <td colspan="2" data-label="Time"><strong class="subject">Data Base Systems Lab</strong><br>Computer Systems Design(CE)</td>
        <td><strong class="subject">Class Advisor</strong><br>B-203</td>
        <td></td>
        <td><strong class="subject">Parallel and Distributed Computing</strong><br>B-105</td>
    </tr>
    <tr>
        <th>Tuesday</th>
        <td><strong class="subject">Data Base Systems</strong><br>B-202</td>
        <td><strong class="subject">Data Base Systems</strong><br>B-110</td>
        <td><strong class="subject">Final Year Project-II</strong><br>B-202</td>
        <td></td>
        <td><strong class="subject">Parallel and Distributed Computing</strong><br>B-107</td>
        <td></td>
    </tr>
    <tr>
        <th>Wednesday</th>
        <td></td>
        <td colspan="2"><strong class="subject">Parallel and Distributed Computing Lab</strong><br>Signal &amp Image Processing(CE)</td>
        <td><strong class="subject">Applied Robotics</strong><br>B-106</td>
        <td><strong class="subject">Applied Robotics</strong><br>B-109</td>
        <td><strong class="subject">Machine Learning</strong><br>B-203</td>
    </tr>
    <tr>
        <th>Thursday</th>
        <td></td>
        <td><strong class="subject">Tutorial</strong><br>B-108</td>
        <td><strong class="subject">Machine Learning</strong><br>B-106</td>
        <td></td>
        <td><strong class="subject">Ethics</strong><br>B-110</td>
        <td><strong class="subject">Ethics</strong><br>B-206</td>
    </tr>
    <tr>
        <th>Friday</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>`;
  }
};

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
