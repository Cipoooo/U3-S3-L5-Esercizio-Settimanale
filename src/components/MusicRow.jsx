import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";


const MusicRow = ({ genre, artistName}) => {

  const [songs,setSongs] = useState([])
  const dispatch = useDispatch()

 useEffect (() =>{
  const fetchSongs = () =>{
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
    .then(resp =>{
      console.log(resp)

    if(!resp.ok){
      throw new Error('resp not ok')
    }
    return resp.json()

  })
  .then(respData => {
    setSongs(respData.data.slice(0,3))
  })}
  fetchSongs()
},[artistName])
  

  return (
    <>
      <div className="py-0" id={genre}>
        <h2 className="text-white fs-2 fw-bold pe-2">{genre.toUpperCase()}:</h2>
        <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"id="rockSection">
        {songs.map((song) =>(
          <>
          <Col key={song.id} className="col text-center">
            <img className="img-fluid mb-3" src={song.album.cover_medium} alt="track" onClick={() =>
              dispatch({
                 type: "PLAY",
                 payload :({
                  cover :song.album.cover_medium, 
                  title :song.title,
                  artist:song.artist.name
                 })
              })
            } />
            <p className="text-white">Track:{song.title}<br/>Artist: {song.artist.name}</p>
            <span>🤍</span>

          </Col>
          </>
          ))
        }   
        </Row>
      </div>
    </>
  );
};
export default MusicRow;
