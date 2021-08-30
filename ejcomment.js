// {#
//     < !-- < div class="container" >
//         <nav>
//             <a href="/feed">Home</a>
//             <a href="">Profile</a>
//             <a href="">Sign Out</a>
//         </nav>
//         <div class="sidebar">
//             <div class="profile-info">
//                 <h1>Username</h1>
//                 <p>Bio</p>
//                 <p>Species</p>
//             </div>
//             <div class="follow">
//                 <h3>People To Follow</h3>
//                 <ul class="list-group">
//                     <li class="list-group-item">Captain Rex</li>
//                     <li class="list-group-item">Asajj Ventress</li>
//                     <li class="list-group-item">Barriss Offee</li>
//                     <li class="list-group-item">Ezra Bridger</li>
//                 </ul>
//             </div>
//         </div>
//         <main>
//             <h2>Enlist Today</h2> <br />
//             <img width="200" height="200" src="h234E5A90.png" alt="ad">
//             <br>
//             <iframe width="200" height="200" src="https://www.youtube.com/embed/xmdKLPEmsRw?playlist=xmdKLPEmsRw&autoplay=1&loop=1&mute=1" title="YouTube video player"
//                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen>
//             </iframe>
//             <img width="200" height="200" src="rebel.png" alt="ad">

//         </main>
//         <div class="feed">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body photo">
//                     <div class="profile">
//                         <img src="tano_selfie.png" alt="im no jedi">
//                     </div>
//                     <h5 class="card-title username">
//                         <% for( let i=0; i < feed.length; i++ ) { %>
//                             @<%=feed[i].name%>

//                     </h5>
//                     <p class="card-text tweet">The post goes Here</p>

//                         <div class="tabs">
//                             <% for( let i=0; i < feed.length; i++ ) { %>
//                                 @<%=feed[i].name%>
//                             <a href="/feed/<%=feed[i]._id%>/edit"> Edit Tweet</a>
//                             <p>Like</p>
//                             <p>Comment</p>
//                             <form action="/feed/<%=feed[i]._id%>?_method=DELETE" method="POST">
//                                 <input type="submit" value="DELETE">
//                             </form>
//                             <% } %>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         <footer>
//             <button>
//                 <a href="/feed/new">Create a new tweet!</a>
//             </button>
//         </footer>
//     </div> -->
// <!-- <% for( let i=0; i < feed.length; i++ ) { %>
//     @<%=feed[i].name%>
//         <a href="/feed/<%=feed[i]._id%>/edit"> Edit Tweet</a>
//         <p>Like</p>
//         <p>Comment</p>
//         <form action="/feed/<%=feed[i]._id%>?_method=DELETE" method="POST">
//             <input type="submit" value="DELETE">
//         </form>
//         <% } %> -->
//         #}


// /// -----------

// {#
//     < !-- < li class="comment" >
//         <img src="tano_selfie.png" alt="rebel" width="50" height="50">
//             <div class="comment-body">
//                 <a href="#" class="comment-author">
//                     <small class="text-muted pull-right">40 Minutes ago</small>
//                     <span>@<%=feed[i].name%></span>
//                 </a>
//                 <p><%= feed[i].entry %></p>
//             </div>
//             <ul class="list-inline size-11">
//                 <li class="pull-right">
//                     <a href="#" class="text-danger">Delete</a>
//                 </li>
//                 <li class="pull-right">
//                     <a href="#" class="text-primary">Edit</a>
//                 </li>
//             </ul>
//                     </li> -->
//                     < !-- < li class="comment" >
//         <img src="tano_selfie.png" alt="rebel" width="50" height="50">
//             <div class="comment-body">
//                 <a href="#" class="comment-author">
//                     <small class="text-muted pull-right">30 Minutes ago</small>
//                     <span>@<%=feed[i].name%></span>
//                 </a>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati consectetur laboriosam tempore
//                     necessitatibus velit deserunt ab, quis, provident ipsam molestiae aspernatur tenetur similique hic
//                     accusamus! Recusandae consequuntur deleniti sunt.</p>
//             </div>
//             <ul class="list-inline size-11">
//                 <li class="pull-right">
//                     <a href="#" class="text-danger">Delete</a>
//                 </li>
//                 <li class="pull-right">
//                     <a href="#" class="text-primary">Edit</a>
//                 </li>
//             </ul>
//                     </li> -->
//                     #
// }


// //-----------

// {#
// <!-- <div class="card gedf-card">
// <div class="card-header">
//     <div class="d-flex justify-content-between align-items-center">
//             <div class="mr-2">
//                 <img class="rounded-circle" width="45" src="edit.png" alt="avatar">
//             </div>
//             <div class="ml-2">
//                 <div class="h5 m-0">@Username</div>
//                 <div class="h7 text-muted">Ahsoka Tano</div>
//             </div>
//         </div>
//     </div>
// </div> -->
// #}
