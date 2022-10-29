
export const Hero = () => {
    const showItem = (e) => {
        e.target.style.opacity = "1"
        e.target.style.top = "0"
    }
    return(
        <section className="hero">
            <div className="hero__inner">
                <div className="hero__inner__launch">
                    <img
                        src="assets/images/oratorio_2.jpg"
                        alt="ジャケットイメージ"
                        onLoad={showItem}
                    />
                </div>
                <div
                    className="hero__inner__nav"
                >
                    <div className="text">
                        <p className="text__title">贖いのヒカリ →【<span>聖</span>譚曲】</p>
                        <p className="text__content">気が向いたら発売！</p>
                    </div>
                </div>
            </div>
        </section>
    )
}