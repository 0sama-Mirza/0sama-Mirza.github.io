"use strict";

const timeTable = document.querySelector("#timeTable");

const mediaQuery = window.matchMedia("(max-width: 555px)");

const handleMediaQueryChange = function (e) {
  if (e.matches) {
    // Mobile Layout (Accordion)
    timeTable.innerHTML = `
<div class="accordion">
  <details>
    <summary>Monday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 05:00</p>
        <p class="subject"><strong><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></p>
      </div>
      <div class="time-row">
        <p class="time">05:00 onwards</p>
        <p class="subject"><strong>Free</strong></p>
      </div>
    </div>
  </details>

  <details>
    <summary>Tuesday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 05:00</p>
        <p class="subject"><strong><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></p>
      </div>
      <div class="time-row">
        <p class="time">05:15 - 07:00</p>
        <p class="subject"><strong>Holy Quran Class</strong><br>B-20</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Wednesday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 05:00</p>
        <p class="subject"><strong><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></p>
      </div>
      <div class="time-row">
        <p class="time">05:15 - 08:00</p>
        <p class="subject"><strong>Embedded Systems</strong><br>B-19</p>
      </div>
    </div>
  </details>

  <details>
    <summary>Thursday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 05:00</p>
        <p class="subject"><strong><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></p>
      </div>
      <div class="time-row">
        <p class="time">05:00 onwards</p>
        <p class="subject"><strong>Free</strong></p>
      </div>
    </div>
  </details>

  <details>
    <summary>Friday</summary>
    <div>
      <div class="time-row">
        <p class="time">09:00 - 02:00</p>
        <p class="subject"><strong><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></p>
      </div>
      <div class="time-row">
        <p class="time">02:00 - 06:00</p>
        <p class="subject"><strong>RFIC Theory Class</strong><br>B-127</p>
      </div>
      <div class="time-row">
        <p class="time">06:00 - 08:00</p>
        <p class="subject"><strong>RFIC Lab</strong><br>GF-METRC Lab</p>
      </div>
    </div>
  </details>
</div>
    `;
  } else {
    // Desktop Layout (Table)
    timeTable.innerHTML = `
    <div style="overflow-x: auto; max-width: 100%;">
    <table style="width: 100%; table-layout: fixed; word-wrap: break-word; border-collapse: collapse;">
    <tr>
        <th>Time</th>
        <th>09:00 - 02:00</th>
        <th>02:00 - 05:00</th>
        <th>05:15 - 06:00</th>
        <th>06:00 - 07:00</th>
        <th>07:00 - 08:00</th>
    </tr>
    <tr>
        <th>Monday</th>
        <td colspan="2" data-label="09:00 - 05:00"><strong class="subject"><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></td>
        <td colspan="3" data-label="05:15 - 08:00">Free</td>
    </tr>
    <tr>
        <th>Tuesday</th>
        <td colspan="2" data-label="09:00 - 05:00"><strong class="subject"><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></td>
        <td colspan="2" data-label="05:15 - 07:00"><strong class="subject">Holy Quran Class</strong><br>B-20</td>
        <td colspan="1" data-label="07:00 - 08:00">Free</td>
    </tr>
    <tr>
        <th>Wednesday</th>
        <td colspan="2" data-label="09:00 - 05:00"><strong class="subject"><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></td>
        <td colspan="3" data-label="05:15 - 08:00"><strong class="subject">Embedded Systems</strong><br>B-19</td>
    </tr>
    <tr>
        <th>Thursday</th>
        <td colspan="2" data-label="09:00 - 05:00"><strong class="subject"><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></td>
        <td colspan="3" data-label="05:15 - 08:00">Free</td>
    </tr>
    <tr>
        <th>Friday</th>
        <td colspan="1" data-label="09:00 - 02:00"><strong class="subject"><a href="https://www.youtube.com/watch?v=_IrQHeDcMi8" target="_blank" rel="noopener noreferrer">WORK</a></strong></td>
        <td colspan="2" data-label="02:00 - 06:00"><strong class="subject">RFIC Theory Class</strong><br>B-127</td>
        <td colspan="2" data-label="06:00 - 08:00"><strong class="subject">RFIC Lab</strong><br>GF-METRC Lab</td>
    </tr>
</table></div>`;
  }
};

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);