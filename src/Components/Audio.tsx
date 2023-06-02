import audio from "../assets/default.mp3";

function Audio() {
  return (
    <div>
        <audio src={audio} autoPlay loop></audio>
    </div>
  )
}

export default Audio