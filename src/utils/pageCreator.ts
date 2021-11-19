export const createPages = (pages,pagesCount,currentPage) => {
    if(pagesCount > 6) {
        if(currentPage > 3) {
            for (let i = currentPage-3; i <= currentPage + 1; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 5; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}