export function StoriesSonata({openStory}){
	return(
		<div className="stories__inner" id="sonata">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" onClick={openStory("kugatsunotori")}>【九牙つの鳥】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}