const [selectedImages, setSelectedImages] = useState([]);
const [Images1, setImages1] = useState();
const [Images2, setImages2] = useState();
const [Images3, setImages3] = useState();
const [Images4, setImages4] = useState();
const [Images5, setImages5] = useState();
const [Images6, setImages6] = useState();
const [Images7, setImages7] = useState();
const [Images8, setImages8] = useState();
const [Images9, setImages9] = useState();
const [Images10, setImages10] = useState();

const onSelectFile = (event) => {
       if(!Images1) setImages1(event.target.files[0]);
  else if(!Images2) setImages2(event.target.files[0]);
  else if(!Images3) setImages3(event.target.files[0]);
  else if(!Images4) setImages4(event.target.files[0]);
  else if(!Images5) setImages5(event.target.files[0]);
  else if(!Images6) setImages6(event.target.files[0]);
  else if(!Images7) setImages7(event.target.files[0]);
  else if(!Images8) setImages8(event.target.files[0]);
  else if(!Images9) setImages9(event.target.files[0]);
  else if(!Images10) setImages10(event.target.files[0]);

  const selectedFiles = event.target.files;
  const selectedFilesArray = Array.from(selectedFiles);

  const imagesArray = selectedFilesArray.map((file) => {

    return URL.createObjectURL(file);
  });

  setSelectedImages((previousImages) => previousImages.concat(imagesArray));

  // FOR BUG IN CHROME
  event.target.value = "";
};

function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }




  <section>
  <div class="input-group" >
    <input type="file" class="btn btn-info m-r-5 "  name="images" id="images"
    placeholder="abc@example.com"  onChange={onSelectFile}multiple
    accept="image/png , image/jpeg, image/webp" />
  </div>

    {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
        <p className="error">
            You can't upload more than 10 images! <br />
            <span>
            please delete <b> {selectedImages.length - 10} </b> of <them></them>{" "}
            </span>
        </p>
        )
        :
        (null)
        )
    }
    <br/>
    <div className="images">
        {selectedImages &&
        selectedImages.map((image, index) => {
            return (
            <div key={image} className="image">
                <img src={image} height="100" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                delete image
                </button>
                {/* <p>{index + 1}</p> */}
            </div>
            );
        })}
    </div>
</section>