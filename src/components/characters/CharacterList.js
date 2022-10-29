import { useMemo, useState } from "react"
import { body } from "../.."

//CHARACTERS
export function CharacterList({setId}){
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const charactersList = [
	// G1
		{
			name: 'アマランス・ヘイトリッド',
			otherWriting: 'あまらんす・へいとりっど / amaranth hatred',
			belongTo: 'vendetta / ヴェンデッタ / ゔぇんでった',
			id: 'amaranth',
		},
		{
			name: '夢月 美夜',
			otherWriting: 'むづき みよ / muzuki miyo',
			trueName: 'ベル・ソルシエール / べる・そるしえーる / belle sorciere',
			belongTo: '😈',
			id: 'miyo',
		},
		{
			name: '柊 真衣',
			otherWriting: 'ひいらぎ まい / hiiragi mai',
			belongTo: 'vendetta / ヴェンデッタ / ゔぇんでった',
			id: 'mai'
		},
		{
			name: 'クレール・アルザス',
			otherWriting: 'くれーる・あるざす / clair alsace',
			id: 'clair'
		},
	// G2
		{
			name: 'ライラ・ヘイトリッド',
			otherWriting: 'らいら・へいとりっど / lyra hatred',
			belongTo: 'vendetta / ヴェンデッタ / ゔぇんでった / ⚓️',
			id: 'lyra'
		},
		{
			name: 'ノワール・ソルシエール',
			otherWriting: 'のわーる・そるしえーる / noir sorciere',
			belongTo: '😈',
			id: 'noir'
		},
		{
			name: '長月 葬子',
			otherWriting: 'ながつき そうこ / nagatsuki souko',
			trueName: '葉月 真耶 / はづき まや / hazuki maya',
			id: 'souko'
		},
		{
			name: '小鳥遊 希愛',
			otherWriting: 'たかなし のあ / takanashi noa',
			id: 'noa'
		},
	// G3
		{
			name: '八丈 夏音',
			otherWriting: 'はちじょう かのん / hachijo kanon',
			id: 'kanon'
		},
		{
			name: 'モモ・メモリア',
			otherWriting: 'もも・めもりあ / momo memoria',
			belongTo: '𓅮',
			id: 'momo'
		},
		{
			name: 'アカネ',
			otherWriting: 'あかね / akane',
			trueName: '绿 / 緑 孫茜 / リュイ・スンシー / りゅい・すんしー',
			belongTo: 'vendetta / ヴェンデッタ / ゔぇんでった / ⚓️ / 𓅮',
			id: 'akane'
		},
		{
			name: '北巳 虎吉',
			otherWriting: 'きたみ とらきち / kitami torakichi',
			belongTo: '⚓️',
			id: 'torakichi'
		},
	// G4
		{
			name: '八丈 鶇',
			otherWriting: 'はちじょう つぐみ / hachijo tsugumi',
			id: 'tsugumi'
		},
		{
			name: 'ロア・メモリア',
			otherWriting: 'ろあ・めもりあ / lore memoria',
			belongTo: '𓅮',
			id: 'lore'
		},
		{
			name: '戸畑 嬰莉香',
			otherWriting: 'とばた えりか / tobata erika',
			id: 'erika'
		},
	// G5
	]

	const [filterQuery, setFilterQuery] = useState({})

	const filteredList = useMemo(() => {
		const filterName = filterQuery.name
		let tmpList = charactersList
		tmpList = tmpList.filter(row => {
			if(
				filterQuery.name &&
				String(row.name).indexOf(filterName) === -1 &&
				String(row.otherWriting).indexOf(filterName) === -1 &&
				String(row.trueName).indexOf(filterName) === -1 &&
				String(row.belongTo).indexOf(filterName) === -1
			){return false}
			return row
		})
		return tmpList
	}, [charactersList, filterQuery.name])
	
	const handleFilter = e => {
		const {name, value} = e.target
		setFilterQuery({...filterQuery, [name]: value})
	}

	const event = (id) => () => {
		setId(id)
		const profileBack = document.getElementById("profileBack")
		const profile = document.getElementsByClassName("profile")[0]
		body.classList.add("banScroll")
		profileBack.style.display = "block"
		profile.style.display ="flex"
	}
	return(
		<>
			<input
				id='searchCharacters'
				type='text'
				name='name'
				placeholder='キャラクターを検索'
				value={filterQuery.name || ''}
				onChange={handleFilter}
			/>
			<ul>
				{
					filteredList.map((list) => {
						return(
							<li
								className='characters__list'
								key={list.name}
							>
								<a
									href={`#profile--${list.id}`}
									key={list.id}
									id={list.id}
									onClick={event(list.id)}
								>{list.name}</a>
							</li>
						)
					})
				}
			</ul>
		</>
	)
}