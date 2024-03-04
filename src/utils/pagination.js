function pagination (currentPage, countriesToShow,countriesPerPage){
   
   const COUNTRIES_BY_PAGE = countriesPerPage
    const slice_end = COUNTRIES_BY_PAGE * currentPage
    const slice_start = slice_end - COUNTRIES_BY_PAGE
  
    const pages =  Math.ceil(countriesToShow.length/COUNTRIES_BY_PAGE)
    


   const countriesByPage = countriesToShow.slice(slice_start,slice_end)
     
    const arrayOfPages = []
    for (let i = 1; i <= pages; i++) {
        arrayOfPages.push(i)
        
    }

    return { 
        countriesByPage,
        arrayOfPages
    }
}

export {pagination}