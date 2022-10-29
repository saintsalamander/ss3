export function StoriesLullaby({openStory}){
	return(
		<div className="stories__inner" id="lullaby">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id='ohayouNoUta--story' onClick={openStory("ohayounouta")}>【揺蕩うの唄】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}