import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../helper/utils";
import { createRoom, reset } from "../features/room/roomSlice";

const CreateRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isSuccess, isError, message } = useSelector((state) => state.room);

  const [files, setFiles] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    price: 300,
    desc: "room description",
    roomNumbers: "",
  });
  const { name, price, desc, roomNumbers } = formData;
  
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  useEffect(() => {
    if (!user) {
      // navigate to login
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
  if (isSuccess) {
    alert("Room created successfully!");
    dispatch(reset());
    navigate("/rooms");
  }
  
  if (isError) {
    alert(`Error: ${message}`);
    dispatch(reset());
  }
}, [isSuccess, isError, message, dispatch, navigate]);
  

  const handleChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
  };

  // handle File change
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !roomNumbers) {
      console.error("Not all required fields are filled in");
      return;
    }

    const roomArray = roomNumbers.split(",").map((item) => {
      return {
        number: parseInt(item),
        unavailableDates: [],
      };
    });

    console.log("Parsed room numbers:", roomArray);
    console.log("Files to upload:", files);

    // upload images to cloudinary
    try {
    let list = [];
    if (files && Object.keys(files).length > 0) {
      list = await Promise.all(
        Object.values(files).map(async (file) => {
          const url = await uploadImage(file);
          return url;
        })
      );
    }
    
    console.log("Uploaded images:", list);

    const dataToSubmit = {
      name,
      price: Number(price),
      desc,
      roomNumbers: roomArray,
      img: list,
    };
    
    console.log("Data to submit:", dataToSubmit);
    dispatch(createRoom(dataToSubmit));
  } catch (error) {
    console.error("Error during form submission:", error);
  }
};

  return (
    <div className="container">
      <h1 className="heading center">CreateRoom</h1>

      <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter room name"
              onChange={handleChange}
            />
          </div>

         
          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="Enter room price"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              onChange={handleChange}
              value={desc}
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="desc">Room Numbers</label>
            <textarea
              name="roomNumbers"
              onChange={handleChange}
              value={roomNumbers}
              placeholder="enter room numbers seperated by commas eg: 202, 203, 204, 400"
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="name">Images</label>
            <input
              type="file"
              name="file"
              multiple
              onChange={handleFileChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>


   
    </div>

    
  );
};

export default CreateRoom;
