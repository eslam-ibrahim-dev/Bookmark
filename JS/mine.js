var siteName = document.getElementById("SiteName");
var siteUrl = document.getElementById("SiteURL");
var btnName = document.getElementById("bookmarkbtn");

var boomkmarkDisplay = [];

if (localStorage.getItem("bookmarkList") != null) {
    boomkmarkDisplay = JSON.parse(localStorage.getItem("bookmarkList"));
    Dislaybookmark();
};


function GetBookMark() {
    var bookmark = {
        bookmarkName: siteName.value,
        bookmarkUrl: siteUrl.value
    }

    boomkmarkDisplay.push(bookmark);
    localStorage.setItem("bookmarkList", JSON.stringify(boomkmarkDisplay));
    Dislaybookmark();
}

function Dislaybookmark() {
    var hasalh = ``;

    for (var i = 0; i < boomkmarkDisplay.length; i++) {
        hasalh += ` <div class="bookmark-card" id="bookmarkcard">
        <div class="card-name float-start">
            <h3 class="bookmark-display-name">${boomkmarkDisplay[i].bookmarkName}</h3>
        </div>
        <div class="card-btn float-end">
            <button class="btn btn-warning"> <a href="https://${boomkmarkDisplay[i].bookmarkUrl}" target="_blank" class="visit-btn text-decoration-none">Visit</a> </button>
            <button class="btn btn-secondary" onclick="editBookmark(${i})">Edit</button>
            <button class="btn btn-danger" onclick="DeleteBookmark(${i})"> Delete</button>
        </div>
        <div class="clearfix"></div>
    </div>`
    }

    document.getElementById("bookmarkcardcontainer").innerHTML = hasalh;
}

function DeleteBookmark(index) {
    boomkmarkDisplay.splice(index, 1);
    localStorage.setItem("bookmarkList", JSON.stringify(boomkmarkDisplay));

    Dislaybookmark();
}

function editBookmark(index) {
    btnName.innerHTML = "Edit Display"
    siteName.value = boomkmarkDisplay[index].bookmarkName;
    siteUrl.value = boomkmarkDisplay[index].bookmarkUrl;
}