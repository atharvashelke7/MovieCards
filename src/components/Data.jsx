import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const images = [

  "./images/img1.jpeg",
  "./images/img2.jpeg",
  "./images/img3.jpeg",
  "./images/img4.jpeg",
  "./images/img5.jpeg",
  "./images/img6.jpeg",
  "./images/img7.jpeg",
  "./images/img8.jpeg",
  "./images/img9.jpeg",

];

function Data() {

  const [count, setCount] = useState(0)



  return (
    <div>
      <div style={{
        padding: "170px",
        display: "flex",

      }}>
        {/* { 
        images.map(movieImg => {

          return <img width={"1200px"} src={movieImg} alt="movieImg" />;
        })
      } */}

        <button onClick={() => {

          setCount(count - 1)
        }}><MdArrowBackIos /></button>
        <img width={"1200px"} src={images[count]} alt="movieImg" />
        <button onClick={() => {

          setCount(count + 1)
        }}><MdArrowForwardIos /></button>

      </div>
      <div style={{ paddingLeft: "750px", marginTop: "-140px" }}>  <button style={{

        width: "150px",

      }}

        onClick={() => {

          setCount(count + 1)
        }}

      >{count}</button></div>

    </div>

  )
}

export default Data;
