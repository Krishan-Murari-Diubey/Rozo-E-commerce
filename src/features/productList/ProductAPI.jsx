
export function fetchAllProduct() {
  return new Promise(async(resolve) => {
const response = await fetch('http://localhost:8080/Products');
const  data = await response.json()
  resolve({data});
  }

  );
}

export function fetchProductById(id) {
  return new Promise(async(resolve) => {
const response = await fetch(`http://localhost:8080/Products?id=${id}`);
const  data = await response.json()
  resolve({data});
  }

  );
}

export function fetchAllBrand() {
  return new Promise(async(resolve) => {
const response = await fetch('http://localhost:8080/Brand');
const  data = await response.json()
  resolve({data});
  }

  );
}
export function fetchAllCategories() {
  return new Promise(async(resolve) => {
const response = await fetch('http://localhost:8080/Categories');
// console.log()
const  data = await response.json()
  resolve({data});
  }

  );
}

export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category":"smartphone"}
  let queryString = '';
  for(let key in filter){
    const categoryValue = filter[key]
    if(categoryValue.length){
const lastCategory = categoryValue[categoryValue.length-1]
      queryString += `${key}=${lastCategory}&`
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/Products?'+ queryString) 
    const data = await response.json()
    const totalItems = data.items
 resolve({data:{products:data.data,totalItems:totalItems}})
  }
  );
}
