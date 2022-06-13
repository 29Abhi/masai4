async function submitnews(){
    try{
        let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code`

        let res = await fetch(url);
        let data = await res.json();

        return data;
    } catch(err){
        console.log(err);
    }

    function append(news){
        const searchinput = document.getElementById("search_box")
        searchinput.style.display = "blick";

        let input = document.getElementById("");
    }
}