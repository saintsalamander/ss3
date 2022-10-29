import { handleTextBug, stop } from "../.."

//NOVELS選択
export function NovelsSelect({setId, handleNovelList}){
	const event = (id) => (e) => {
		stop(e)
		setId(id)
		const novelSelected = document.getElementById("novel--selected")
		handleTextBug(novelSelected, e)
		handleNovelList()
	}
	return(
		<div className="selectModal" id="novelSelectBack" onClick={handleNovelList}>
			<ul className='selectModal__inner' id="selectNovel">
				<li className="novels__list"><a href="#novels--oratorio" onClick={event('novels--oratorio')}><span>聖</span>譚曲</a></li>
				<li className="novels__list"><a href="#novels--prelude" onClick={event('novels--prelude')}>前奏曲</a></li>
				<li className="novels__list"><a href="#novels--observer" onClick={event('novels--observer')}>傍観者</a></li>
				<li className="novels__list"><a href="#novels--nightwitch" onClick={event('novels--nightwitch')}><span>夢</span>魔女</a></li>
				<li className="novels__list"><a href="#novels--lullaby" onClick={event('novels--lullaby')}>子守唄</a></li>
				<li className="novels__list"><a href="#novels--serenade" onClick={event('novels--serenade')}>小<span>夜</span>曲</a></li>
				<li className="novels__list"><a href="#novels--sonata" onClick={event('novels--sonata')}>奏鳴曲</a></li>
				<li className="novels__list"><a href="#novels--ronde" onClick={event('novels--ronde')}>輪舞曲</a></li>
				<li className="novels__list"><a href="#novels--requiem" onClick={event('novels--requiem')}><span>葬</span>送曲</a></li>
			</ul>
		</div>
	)
}

const novelChapterListItem = document.getElementsByClassName("novelChapterList__item")
const partList = document.getElementsByClassName("partList")

const handlePart = () => {
	for(var i = 0; i < novelChapterListItem.length; i++){
		novelChapterListItem[i].classList.remove("chapter--clicked")
		partList[i].classList.add("part--hidden")
	}
}

const openPart = (chapterId) => (e) => {
	e.target.closest("ul").classList.add("chapter--hidden")
	handlePart()
	const novelPartClose = document.getElementById("novelPartClose")
	novelPartClose.classList.remove("part--hidden")
	document.getElementById(chapterId).classList.toggle("chapter--clicked")
	document.getElementsByClassName(chapterId)[0].classList.toggle("part--hidden")
}

function closePart(e){
	e.target.previousElementSibling.firstElementChild.classList.remove("chapter--hidden")
	const novelPartClose = document.getElementById("novelPartClose")
	novelPartClose.classList.add("part--hidden")
	handlePart()
}

export { handlePart, openPart, closePart }