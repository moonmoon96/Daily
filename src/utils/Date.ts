const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    
    return  `${month}월 ${day}일`;
}

const todayDate = getDate();

export default todayDate;