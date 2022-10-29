// import { body } from ".."

export const News = () => {
    // const stopScroll = () => {
    //     body.style.overflowY ="hidden"
    // }
    // const allowScroll = () => {
    //     body.style.overflowY ="auto"
    // }
    return(
        <section className="news" id="news">
            <h2 className="sectionTitle">
                <svg>
                    <use xlinkHref="#send"></use>
                </svg>
                NEWS
            </h2>
            <div
                className="news__area"
                // onMouseOver={stopScroll}
                // onMouseLeave={allowScroll}
            >
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
                <p><span>2022.86.06</span>今日は6月6日</p>
                <p><span>2022.06.06</span>今日は6月6日</p>
            </div>
        </section>
    )
}