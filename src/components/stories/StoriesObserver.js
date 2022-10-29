export function StoriesObserver({openStory}){
	return(
		<div className="stories__inner" id="observer">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id='sumireSakuToki--story' onClick={openStory("sumiresakutoki")}>【<span>菫</span>咲く季節】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}