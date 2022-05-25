class Sidebar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="sidebar close">
        <div class="logo-details">
            <img class="logo-image" src="../image/ace.png" alt="ace">
            <span class="logo_name"> AI Kid Batch-1 </span>
        </div>
        <ul class="nav-links">
            <li>
                <a href="../Page/profile.html">
                    <i class="fa-solid fa-image-portrait"></i>
                    <span class="link_name">Profile</span>
                </a>
                <ul class="sub-menu blank">
                    <li><a class="link_name" href="../Page/profile.html">Profile </a></li>
                </ul>
            </li>
            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="fa-solid fa-person-chalkboard"></i>
                        <span class="link_name">Lesson</span>
                    </a>
                    <i class="fa-solid fa-caret-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Lesson</a></li>
                    <li><a href="../Page/lesson1.html">Lesson 1</a></li>
                    <li><a href="#">Lesson 2</a></li>
                    <li><a href="#">Lesson 3</a></li>
                </ul>
            </li>
            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="fa-solid fa-person-walking"></i>
                        <span class="link_name">Exercise</span>
                    </a>
                    <i class="fa-solid fa-caret-down arrow"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link_name" href="#">Exercise</a></li>
                    <li><a href="../Page/exercise1.html">Exercise 1</a></li>
                    <li><a href="#">Exercise 2</a></li>
                    <li><a href="#">Exercise 3</a></li>
                </ul>
            </li>
            <li>
                <div class="profile-details">
                    <div class="profile-content">
                        <img src="../image/Loid Forger.jpg" alt="profile-img">
                    </div>
                    <div class="name-job">
                        <div class="profile_name"> Loid Forger </div>
                        <div class="job"> Intelligence Spy </div>
                    </div>
                    <a href="../index.html"> <i class="fa-solid fa-right-from-bracket"></i></a>
                </div>
            </li>
        </ul>
    </div>
    <section class="header-section">
        <div class="header-content">
            <i class="fa-solid fa-bars bar"></i>
            <span class="text"> </span>
        </div>
    </section>
        `
    }
}
customElements.define('app-sidebar',Sidebar)