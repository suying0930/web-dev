import NavigationItem from "./NavigationItem.js";
import active from "./navigations.js";

const NavigationSidebar = () => {
    return (`
            <ul class="list-group">
                <a class="list-group-item override-bg override-font" >
                    <i class="fab fa-twitter"></i>
                </a>
                ${
                    active.map(item => {
                        return(NavigationItem(item));
                    }).join('')
                }
                <a class="list-group-item override-bg override-font" href="more.html">
                    <span class="fa-stack wd-fa-sm">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="d-none d-xl-inline">More</span>
                </a>
                <div class="d-grid mt-2">
                    <a href="tweet.html"
                       class="btn btn-primary btn-block rounded-pill">
                       Tweet
                    </a>
                </div>
            </ul>
    `);
}
export default NavigationSidebar;

