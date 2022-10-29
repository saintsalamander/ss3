import { useState } from "react"
// import ReactDOM from 'react-dom/client';
import { handleScroll } from "../.."
import { StoriesOratorio } from "./StoriesOratorio"
import { StoriesPrelude } from "./StoriesPrelude"
import { StoriesObserver } from "./StoriesObserver"
import { StoriesNightwitch } from "./StoriesNightwitch"
import { StoriesLullaby } from "./StoriesLullaby"
import { StoriesSerenade } from "./StoriesSerenade"
import { StoriesSonata } from "./StoriesSonata"
import { StoriesRonde } from "./StoriesRonde"
import { StoriesRequiem } from "./StoriesRequiem"
import { StoriesSelect } from "./StoriesSelect"
import { StoryDisplay } from "./StoryDisplay"

function ParentStories(){
	const hash = ('stories--oratorio').replace("#","")
	const [id, setId] = useState(hash)
	const [storyId, setStoryId] = useState()
	const openStory = (storyId) => () => {
		setStoryId(storyId)
		const storyBack = document.getElementById("storyBack")
		storyBack.style.display = "block"
		handleScroll()
	}
	const storyTabs = {
		"stories--oratorio" : <StoriesOratorio openStory={openStory}/>,
		"stories--prelude" : <StoriesPrelude openStory={openStory}/>,
		"stories--observer" : <StoriesObserver openStory={openStory}/>,
		"stories--nightwitch" : <StoriesNightwitch openStory={openStory}/>,
		"stories--lullaby" : <StoriesLullaby openStory={openStory}/>,
		"stories--serenade" : <StoriesSerenade openStory={openStory}/>,
		"stories--sonata" : <StoriesSonata openStory={openStory}/>,
		"stories--ronde" : <StoriesRonde openStory={openStory}/>,
		"stories--requiem" : <StoriesRequiem openStory={openStory}/>
	}
	const close = (storyId) => () => {
		setStoryId(storyId)
		const storyBack = document.getElementById("storyBack")
		storyBack.style.display = "none"
		handleScroll()
	}
	const handleStoryList = () => {
		const modalSelectStory = document.getElementById("storySelectBack")
		modalSelectStory.classList.toggle("selectItem--opened")
		handleScroll()
	}
	return(
		<section
			id="stories"
			className="stories"
		>
			<h2 className="sectionTitle">
				<svg>
                    <use xlinkHref="#music"></use>
                </svg>
				STORIES
			</h2>
			<div
				id='storiesTitle'
				className="stories__title select__title"
				onClick={(e) => e.stopPropagation}
			>
				<p>贖いのヒカリ →</p>
				<span
					className="bracket--stories"
					onClick={handleStoryList}
				>【</span>
				<p
					className='select__title__display'
					id="story--selected"
					onClick={handleStoryList}
				><span>聖</span>譚曲</p>
				<span
					className="bracket--stories"
					onClick={handleStoryList}
				>】</span>
				<div
					className='select__title__open'
					id="openStorySelect"
					onClick={handleStoryList}
				></div>
			</div>
			<StoriesSelect
				setId={setId}
				handleStoryList={handleStoryList}
			/>
			<div className="back">
				{storyTabs[id]}
			</div>
			<div id='storyBack' className='modalBack' onClick={close("")}>
				<StoryDisplay
					storyId={storyId}
					close={close}
				/>
			</div>
		</section>
	)
}

export default ParentStories