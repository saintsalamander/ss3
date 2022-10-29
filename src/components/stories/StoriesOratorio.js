export const StoriesOratorio = ({openStory}) => {
	return(
		<div className="stories__inner" id="oratorio">
			<ul className='storyChapterList chapterList'>
				<li className="storyChapterList__item" id="ikiruImi--story" onClick={openStory("ikiruimi")}>【<span>生</span>きる意味】</li>
				<li className="storyChapterList__item" id="tenshiToshinigami--story" onClick={openStory("tenshitoshinigami")}>【天<span>使</span>と<span>死</span>神】</li>
				<li className="storyChapterList__item" id="seiNaruTsukimu--story" onClick={openStory("seinarutsukimu")}>【<span>聖</span>なる<span>月</span><span>夢</span>】</li>
				<li className="storyChapterList__item" id="nokoshitaomoi--story" onClick={openStory("nokoshitaomoi")}>【遺<span>し</span>た<span>記憶</span>】</li>
				<li className="storyChapterList__item" id="mafuyuNoAku--story" onClick={openStory("mafuyunoaku")}>【真<span>冬</span>の<span>正</span>義】</li>
				<li className="storyChapterList__item" id="shiawaseNasekai--story" onClick={openStory("shiawasenasekai")}><span>【幸せな物語】</span></li>
			</ul>
			<div className="stories__inner__image">
				<img
					className="scrollItem"
					src="assets/images/oratorio_2.jpg"
					alt="ジャケットイメージ"
				/>
			</div>
		</div>
	)
}