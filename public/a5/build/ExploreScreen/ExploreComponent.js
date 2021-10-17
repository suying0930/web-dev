import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 form-group has-search">
                    <span class="fa fa-search form-control-feedback font-darker-gray"></span>
                    <input type="search" id="searchTwitter" placeholder="Search Twitter" class="form-control border-0 rounded-pill wd-input-search input-text" aria-label="Search"
                   aria-describedby="search-addon" />
                    <label class="form-label" for="searchTwitter"></label>
                </div>
                <div class="col-1 d-flex justify-content-center">
                    <button type="button" class="btn btn-outline-primary wd-btn-custom-search justify-content-center">
                        <i class="fas fa-cog fa-2x img-fluid"></i>
                    </button>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link nav-tabs active order-0" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-sm-inline-block" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           
           <div class="card bg-inverse override-bg">
                <img class="card-img" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="Card image cap">
                <div class="card-img-overlay wd-text-pos d-flex align-items-end">
                    SpaceX's Starship
                </div>
           </div>
            
            <div>
                ${PostSummaryList()}
            </div>
           
    `);
}
export default ExploreComponent;
