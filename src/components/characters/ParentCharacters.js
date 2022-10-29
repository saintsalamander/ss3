import { useState } from 'react';
import {ProfileAmaranth} from "./profiles/ProfileAmaranth"
import {CharacterList} from "./CharacterList"
import { body } from '../..';

function ParentCharacters(){
	const [id, setId] = useState()
	const profile = {
		"amaranth" : <ProfileAmaranth/>
	}
	const close = (id) => () => {
		setId(id)
		const profileBack = document.getElementById("profileBack")
		body.classList.remove("banScroll")
		profileBack.style.display = "none"
	}
	function stop(e){
		e.stopPropagation()
	}
	function nameDisplay(item){
		if(item){
			const characterName = document.getElementById(item)
			return <h2>{characterName.innerHTML}</h2>
		}
	}
	return(
		<section
			id='characters'
			className='characters'
		>
			<h2 className="sectionTitle">
				<svg>
                    <use xlinkHref="#person"></use>
                </svg>
				CHARACTERS
			</h2>
			<div className="back">
				<CharacterList setId={setId}/>
			</div>
			<div id='profileBack' className='modalBack' onClick={close("")}>
				<div className='profile' onClick={stop}>
					<img src={`assets/images/${id}.jpg`} alt='プロフィール画像'/>
					<div className='profile__text'>
						{nameDisplay(id)}
						{profile[id]}
					</div>
					<div className='closeButtonArea'>
						<button className='closeButton' type='button' onClick={close("")}>閉じる</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ParentCharacters