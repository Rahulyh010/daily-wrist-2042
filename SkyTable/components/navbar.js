const navbar=()=>{
    return `<div><p>Join our webinar to see how new Airtable features can transform your work <a href="">Register-></a></p></div>
    <div id="lower" style="background-color:white">
        <div id="left" >
            <div id="logo">
                <a href="index.html"><img src="https://i.ibb.co/WPSSbPY/Sky-Table-Logo.png" alt=""></a>
            </div>
            <p id="opt1">Product</p>
            <div id="arrow"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/13/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"/></div>
            <p id="opt2">Solutions</p>
            <div id="arrow"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/13/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"/></div>
            <p id="opt3">Pricing</p>
            <p id="opt4">Enterprise</p>
            <div id="arrow"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/13/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"/></div>
            <p id="opt5">Resources</p>
            <div id="arrow"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/13/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"/></div>
        </div>
        <div id="right">
            <a href=""><button id="contact_btn">Contact Sales</button></a>
            <a href="signupFree.html"><button id="signUp_btn">Sign up for free</button></a>
            <a href="signin.html"><button id="signIn_btn">Sign in</button></a>
        </div>
    </div>
    <div id="product">
        <div id="dropdown" style="background-color:white">
            <div>
                <a class="heading">Overview</a><br>
            <a class="desc">Welcome to SkyTable! Here's the basics</a>
            </div>
            <div>
                <p class="heading" id="features">Features<img src="https://img.icons8.com/metro/13/null/chevron-right.png"/></p>
            <p class="desc">Discover automation,views,reporting, and more</p>
            </div>
            <div>
                <a class="heading">Integrations</a><br>
            <a class="desc">Bring your favorite tools into SkyTable</a>
            </div>
            <div>
                <a class="heading">Enterprise Overview</a><br>
            <a class="desc">See how SkyTable scales for large and complex organizations</a>
            </div>
            <div>
                <a class="heading">Marketplace</a>
            </div>
            <div>
                <a class="heading">Download Apps</a>
            </div>
            <div>
                <a class="heading">What's new</a>
            </div>
            <div>
            <a class="heading">Pricing</a><br><br>
            <p class="desc">From small business to global enterprise, there’s an Airtable plan that’s just right for you</p>
            <a href="">Explore Pricing</a>
            </div>
        </div>
        <div id="subdown">
            <div>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.883 12.586c0-.547.195-1.016.586-1.406.39-.39.86-.586 1.406-.586.547 0 1.016.195 1.406.586.39.39.586.86.586 1.406 0 .547-.195 1.022-.586 1.426-.39.403-.86.605-1.406.605a1.887 1.887 0 01-1.406-.605 1.983 1.983 0 01-.586-1.426zm1.113-.879c-.247.247-.371.54-.371.879 0 .338.124.631.371.879.247.247.54.37.879.37.339 0 .632-.123.879-.37.247-.248.371-.54.371-.88 0-.338-.124-.63-.371-.878a1.201 1.201 0 00-.879-.371c-.339 0-.632.124-.879.371zm.332 7.754a.84.84 0 01-.469-.156.735.735 0 01-.195-.43l-.195-1.563a7.17 7.17 0 01-.938-.39l-1.25.976a.53.53 0 01-.39.157.64.64 0 01-.47-.196l-.82-.78a.64.64 0 01-.195-.47c0-.156.052-.3.156-.43l.977-1.25a5.513 5.513 0 01-.39-.898l-1.563-.195A.672.672 0 012 13.172v-1.133c0-.156.052-.3.156-.43a.787.787 0 01.43-.234l1.562-.195c.105-.313.235-.625.391-.938l-.976-1.25a.53.53 0 01-.157-.39.64.64 0 01.196-.47l.78-.78a.778.778 0 01.509-.196c.13 0 .26.04.39.117l1.25.977c.287-.156.6-.286.938-.39l.195-1.563c0-.156.065-.293.195-.41a.676.676 0 01.47-.176h1.093c.156 0 .3.065.43.195.13.104.208.235.234.39l.195 1.563c.313.105.625.235.938.391l1.25-.977a.632.632 0 01.39-.117.64.64 0 01.47.196l.78.78a.64.64 0 01.196.47c0 .156-.04.286-.117.39l-.977 1.25c.156.313.286.625.39.938l1.563.195-.039.39-.078.352.078-.351.04-.391a.742.742 0 01.41.215.608.608 0 01.175.45v1.132c0 .156-.065.3-.195.43a.481.481 0 01-.39.195l-1.563.195a5.06 5.06 0 01-.391.938l.976 1.25a.82.82 0 01.118.43.64.64 0 01-.196.468l-.78.781a.64.64 0 01-.47.196.53.53 0 01-.39-.157l-1.25-.976a7.172 7.172 0 01-.938.39l-.195 1.563a.681.681 0 01-.215.43.65.65 0 01-.45.156H8.329zm1.016-.742l.234-2.032.274-.039c.416-.104.82-.273 1.21-.507l.235-.118 1.562 1.211.664-.664-1.21-1.601.117-.196c.234-.39.403-.794.508-1.21l.039-.274 2.03-.234v-.938l-2.03-.234-.04-.274a4.44 4.44 0 00-.507-1.21l-.117-.196 1.21-1.601-.664-.665-1.601 1.25-.195-.156a4.44 4.44 0 00-1.211-.508l-.274-.039-.234-2.03h-.938l-.234 2.03-.274.04a4.44 4.44 0 00-1.21.507l-.196.156-1.601-1.25-.664.665 1.25 1.601-.157.195a4.44 4.44 0 00-.508 1.211l-.039.274-2.03.234v.938l2.03.273.04.235c.104.416.273.82.507 1.21l.157.235-1.25 1.562.664.703 1.601-1.25.196.118c.39.234.794.403 1.21.507l.274.04.234 2.03h.938zM17.82 4.852c-.364 0-.677.13-.937.39s-.39.573-.39.938h.155-.156c0 .364.13.677.39.937.261.26.574.39.938.39.365 0 .677-.13.938-.39.26-.26.39-.573.39-.937 0-.183-.039-.352-.117-.508a1.563 1.563 0 00-.293-.41 1.564 1.564 0 00-.41-.293 1.12 1.12 0 00-.508-.117zm.41 1.777a.562.562 0 01-.41.176.562.562 0 01-.41-.176.584.584 0 01-.176-.43c0-.169.059-.312.176-.43a.562.562 0 01.41-.175c.157 0 .293.058.41.176.118.117.176.26.176.43 0 .168-.058.312-.175.429zm3.653-1.113a.377.377 0 00-.195-.157l-.157-.039h-.117l-.703-.078a2.15 2.15 0 00-.195-.43l.547-.664a.422.422 0 00.117-.312.53.53 0 00-.157-.39l-.468-.47a.693.693 0 00-.703-.04l-.665.548a2.158 2.158 0 00-.43-.195l-.077-.82a.585.585 0 00-.196-.332.52.52 0 00-.351-.137h-.664a.52.52 0 00-.352.137.425.425 0 00-.156.332l-.117.82a1.369 1.369 0 00-.39.195l-.665-.546a.694.694 0 00-.703.039l-.469.468a.53.53 0 00-.156.39c0 .131.039.235.117.313l.547.665c-.078.13-.143.273-.195.43l-.82.077a.584.584 0 00-.333.196.52.52 0 00-.136.351v.664c0 .13.045.248.136.352a.426.426 0 00.332.156l.82.117c.053.13.118.26.196.39l-.547.665a.52.52 0 00.04.703l.468.469a.52.52 0 00.703.04l.664-.509.39.156.118.82a.568.568 0 00.176.352.552.552 0 00.37.117v-.117.117h.626c.13 0 .247-.039.351-.117a.526.526 0 00.196-.351l.117-.82.39-.157.665.508a.52.52 0 00.703-.04l.468-.468a.52.52 0 00.04-.703l-.547-.664c.078-.104.143-.234.195-.39l.82-.118c.13 0 .241-.052.332-.156A.52.52 0 0022 6.53v-.664c0-.13-.04-.247-.117-.351zm-.586.82l-1.172.156-.04.235c-.077.234-.168.455-.273.664l-.156.234.742.898-.234.235-.937-.703-.196.117c-.208.13-.43.221-.664.273l-.234.078-.156 1.133h-.313l-.156-1.133-.235-.078a2.108 2.108 0 01-.664-.273l-.195-.117-.937.703-.235-.235.742-.898-.156-.234a2.108 2.108 0 01-.273-.664l-.04-.235-1.171-.156v-.313l1.172-.117.039-.273c.052-.235.143-.456.273-.664l.156-.196-.742-.937.235-.195.937.703.195-.117c.209-.13.43-.222.664-.274l.235-.078.156-1.172h.313l.117 1.172.273.078c.235.052.456.143.664.274l.196.117.937-.703.195.195-.703.937.157.196c.104.208.195.43.273.664l.039.273 1.172.117v.313zm-3.262 10.39c-.221 0-.43.06-.625.176a1.238 1.238 0 00-.45.45c-.103.182-.155.39-.155.625h.117-.117c0 .338.123.631.37.878.248.248.541.372.88.372.338 0 .631-.124.879-.372.247-.247.37-.54.37-.878a1.13 1.13 0 00-.175-.625 1.41 1.41 0 00-.469-.45 1.196 1.196 0 00-.625-.175zm.41 1.66a.501.501 0 01-.39.177.562.562 0 01-.41-.176.562.562 0 01-.176-.41c0-.157.058-.287.175-.391a.598.598 0 01.41-.156.53.53 0 01.548.547.598.598 0 01-.157.41zm3.438-1.034a.377.377 0 00-.195-.157l-.118-.039h-.117l-.664-.078-.156-.39.469-.625a.422.422 0 00.117-.313.486.486 0 00-.157-.352l-.43-.43a.486.486 0 00-.35-.155c-.131 0-.235.039-.313.117l-.625.468a3.047 3.047 0 00-.39-.156l-.079-.781a.536.536 0 00-.176-.313.493.493 0 00-.332-.117h-.625c-.13 0-.24.04-.332.117a.536.536 0 00-.176.313l-.117.781c-.13.052-.247.104-.351.156l-.625-.468a.52.52 0 00-.703.039l-.43.43a.572.572 0 00-.117.351c0 .104.026.208.078.313l.508.625a3.035 3.035 0 00-.157.39l-.82.078a.633.633 0 00-.293.176.452.452 0 00-.137.332v.625c0 .13.04.24.117.332.079.091.183.15.313.176l.82.078c.026.13.078.26.157.39l-.508.626a.694.694 0 00-.078.312c0 .156.039.274.117.352l.469.468c.078.079.195.118.351.118a.693.693 0 00.313-.078l.625-.508c.104.052.234.104.39.156l.078.781c.026.13.085.235.176.313.091.078.202.13.332.156v-.156.156h.625a.477.477 0 00.313-.137.583.583 0 00.195-.332l.078-.781.39-.156.626.508a.555.555 0 00.312.078.57.57 0 00.352-.118l.43-.468c.104-.078.156-.196.156-.352a.52.52 0 00-.117-.312l-.47-.625c.053-.104.105-.235.157-.391l.781-.078a.536.536 0 00.313-.176.493.493 0 00.117-.332v-.625c0-.13-.04-.234-.117-.312zm-.547.78l-1.094.118-.078.234c-.052.235-.13.443-.234.625l-.117.235.664.86-.196.194-.898-.664-.195.118c-.183.13-.391.22-.625.273l-.235.04-.117 1.093h-.313l-.117-1.094-.234-.039a1.695 1.695 0 01-.625-.273l-.235-.118-.859.664-.195-.195.664-.86-.117-.234a1.695 1.695 0 01-.274-.625l-.039-.234-1.094-.117v-.313l1.094-.117.04-.234c.051-.235.142-.443.273-.625l.117-.196-.664-.898.195-.195.86.664.195-.117c.208-.105.43-.196.664-.274l.195-.039.156-1.094h.313l.117 1.094.235.04c.208.077.416.168.625.273l.195.117.86-.664.234.195-.704.898.157.196c.104.182.182.39.234.625l.078.234 1.094.117v.313z" fill="#458FFF"></path></svg>
                <div>
                    <p class="heading">Interface Designer</p>
                    <p class="desc">Turn your base into a working project</p>
                </div>
            </div>
            <div>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.375 5H4.625a.6.6 0 00-.438.188.6.6 0 00-.187.437v12.188a.6.6 0 00.188.437.6.6 0 00.437.188h14.75a.6.6 0 00.438-.188.6.6 0 00.187-.438V5.626a.6.6 0 00-.188-.438.6.6 0 00-.437-.187zm-.313 12.5H4.938V5.937h14.125V17.5zm-12.78-.563h11.437a.45.45 0 00.328-.14.487.487 0 00.14-.36V7a.487.487 0 00-.14-.36.45.45 0 00-.328-.14H6.28a.45.45 0 00-.328.14.487.487 0 00-.14.36v9.438c0 .145.046.265.14.359a.45.45 0 00.328.14zm.468-9.5h10.5v6.344l-2.375-2.375-1.563 1.563L9.626 9.28 6.75 12.187v-4.75zm0 6.032c.042-.042.094-.084.156-.125l2.719-2.719 3.031 3.031-.75.719c-.229.23-.229.453 0 .672.23.219.448.224.656.015l2.313-2.343 2.344 2.344c.02 0 .031.01.031.03V16H6.75v-2.531zM15 10.344c.27 0 .5-.094.688-.281a.935.935 0 00.28-.688c0-.27-.093-.5-.28-.688a.935.935 0 00-.688-.28c-.167 0-.328.04-.484.124a.855.855 0 00-.36.36 1.017 1.017 0 00-.125.484c0 .27.094.5.281.688a.935.935 0 00.688.28z" fill="#9B67F0"></path></svg>
                <div>
                    <p class="heading">Views</p>
                    <p class="desc">Explore different ways to view data</p>
                </div>
            </div>
            <div>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.023 17.138l-1.724-.596 1.724-.627.564-1.818.596 1.818 1.725.627-1.725.596-.596 1.85-.564-1.85zm-.063-.627h.032-.032zm-6.773-9.125l-1.254-.439 1.255-.439.407-1.316.408 1.316 1.223.44-1.223.438-.408 1.286-.408-1.286zm-.062-.47h.031-.031zm7.933 4.64l-.815-.281.815-.251.25-.815.283.815.784.25-.784.283-.282.784-.251-.784zm-.063-.187l.282-.094-.282.094zm1.568-4.704c.02-.042.052-.094.094-.157.397-.48.45-.93.157-1.348l-.063-.063-.063-.062a2.536 2.536 0 01-.266-.235 5.53 5.53 0 01-.251-.267 5.195 5.195 0 00-.235-.25.983.983 0 00-.251-.189c-.376-.188-.805-.094-1.286.282l-1.191 1.192-.565.564-1.254 1.254-4.358 4.359c-.565.564-1.406 1.41-2.524 2.54a844.822 844.822 0 01-2.556 2.57.893.893 0 00-.188.158 2.651 2.651 0 00-.188.203c-.042.053-.094.11-.157.173a1.251 1.251 0 00-.157.188c-.313.46-.345.868-.094 1.223l1.035 1.035c.418.271.899.198 1.442-.22.753-.773 1.317-1.348 1.694-1.724L17.9 8.327l.564-.596 1.098-1.066zm-3.23 1.882c-.02.041-.22.26-.595.658L11.3 13.642l-5.252 5.22-.91-.909 6.083-6.114 2.038-2.007c.084-.104.617-.648 1.6-1.63.271-.272.46-.429.564-.47.272-.084.543.083.815.501.084.146.115.25.094.314zm1.004-.972a1.89 1.89 0 00-.972-.878l1.567-1.568c.105.104.262.256.47.454.21.2.367.35.471.455l-.768.768-.768.769z" fill="#0DBDB4"></path></svg>
             <div>
                <p class="heading">Automations</p>
                <p class="desc">Simplify and streamline workflows</p>
             </div>
            </div>
            <div>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.066 4.778c.074-.92-.282-1.04-.791-.275l-5.116 7.693c-.34.51-.117.924.496.924h2.783c.613 0 1.076.487 1.03 1.115l-.356 4.999c-.066.922.268 1.024.739.239l5.245-8.741c.314-.524.07-.948-.542-.948H13.77a1.01 1.01 0 01-1.022-1.102l.316-3.904z" fill="#FCB42A"></path></svg>
                <div>
                    <p class="heading">Sync</p>
                    <p class="desc">Sync data across teams and tables</p>
                </div>
            </div>
            <div>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.93 19.263a7.208 7.208 0 00-.406-1.327h3.355c.491 0 .761-.074.81-.221.05-.148.025-.394-.073-.738-.197-.663-.516-1.18-.959-1.548-.27-.221-.632-.418-1.087-.59-.455-.172-.89-.356-1.309-.553-.417-.196-.75-.43-.995-.7.025-.148.019-.32-.018-.516-.037-.197-.043-.344-.019-.443.025-.123.142-.338.35-.645.21-.307.314-.583.314-.83.27-.147.454-.435.553-.865.098-.43.061-.818-.11-1.162.49-1.794.33-3.035-.48-3.723a2.985 2.985 0 00-.406-.203 5.859 5.859 0 00-.405-.166c-.074-.049-.19-.129-.35-.24a1.665 1.665 0 00-.35-.202c-.517-.196-1.082-.24-1.696-.129-.615.11-1.106.301-1.475.571a1.25 1.25 0 00-.405-.184 2.215 2.215 0 00-.295-.074 4.607 4.607 0 01-.369-.294c-.172-.148-.32-.234-.442-.258-1.008-.32-1.948-.295-2.82.073-.873.369-1.469.91-1.788 1.622-.295.713-.369 1.634-.221 2.765.024.074.049.166.074.276.024.111.049.215.073.314.025.098.037.184.037.258 0 .074-.043.19-.129.35a.92.92 0 00-.129.424c-.025.639.221 1.167.737 1.585.074.295.16.565.258.811.05.098.148.252.295.46.148.21.234.363.258.462.099.442.086.86-.037 1.253-.073.221-.245.412-.516.571-.27.16-.67.338-1.198.535-.528.197-.817.307-.866.332-.786.344-1.395.73-1.825 1.16-.43.43-.719 1.015-.866 1.752v.184c.025.393.184.59.48.59h13.933a.49.49 0 00.406-.184c.098-.123.135-.283.11-.48v-.073zm-13.935-.185c.074-.393.258-.737.553-1.032.32-.344.922-.688 1.807-1.032 1.032-.418 1.683-.725 1.953-.921.344-.222.578-.48.7-.775.124-.245.197-.65.222-1.216v-.48c0-.196-.025-.343-.074-.442a.726.726 0 00-.184-.258c-.123-.098-.197-.172-.221-.22-.197-.296-.344-.787-.443-1.476l-.037-.073h-.073a.441.441 0 01-.369-.203.823.823 0 01-.147-.498c0-.27.086-.442.258-.516l.073-.037v-.11c-.245-1.081-.368-1.843-.368-2.286 0-.614.123-1.118.368-1.511.394-.639 1.119-.995 2.175-1.07h.258c.344 0 .627.05.848.148.27.099.455.246.553.443l.037.037h.074c.491.024.848.233 1.069.626.221.32.332.787.332 1.401 0 .737-.136 1.462-.406 2.175v.074c0 .049.025.11.074.184.024.025.055.05.092.074.037.024.068.049.092.074.05.049.074.098.074.147v.147c0 .172-.037.32-.11.443a.454.454 0 01-.37.184h-.146v.11c-.1.86-.382 1.512-.849 1.954l-.037.037v.037c.025.098.037.221.037.369 0 .098-.006.258-.018.479-.012.221-.018.38-.018.48 0 .22.024.405.073.552.098.344.369.676.811.996.295.196.688.393 1.18.59 1.155.49 1.818.798 1.99.92.59.37.971.861 1.143 1.475H3.995zm12.902-1.99c-.098-.025-.258-.11-.479-.258-.27-.197-.442-.32-.516-.369a30.478 30.478 0 00-.977-.405c-.43-.172-.67-.27-.719-.295-.638-.27-1.105-.578-1.4-.922 0-.123-.006-.283-.019-.48a7.742 7.742 0 01-.018-.441v-.258c.024-.074.086-.185.184-.332l.295-.443c.098-.172.209-.479.332-.921.196-.123.356-.332.479-.627.147-.295.221-.614.221-.958 0-.32-.074-.59-.221-.811a7.483 7.483 0 00.295-2.065c0-.81-.148-1.425-.442-1.843.344-.246.786-.356 1.327-.332.294 0 .553.037.774.111a.824.824 0 01.479.369l.037.036h.037c.393.025.688.185.884.48.148.27.222.639.222 1.106a5.02 5.02 0 01-.37 1.88l-.036.11.11.037c.148.074.222.221.222.442a.54.54 0 01-.11.332.472.472 0 01-.296.184h-.073l-.037.111c-.05.688-.27 1.204-.664 1.548l-.037.037v.037a4.15 4.15 0 00-.073.737c0 .64.172 1.143.516 1.512.245.245.688.504 1.327.774.86.369 1.4.614 1.622.737.467.32.774.713.921 1.18h-1.843c-.147 0-.375.006-.682.018a18.89 18.89 0 01-.645.019 4.52 4.52 0 01-.627-.037z" fill="#FC4777"></path></svg>
                <div>
                    <p class="heading">Reporting</p>
                    <p class="desc">Visualize impact rigt in SkyTable</p>
                </div>
            </div>
        </div>
    </div>
    <div id="solutions">
        <div id="dropdown" style="background-color:white">
            <div>
                <p class="heading" id="team">By team<img src="https://img.icons8.com/metro/13/null/chevron-right.png"/></p>
                <p class="desc">See how teams of all stripes and sizes use SkyTable</p>
            </div>
            <div>
                <p class="heading">By use case</p>
                <p class="desc">Get inspired by use cases that'll make you fall in love with SkyTable</p>
            </div>
            <div>
                <a href="" class="heading"> See all solutions</a>
            </div>
        </div>
        <div id="subdown">
            <div>
                <p class="heading">Marketing</p>
                <p class="desc">Create custom workflows to run campaigns and track successes</p>
            </div>
            <div>
                <p class="heading">Product</p>
                <p class="desc">Build roadmaps and aligment while creating products customers will love</p>
            </div>
            <div>
                <p class="heading">Operations</p>
                <p class="desc">A single, well-organized place for both your data and your processes</p>
            </div>
            <div>
                <p class="heading">HR</p>
                <p class="desc">Keep teams aligned from recruitment to onboarding and beyond</p>
            </div>
            <div>
                <p class="heading">Sales</p>
                <p class="desc">Win loyal customers with smarter processes and account management</p>
            </div>
        </div>
    </div>
    <div id="enterprise">
        <div id="dropdown" style="background-color:white">
            <div>
                <a href="" class="heading">Enterprise Overview</a>
                <a href="" class="desc">See how SkyTable scales for large and complex organizations</a>
            </div>
            <div>
                <a href="" class="heading">Enterprise Services</a>
                <a href="" class="desc">We offer professional services and support to help you get the most from SkyTable</a>
            </div>
            <div>
                <a href="" class="heading">Enterprise Security</a>
                <a href="" class="desc">Learn about our data protection,admin tooling, and more</a>
            </div>
            <div>
                <a href="" class="heading">Pricing</a>
                <a href="" class="desc">From small business to global enterprise, there's a SkyTable plan that's just right for you</a>
                <a href="">Explore Pricing</a>
            </div>
        </div>
    </div>
    <div id="resources">
        <div id="dropdown" style="background-color:white">
            <li class="heading">Learn
                <ul>
                    <li><a href="" class="heading">Webinars</a></li>
                    <li><a href="" class="heading">Demos</a></li>
                    <li><a href="" class="heading">Guides</a></li>
                    <li><a href="" class="heading">Articles</a></li>
                    <li><a href="" class="heading">Blog</a></li>
                </ul>
            </li>
            <li class="heading">Inspiration
                <ul>
                    <li><a href="" class="heading">Templates</a></li>
                <li><a href="" class="heading">Universe</a></li>
                <li><a href="" class="heading">Customer Stories</a></li>
                </ul>
            </li>
            <li class="heading">Develop
                <ul>
                    <li><a href="" class="heading">API Docs</a></li>
                <li><a href="" class="heading">Custom Extensions</a></li>
                <li><a href="" class="heading">Developer Community</a></li>
                <li><a href="" class="heading">Scripting</a></li>
                </ul>
            </li>
        </div>
    </div>`
}
export default navbar;