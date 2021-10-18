import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    let pathnames = window.location.pathname.split('/');
    let active = pathnames[pathnames.length - 1];
    console.log(active);

    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar(active)}
            </div>
            
            <div class="col-xxl-6 col-xl-6 col-lg-8 col-10">
                ${ExploreComponent()}
            </div>
            
            <div class="col-xxl-4 col-xl-4 col-lg-3 d-none d-lg-inline">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
