function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#yourImage')
                        .attr('src', e.target.result)
                        .width(250)
                        .height(200);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }


// <!-- <button id="upload-button" class="btn-lg btn-primary">Upload</button>
//                         <div id="dropped-files"> -->