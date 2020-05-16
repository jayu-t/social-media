<!--Friend Request Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Friend Request</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="request-model-content">
        	<div class="request-modal-content border-bottom border-dark">
				    <span class="h4">No new friend request</span>
			    </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!--Massage Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Massages</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="massage-model-content">
          <div class="modal-content border-bottom border-dark">
            <img src="nikki.png" alt="nikki" class="img-fluid rounded-circle ml-2">
            <h5 class="ml-4">Jayesh Tajane</h5>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!--Notification Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel2">Notification</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="notification-model-content"> 
          <div class="modal-content border-bottom border-dark">
            <img src="nikki.png" alt="nikki" class="img-fluid rounded-circle ml-2">
            <h5 class="ml-4">Jayesh Tajane</h5>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Make New Post Modal -->
<div >
  <div class="modal fade" id="create-new-post" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="padding-left: 20px; padding-right: 20px;">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Make new post</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form enctype ="multipart/form-data" id="post-form">
            <div class="form-group">
              <label for="post-images-selector">Choose Photo</label>
              <input type="file" class="form-control-file" id="post-images-selector" name="postImage" onchange="readURL(this, '#post-image')">
            </div>
            
            <div class="form-group">
              <label for="about-post">Say something about photo</label>
              <textarea class="form-control" id="about-post" rows="3" name="postText"></textarea>
            </div>
          </form>
          <div>
            <img src="" alt="" id="post-image">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="sharePost()" data-dismiss="modal">Post</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Make New Story Modal -->
<div >
  <div class="modal fade" id="add-new-story" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="padding-left: 20px; padding-right: 20px;">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add new story</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form enctype ="multipart/form-data" id="story-form">
            <div class="form-group">
              <label for="story-images-selector">Choose Photo</label>
              <input type="file" class="form-control-file" id="story-images-selector" name="postImage" onchange="readURL(this, '#upload-story-image')">
            </div>
            
            <div class="form-group">
              <label for="about-status">Write your story</label>
              <textarea class="form-control" id="about-status" rows="3" name="postText"></textarea>
            </div>
          </form>
          <div>
            <img src="" alt="" id="upload-story-image">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="shareStory()" data-dismiss="modal">Share story</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!--Search Modal -->
<div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="form-group" style="padding-left: 20px; padding-right: 20px; padding-top: 20px;">
        <input type="text" class="form-control" placeholder="Search" onchange="searchName(this)">
    </div>
    <div id="search-result">
      
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
