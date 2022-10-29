export function StoriesSerenade({openStory}){
	return(
		<div className="stories__inner" id="serenade">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id='kakoNoSayo--story' onClick={openStory("kakonosayo")}>【<span>過去</span>の小<span>夜</span>】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}