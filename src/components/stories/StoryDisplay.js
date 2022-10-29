import { stop } from "../.."

export function StoryDisplay(props){
	if(props.storyId === "nokoshitaomoi"){
		const changeImageFormat = setInterval(function(){
			const storyLyrics = document.getElementById("storyLyrics")
			storyLyrics.src = "assets/images/nokoshitaomoi.png"
			clearInterval(changeImageFormat)
		}, 10)
	}
	return(
		<>
			<audio controls onClick={stop}>
				<source id='storyAudio' src={`assets/audios/${props.storyId}.wav`} type='audio/wav'/>
			</audio>
			<img id='storyLyrics' src={`assets/images/${props.storyId}.jpg`} alt="歌詞" onClick={stop}/>
			<div className='closeButtonArea' onClick={stop}>
				<button className='closeButton' type='button' onClick={props.close("")}>閉じる</button>
			</div>
		</>
	)
}