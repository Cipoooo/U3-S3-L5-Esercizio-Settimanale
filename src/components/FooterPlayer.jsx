import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import next from "../../src/playerbuttons/next.png"
import play from "../../src/playerbuttons/play.png"
import prev from "../../src/playerbuttons/prev.png"
import repeat from "../../src/playerbuttons/repeat.png"
import shuffle from "../../src/playerbuttons/shuffle.png"

const FooterPlayer = () =>{

  const songArr = useSelector((state)=>state.main.songArr)
   console.log(songArr)

   useEffect(() => {
    console.log("songArr is updated", songArr);
  }, [songArr]);

    return(
        <>
          <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle}/>
                </a>
                <a href="#">
                  <img src={prev}/>
                </a>
                <a href="#">
                  <img src={play}/>
                </a>
                <a href="#">
                  <img src={next}/>
                </a>
                <a href="#">
                  <img src={repeat}/>
                </a>
              </div>
              <div className="progress mt-3 text-secondary" style={{color:"grey", height:"2px"}}>
                <div role="progressbar"></div>
              </div>
            </Col>
            {songArr.lenght > 0 && <Col className="col-6">
              {songArr.map((song,i) => console.log(song) (
                <>
                <div key={i} className="d-flex">
                  <img src={song[0].cover} alt={song[0].title} width={"50px"} height={"50px"} />
                  <p className="text-white">{song[0].title}</p>
                  <p className="text-white">{song[0].artist}</p>
                </div>
                </>
              ))}
            </Col>}
        </>
    );
};
export default FooterPlayer;