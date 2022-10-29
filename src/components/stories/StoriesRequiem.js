export function StoriesRequiem({openStory}){
	return(
		<div className="stories__inner" id="requiem">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id='hiNiNemuruyuki--story' onClick={openStory("hininemuruyuki")}>【<span>陽</span>に眠る<span>雪</span>】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}