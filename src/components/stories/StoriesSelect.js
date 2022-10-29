import { handleTextBug, stop } from "../.."

//STORIES選択
export function StoriesSelect({setId, handleStoryList}){
	const event = (id) => (e) => {
		stop(e)
		setId(id)
		const storySelected = document.getElementById("story--selected")
		handleTextBug(storySelected, e)
		handleStoryList()
	}
	return(
		<div className="selectModal" id="storySelectBack" onClick={handleStoryList}>
			<ul className='selectModal__inner' id="selectStory">
				<li className="stories__list"><a href="#stories--oratorio" onClick={event('stories--oratorio')}><span>聖</span>譚曲</a></li>
				<li className="stories__list"><a href="#stories--prelude" onClick={event('stories--prelude')}>前奏曲</a></li>
				<li className="stories__list"><a href="#stories--observer" onClick={event('stories--observer')}>傍観者</a></li>
				<li className="stories__list"><a href="#stories--nightwitch" onClick={event('stories--nightwitch')}><span>夢</span>魔女</a></li>
				<li className="stories__list"><a href="#stories--lullaby" onClick={event('stories--lullaby')}>子守唄</a></li>
				<li className="stories__list"><a href="#stories--serenade" onClick={event('stories--serenade')}>小<span>夜</span>曲</a></li>
				<li className="stories__list"><a href="#stories--sonata" onClick={event('stories--sonata')}>奏鳴曲</a></li>
				<li className="stories__list"><a href="#stories--ronde" onClick={event('stories--ronde')}>輪舞曲</a></li>
				<li className="stories__list"><a href="#stories--requiem" onClick={event('stories--requiem')}><span>葬</span>送曲</a></li>
			</ul>
		</div>
	)
}