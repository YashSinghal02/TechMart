import JBLSpeaker from "../../../assets/JBLSpeaker.png";
import "./Speaker.css"
import SpeakerCounter from "./SpeakerCounter"

function Speaker() {
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center text-center lg:text-left gap-8 speaker-main bg-black text-white">
         {/* lerft */}
         <div className="lg:col-span-5">
            <h2>Enhance Your </h2>
         <h2> Music Experience</h2>
         <SpeakerCounter/>
         <button className="buy-now-spk">Buy Now</button>
         </div>
         
        <div className="lg:col-span-7 speaker-border">
             <img src={JBLSpeaker} alt=""  className="w-full h-auto rounded-lg object-cover" />
        </div>
        </div>
        

      
    </div>
  )
}

export default Speaker
