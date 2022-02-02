const APIKEY = "523532";

$(function () {
    $("#searching").click(function () {
        let artist = $("#artist").val();
        let request = `https://theaudiodb.com/api/v1/json/${APIKEY}/searchalbum.php?s=${artist}`;
		$("#result").empty();
        $.ajax({
            url: request,
            method: "GET"
        }).done(function (data) {

			if(data.album != null){
				$("#artist").val('');
				let albums = data.album;
				albums.forEach((album) => {
					$("#result").append(`
					<div class="col-xl-3 col-lg-4 col-md-5 col-sm-6>
						<div class="card">
							<img src="${album.strAlbumThumb}" class="card-img-top img-fluid"/>
							<div class="card-body">
								<h5 class="card-title">${album.strAlbum}</h5>
								<h6 class="card-subtitle mb-2 text-muted">${album.intYearReleased}</h6>
							</div>
						</div>
					</div>`
					);
				});
			}
			else{
				$("#result").append(`<h2>We couldn't find this artist or band. Please try another search.</h2>`);
			}
        }).fail(function() {
			$("#result").append(`<h2>An error has occurred, please try again.</h2>`);			
		});
    });
});