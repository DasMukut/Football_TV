import { useState, useEffect } from "react"

import axios from "axios";
// import "../App"

const Content = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        axios({
            method: "GET",
            url: `https://www.scorebat.com/video-api/v3/feed/?token=MzU0NDVfMTY2OTIyNTk2NV8zNWY5NjFiMDU1YmM4MGUzNjIxM2VlZjUxMGYxNTMxM2JkMTk2MDZj`
        }).then(res => {
            // console.log(res.data);
            setData(res.data.response);
        }).catch(error => console.log("Data fetching Error")
        )

    }, [search])

    const ele=data.filter(searchMatch);
    
    function searchMatch(value){
       if (search === "") 
              return value;
        else if (value.title.toLowerCase().includes(search.toLowerCase())) 
              return value;
          }


    return (
        <>
            <div className="searchbar">

                <h2>FOOTBALL TV</h2>

                <div>
                    <h4>Search Matches of Your Favourite Team</h4>

                    <input type="search"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>
            </div>


            <div className="content">

                {/* {data.filter(function(value){
                   
                  if (search === "") 
                        return value;
                    
                  else  if (value.title.toLowerCase().includes(search.toLowerCase())) 
                        return value;
                    }) */}
                   {ele.map((ele) => {
                    return <div className="ele-div" key={ele.title} onClick={() => window.open(ele.matchviewUrl)}>

                        <div className="ele-img back-clr" >
                            <img src={ele.thumbnail} alt="thumbnail" />
                        </div>

                        <div className="ele-heading">
                            <span>{ele.title}</span>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default Content
