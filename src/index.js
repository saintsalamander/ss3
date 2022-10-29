import ReactDOM from 'react-dom/client';
import App from './App';

window.onload = function(){

//フォント
function fontStyle(){
	const span = document.getElementsByTagName("span")
	for(var i = 0; i < span.length; i++){
		//STORIES
		if(span[i].innerHTML === "生"){
			// span[i].style.fontFamily = "Yu Kyokasho";
			span[i].style.textShadow = "0 0 5px #08f"
			span[i].style.color = "#08f"
		}else
		if(span[i].innerHTML === "死"){
			//span[i].style.fontFamily = "Yu Kyokasho"
			span[i].style.textShadow = "0 0 5px #7030a0"
			span[i].style.color = "#7030a0"
		}else
		if(span[i].innerHTML === "聖"){
			span[i].style.color = "#08f"
		}else
		if(span[i].innerHTML === "使"){
			span[i].style.color = "#7030a0"
		}else
		if(span[i].innerHTML === "月"){
			span[i].style.color = "#dba400"
			span[i].style.textShadow = "0 0 5px #ffc000"
		}else
		if(span[i].innerHTML === "夢"){
			span[i].style.textShadow = "0 0 5px #53f"
		}else
		if(span[i].innerHTML === "し"){
			span[i].style.color = "#7030a0"
		}else
		if (span[i].innerHTML === "記憶"){
			span[i].style.textShadow = "0 0 5px #ffc000"
		}else
		if(span[i].innerHTML === "冬"){
			span[i].style.textShadow = "0 0 5px #08f"
		}else
		if(span[i].innerHTML === "正"){
			span[i].style.color = "#08f";
		}else
		if(span[i].innerHTML === "【幸せな物語】"){
			span[i].style.textShadow = "0 0 5px #fff000"
		}else
		if(span[i].innerHTML === "屍"){
			span[i].style.textShadow = "0 0 5px #a3f"
		}else
		if(span[i].innerHTML=== "【本来の物語】"){
			span[i].style.textShadow = "0 0 5px #f00"
		}else
		if(span[i].innerHTML === "菫"){
			span[i].style.color = "rgb(135,104,209)"
		}else
		if(span[i].innerHTML === "鶇"){
			span[i].style.color = "rgb(197,150 63)"
		}else
		if(span[i].innerHTML === "伽"){
			span[i].style.color = "rgb(82,161,62)"
		}else
		if(span[i].innerHTML === "苺"){
			span[i].style.color = "rgb(197,63,63)"
		}else
		if(span[i].innerHTML === "唯"){
			span[i].style.textShadow = "0 0 5px #fff000"
		}else
		if(span[i].innerHTML === "愛"){
			span[i].style.color = "rgb(207,90,135)"
		}else
		if(span[i].innerHTML === "過去"){
			span[i].style.color = "#ddd"
			span[i].style.textShadow = "0 0 5px #333"
		}else
		if(span[i].innerHTML === "白"){
			span[i].style.color = "rgb(117, 117, 117)"
			span[i].style.textShadow = "0 0 5px white"
		}else
		if(span[i].innerHTML === "夜"){
			span[i].style.textShadow = "0 0 5px maroon"
			span[i].style.color = "purple"
		}else
		if(span[i].innerHTML === "雨"){
			span[i].style.textShadow = "0 0 5px #1464f4"
		}else
		if(span[i].innerHTML === "未来"){
			span[i].style.textShadow = "0 0 5px #fff000"
		}else
		if(span[i].innerHTML === "葬"){
			span[i].style.textShadow = "0 0 5px #a3f"
		}
	}
}
fontStyle()

// スクロールアニメーション
let objects = []

const scrollItem = document.getElementsByClassName("scrollItem")
for(var i = 0; i < scrollItem.length; i++){
	objects.push(scrollItem[i])
}

objects.forEach((obj) => {
	obj.classList.add("hidden")
	obj.style.transition = ".5s"
})

const triggerBottom = (window.innerHeight / 5) * 4
const scrollAnimation = () => {
	objects.forEach((obj) => {
		const objTop = obj.getBoundingClientRect().top
		if(objTop < triggerBottom){
			obj.classList.remove("hidden")
		}
	})
}
scrollAnimation()
window.addEventListener("scroll", scrollAnimation)

//STORY選択非表示
const stories = document.getElementById("stories")
const selectStory = document.getElementById("selectStory")
stories.addEventListener("click", function(){
	selectStory.classList.remove("selectItem--opened")
})

const back = document.getElementsByClassName("back")
for(i = 0; i < 2; i++){
	new MutationObserver(function(){
		fontStyle()
	})
	.observe(back[i], {childList: true})
}

//表示するNOVELを選択
const novels = document.getElementById("novels")
const selectNovel = document.getElementById("selectNovel")
novels.addEventListener("click", function(){
	selectNovel.classList.remove("selectItem--opened")
})

}

const body = document.getElementsByTagName("body")[0]

const stop = (e) => e.stopPropagation()

const handleScroll = () => body.classList.toggle("banScroll")

const handleTextBug = (selected, e) => {
	if(e.target.innerHTML === "聖"){
		selected.innerHTML = '<span style="color: rgb(0, 136, 255);">聖</span>譚曲'
	}else if(e.target.innerHTML === "夢"){
		selected.innerHTML = '<span style="text-shadow: rgb(85, 51, 255) 0px 0px 5px;">夢</span>魔女'
	}else if(e.target.innerHTML === "夜"){
		selected.innerHTML = '小<span style="text-shadow: maroon 0px 0px 5px; color: purple;">夜</span>曲'
	}else if(e.target.innerHTML === "葬"){
		selected.innerHTML = '<span style="text-shadow: rgb(170, 51, 255) 0px 0px 5px;">葬</span>送曲'
	}else{
		selected.innerHTML = e.target.innerHTML
	}
}

export {body, stop, handleScroll, handleTextBug}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)