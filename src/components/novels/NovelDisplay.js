import { stop } from "../..";

export function NovelDisplay(novelId){
	return <embed src={`novels/${novelId}.pdf`} onClick={stop}/>
}