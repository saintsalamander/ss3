import { openPart, closePart } from "./NovelsSelect"

export function NovelsOratorio({openNovel}){
	return(
		<>
			<div className="novels__inner" id="oratorio">
				<ul className='novelChapterList chapterList'>
					<li className="novelChapterList__item" id="oratorioNovel--chapter1" onClick={openPart("oratorioNovel--chapter1")}>【<span>生</span>きる意味】</li>
					<li className="novelChapterList__item" id="oratorioNovel--chapter2" onClick={openPart("oratorioNovel--chapter2")}>【天<span>使</span>と<span>死</span>神】</li>
					<li className="novelChapterList__item" id="oratorioNovel--chapter3" onClick={openPart("oratorioNovel--chapter3")}>【<span>聖</span>なる<span>月</span><span>夢</span>】</li>
					<li className="novelChapterList__item" id="oratorioNovel--chapter4" onClick={openPart("oratorioNovel--chapter4")}>【遺<span>し</span>た<span>記憶</span>】</li>
					<li className="novelChapterList__item" id="oratorioNovel--chapter5" onClick={openPart("oratorioNovel--chapter5")}>【真<span>冬</span>の<span>正</span>義】</li>
					<li className="novelChapterList__item" id="oratorioNovel--chapter6" onClick={openPart("oratorioNovel--chapter6")}><span>【幸せな物語】</span></li>
				</ul>
				<ul className='partList oratorioNovel--chapter1 part--hidden'>
					<li className='novelPart' id='oratorio--part1' onClick={openNovel("oratorio--part1")}>第１話　<span>唯</span>一のふたり</li>
					<li className='novelPart' id='oratorio--part2' onClick={openNovel("oratorio--part2")}>第２話　</li>
					<li className='novelPart' id='oratorio--part3' onClick={openNovel("oratorio--part3")}>第３話　</li>
					<li className='novelPart' id='oratorio--part4' onClick={openNovel("oratorio--part4")}>第４話　</li>
				</ul>
				<ul className='partList oratorioNovel--chapter2 part--hidden'>
					<li className='novelPart' id='oratorio--part5' onClick={openNovel("oratorio--part5")}>第５話　</li>
					<li className='novelPart' id='oratorio--part6' onClick={openNovel("oratorio--part6")}>第６話　</li>
					<li className='novelPart' id='oratorio--part7' onClick={openNovel("oratorio--part7")}>第７話　</li>
					<li className='novelPart' id='oratorio--part8' onClick={openNovel("oratorio--part8")}>第８話　</li>
				</ul>
				<ul className='partList oratorioNovel--chapter3 part--hidden'>
					<li className='novelPart' id='oratorio--part9' onClick={openNovel("oratorio--part9")}>第９話　</li>
					<li className='novelPart' id='oratorio--part10' onClick={openNovel("oratorio--part10")}>第１０話　</li>
					<li className='novelPart' id='oratorio--part11' onClick={openNovel("oratorio--part11")}>第１１話　</li>
					<li className='novelPart' id='oratorio--part12' onClick={openNovel("oratorio--part12")}>第１２話　</li>
				</ul>
				<ul className='partList oratorioNovel--chapter4 part--hidden'>
					<li className='novelPart' id='oratorio--part13' onClick={openNovel("oratorio--part13")}>第１３話　</li>
					<li className='novelPart' id='oratorio--part14' onClick={openNovel("oratorio--part14")}>第１４話　</li>
					<li className='novelPart' id='oratorio--part15' onClick={openNovel("oratorio--part15")}>第１５話　</li>
					<li className='novelPart' id='oratorio--part16' onClick={openNovel("oratorio--part16")}>第１６話　</li>
				</ul>
				<ul className='partList oratorioNovel--chapter5 part--hidden'>
					<li className='novelPart' id='oratorio--part17' onClick={openNovel("oratorio--part17")}>第１７話　</li>
					<li className='novelPart' id='oratorio--part18' onClick={openNovel("oratorio--part18")}>第１８話　</li>
					<li className='novelPart' id='oratorio--part19' onClick={openNovel("oratorio--part19")}>第１９話　</li>
					<li className='novelPart' id='oratorio--part20' onClick={openNovel("oratorio--part20")}>第２０話　</li>
				</ul>
				<ul className='partList oratorioNovel--chapter6 part--hidden'>
					<li className='novelPart' id='oratorio--part21' onClick={openNovel("oratorio--part21")}>第２１話　</li>
					<li className='novelPart' id='oratorio--part22' onClick={openNovel("oratorio--part22")}>第２２話　</li>
					<li className='novelPart' id='oratorio--part23' onClick={openNovel("oratorio--part23")}>第２３話　</li>
					<li className='novelPart' id='oratorio--part24' onClick={openNovel("oratorio--part24")}>第２４話　</li>
				</ul>
			</div>
			<button id='novelPartClose' className='part--hidden'onClick={closePart}>＜戻る</button>
		</>
	)
}