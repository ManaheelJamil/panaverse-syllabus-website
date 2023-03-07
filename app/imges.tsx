"use client"
import Typewriter from "typewriter-effect";
export default function container() {
  return (
    <>
      <div className="flex cont1 justify-evenly py-20 bg-gray-900 " >
        <div className="text-manaheel w-80 text-4xl text-white ">
        <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('CERTIFIED WEB3.0 AND METAVERSE PROGRAM')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            // .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
        </div>
        <div >
          <img width="350" className="image rounded-r-lg rounded-l-lg hover:scale-110 hover:bg-indigo-500 duration-300  " height="500" src="https://img.lovepik.com/photo/40067/1224.jpg_wh300.jpg" alt="image" />
         
        </div>
      </div>
    </>
  );
}
