// menu.js
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');
    if (menu) {
        // Get the current file name
        const currentFile = window.location.pathname.split('/').pop();

        // Determine if the current file is in the "Matrix" folder
        const isInMatrix = currentFile.startsWith("Linux-");

        // Set the correct path prefix based on the current file
        const pathPrefix = isInMatrix ? '../' : './';

        menu.innerHTML = `
            <section>
                <h3 class="listhead">Explore!</h3>
                <nav>
                    <ul>
                        <li style="list-style-type: '🏠 ';"><a class="menuitem" href="${pathPrefix}index.html">Home</a></li>
                        <li style="list-style-image: url('${pathPrefix}images/icons/School-Bag-Book.gif');"><a class="menuitem" href="${pathPrefix}University.html">University Stuff</a></li>
                        <li style="list-style-type: '📕 ';"><a class="menuitem" href="${pathPrefix}helpfulresources.html">Helpful Resources</a></li>
                        <li style="list-style-type: '🐧 ';"><a class="menuitem" href="${pathPrefix}About-Linux.html">Me Using GNU/Linux</a></li>
                        <li style="list-style-type: '🎮 ';"><a class="menuitem" href="${pathPrefix}Gaming.html">Me Gaming</a></li>
                    </ul>
                    <a style="margin-left: 7%;" href="https://decolonizepalestine.com/" target="_blank"><img alt="88x31 button that says Stand with Palestine" src="${pathPrefix}images/Buttons/standwithFalasteen.png"></a>
                </nav>
            </section>
            <section>
                <h3 class="listhead">Interesting Stuff On The Internet</h3>
                <nav>
                    <ul>
                        <li><a class="menuitem" href="https://bugswriter.com/">BugsWriter</a></li>
                        <li><a class="menuitem" href="https://sadgrl.online/">SadGrl</a></li>
                        <li><a class="menuitem" href="https://links.yesterweb.org/">When The Internet Felt Exciting And Mysterious</a></li>
                        <li><a class="menuitem" href="https://adam.omg.lol/">OMG LOL</a></li>
                        <li><a class="menuitem" href="http://txti.es/">Simple Website Builder</a></li>
                        <li><a class="menuitem" href="https://wiby.me/">Better Google</a></li>
                        <li><a class="menuitem" href="https://asnan111.github.io/CAED-Lab-1/Asnan.html">The Best Website On This Planet!</a></li>
                        <li><a class="menuitem" href="https://www.anothersadtrombone.com/?gdpr=1">Click Here If You Accomplished Something Great!</a></li>
                        <li><a class="menuitem" href="https://www.szynalski.com/tone-generator/">Cool Wave Sounds</a></li>
                        <li><a class="menuitem" href="https://www.boredbutton.com/">Are You Bored? Click Here!</a></li>
                        <li><a class="menuitem" href="https://billsworld.neocities.org/">Time Travel To 1999!</a></li>
                        <li><a class="menuitem" href="https://pixels.crd.co/">Pixels</a></li>
                    </ul>
                </nav>
            </section>
        `;
    }
});
