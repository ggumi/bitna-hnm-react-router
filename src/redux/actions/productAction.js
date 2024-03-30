function getProducts(keyword){
  // 함수를 리턴
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({type: "GET_PRODUCT_SUCCESS", payload:{ data }})
    console.log('data',data)
    // setProducts(data);
  }
}
export const productAction = { getProducts };
