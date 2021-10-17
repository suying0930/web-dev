import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostList from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            
            <div class="col-xxl-6 col-xl-6 col-lg-8 col-10">
                ${PostList()}
            </div>
            
            <div class="col-xxl-4 col-xl-4 col-lg-3 d-none d-lg-inline">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);