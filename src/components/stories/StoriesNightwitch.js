export function StoriesNightwitch({openStory}){
	return(
		<div className="stories__inner" id="nightwitch">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id='yumeMajoNiKabane--story' onClick={openStory("yumemajonikabane")}>【<span>夢</span>魔女に<span>屍</span>】</li>
			</ul>
			<div className="stories__inner__image">
				<img src="assets/images/oratorio_2.jpg" alt="ジャケットイメージ"/>
			</div>
		</div>
	)
}