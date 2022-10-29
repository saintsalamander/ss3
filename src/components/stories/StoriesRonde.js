export function StoriesRonde({openStory}){
	return(
		<div className="stories__inner" id="ronde">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id='funaNoriNoHashira--story' onClick={openStory("funanorinohashira")}>【船乗りの柱】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}