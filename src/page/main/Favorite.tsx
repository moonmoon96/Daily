export default function Favorite() {
    
    return (
        <div className="home-favorite-box ">
            <div className="home-favorite-box-title">
                <span>즐겨찾기</span>
                <img
                    src="https://cdn.dak.gg/maple/images/icon/ico-arrow-right-white.svg"
                    alt="move"
                    loading="lazy"
                />
            </div>
            <div className="home-favorite-box-body">
                <div className="home-favorite-box-body-content">
                    <div className="home-favorite-content-left">
                        <div className="home-favorite-content-left-num">1</div>
                        <a><div>캐릭터 이름</div></a>
                    </div>
                    <span className="home-favorite-content-right">전투력</span>
                </div>
            </div>
        </div>
    )
}