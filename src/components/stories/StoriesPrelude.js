export function StoriesPrelude({openStory}){
	return(
		<div className="stories__inner" id="prelude">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id='chiisanaInochi--story' onClick={openStory("chiisanainochi")}>【小さな<span>生</span>命】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}