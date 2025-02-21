// menu.js
document.addEventListener("DOMContentLoaded", async function() {
	const menu = document.querySelector('.menu');
    if (menu) {
        // Get the current file name
        const currentFile = window.location.pathname.split('/').pop();

        // Determine if the current file is in the "Matrix" folder
        const isInMatrix = currentFile.startsWith("Linux-");
		const isInIndex = currentFile.startsWith("index") || (currentFile.length===0);
		
        // Set the correct path prefix based on the current file
        let pathPrefix = isInIndex ? 'src/pages/home/' : './';
		pathPrefix = isInMatrix ? '../home/' : pathPrefix;
		let homePath = isInIndex ? './' : '../../../';

        menu.innerHTML = `
            <section>
				<h3 class="listhead" style="margin-top: 15px;">Explore!</h3>
                <nav>
                    <ul>
                        <li style="list-style-type: '🏠 ';"><a class="menuitem" href="${homePath}index.html">Home</a></li>
                        <li style="list-style-image: url('${homePath}images/icons/School-Bag-Book.gif');"><a class="menuitem" href="${pathPrefix}University.html">University Stuff</a></li>
                        <li style="list-style-type: '📕 ';"><a class="menuitem" href="${pathPrefix}helpfulresources.html">Helpful Resources</a></li>
                        <li style="list-style-type: '🐧 ';"><a class="menuitem" href="${pathPrefix}About-Linux.html">Me Using GNU/Linux</a></li>
                        <li style="list-style-type: '🎮 ';"><a class="menuitem" href="${pathPrefix}Gaming.html">Me Gaming</a></li>
						<li style="list-style-type: '📖 ';"><a class="menuitem" href="${pathPrefix}Guestbook.html">Guest Book</a></li>
                    </ul>
                    <a style="margin-left: 7%;" href="https://decolonizepalestine.com/" target="_blank"><img alt="88x31 button that says Stand with Palestine" src="${homePath}images/Buttons/standwithFalasteen.png"></a>
                </nav>
            </section>
            <section class="prayer-timing">
					<h3 class="listhead" id="Salah-Time">Salah Timings</h3>
					<!-- Drop Down Menu -->
					<label for="countries">Select a country:</label>
					<select name="countries" id="countries">
						<option value="default" disabled selected>Loading Countries</option>
					</select>
					<!-- Prayer Timings as a List -->
					<ul class="prayer-list">
						<li class="prayer-item">
						  <div class="prayer-details">
							<span class="prayer-name">Fajr</span>
							<span class="prayer-time">Loading...</span>
						  </div>
						</li>
						<li class="prayer-item">
						  <div class="prayer-details">
							<span class="prayer-name">Dhuhr</span>
							<span class="prayer-time">Loading...</span>
						  </div>
						</li>
						<li class="prayer-item">
						  <div class="prayer-details">
							<span class="prayer-name">Asr</span>
							<span class="prayer-time">Loading...</span>
						  </div>
						</li>
						<li class="prayer-item">
						  <div class="prayer-details">
							<span class="prayer-name">Maghrib</span>
							<span class="prayer-time">Loading...</span>
						  </div>
						</li>
						<li class="prayer-item">
						  <div class="prayer-details">
							<span class="prayer-name">Isha</span>
							<span class="prayer-time">Loading...</span>
						  </div>
						</li>
					  </ul>					  
			</section>
            <section>
                <h3 class="listhead">Interesting Stuff On The Internet</h3>
                <nav>
                    <ul>
                        <li><a class="menuitem" href="https://bugswriter.com/">BugsWriter</a></li>
                        <li><a class="menuitem" href="https://adam.omg.lol/">OMG LOL</a></li>
                        <li><a class="menuitem" href="http://txti.es/">Simple Website Builder</a></li>
                        <li><a class="menuitem" href="https://asnan111.github.io/CAED-Lab-1/Asnan.html">The Best Website On This Planet!</a></li>
                        <li><a class="menuitem" href="https://www.anothersadtrombone.com/?gdpr=1">Click Here If You Accomplished Something Great!</a></li>
                        <li><a class="menuitem" href="https://www.szynalski.com/tone-generator/">Cool Wave Sounds</a></li>
                        <li><a class="menuitem" href="https://billsworld.neocities.org/">Time Travel To 1999!</a></li>
                        <li><a class="menuitem" href="https://pixels.crd.co/">Pixels</a></li>
                    </ul>
                </nav>
            </section>
        `;
    }

		const footer = document.querySelector('footer');
		if (footer) {
			footer.insertAdjacentHTML('beforebegin', `
			<div id="mapContainer">
				<div id="map" anchor="closeMapButton"></div>
				<button id="closeMapButton" class="close-button">&times;</button>
			</div>
			`);
		} else {
			console.log("Footer not found.");
		}

	    // Dispatch custom event after menu is fully loaded
		const event = new Event('menuLoaded');
		document.dispatchEvent(event);
});




