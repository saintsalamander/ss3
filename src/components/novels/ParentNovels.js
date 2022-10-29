import { useState } from 'react';
import { NovelsOratorio } from "./NovelsOratorio"
import { NovelsPrelude } from "./NovelsPrelude"
import { NovelsObserver } from "./NovelsObserver"
import { NovelsNightwitch } from "./NovelsNightwitch"
import { NovelsLullaby } from "./NovelsLullaby"
import { NovelsSerenade } from "./NovelsSerenade"
import { NovelsSonata } from "./NovelsSonata"
import { NovelsRonde } from "./NovelsRonde"
import { NovelsRequiem } from "./NovelsRequiem"
import { NovelsSelect } from "./NovelsSelect"
import { NovelDisplay } from "./NovelDisplay"
import { handleScroll, stop } from '../..';

function ParentNovels(){
	const hash =('novels--oratorio').replace("#","")
	const [id, setId] = useState(hash)
	const [novelId, setNovelId] = useState()
	const openNovel = (novelId) => () => {
		setNovelId(novelId)
		const novelBack = document.getElementById("novelBack")
		novelBack.style.display = "block"
		handleScroll()
	}
	const novelTabs = {
		"novels--oratorio" : <NovelsOratorio openNovel={openNovel}/>,
		"novels--prelude" : <NovelsPrelude openNovel={openNovel}/>,
		"novels--observer" : <NovelsObserver openNovel={openNovel}/>,
		"novels--nightwitch" : <NovelsNightwitch openNovel={openNovel}/>,
		"novels--lullaby" : <NovelsLullaby openNovel={openNovel}/>,
		"novels--serenade" : <NovelsSerenade openNovel={openNovel}/>,
		"novels--sonata" : <NovelsSonata openNovel={openNovel}/>,
		"novels--ronde" : <NovelsRonde openNovel={openNovel}/>,
		"novels--requiem" : <NovelsRequiem openNovel={openNovel}/>
	}
	const close = (novelId) => () => {
		setNovelId(novelId)
		const novelBack = document.getElementById("novelBack")
		novelBack.style.display = "none"
		handleScroll()
	}
	const handleNovelList = () => {
		const modalSelectNovel = document.getElementById("novelSelectBack")
		modalSelectNovel.classList.toggle("selectItem--opened")
		handleScroll()
	}
	return(
		<section
			id='novels'
			className='novels'
		>
			<h2 className="sectionTitle">
				<svg>
                    <use xlinkHref="#novel"></use>
                </svg>
				NOVELS
			</h2>
			<div
				id='novelsTitle'
				className="novels__title select__title"
				onClick={stop}
			>
				<p>贖いのヒカリ →</p>
				<span
					className="bracket--novels"
					onClick={handleNovelList}
				>【</span>
				<p
					className='select__title__display'
					id="novel--selected"
					onClick={handleNovelList}
				><span>聖</span>譚曲</p>
				<span
					className="bracket--novels"
					onClick={handleNovelList}
				>】</span>
				<div
					className='select__title__open'
					id="openNovelSelect"
					onClick={handleNovelList}
				></div>
			</div>
			<NovelsSelect
				setId={setId}
				handleNovelList={handleNovelList}
			/>
			<div className="back">
				{novelTabs[id]}
			</div>
			<div id='novelBack' className='modalBack' onClick={close("")}>
				<NovelDisplay
					novelId={novelId}
					close={close}
				/>
				<div className='closeButtonArea'>
					<button className='closeButton' type='button' onClick={close("")}>閉じる</button>
				</div>
			</div>
		</section>
	)
}

export default ParentNovels