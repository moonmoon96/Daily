const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    
    return  `${month}월 ${day}일`;
}

export const todayDate = getDate();

const getYear = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear(); 

    return `${year}/${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}`;
}

export const baseDate = getYear();