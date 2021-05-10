import React from 'react'

const Main = () => {
    return (
        <div className="main">
            <h1>
                46,165 properties in Québec
            </h1>
            <div className="search">
                <div className="input-group search-bar">
                    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <datalist id="datalistOptions">
                        <option value="Please enter 3 or more character" />
                    </datalist>
                    <div class="input-group-append">
                        <select className="form-select">
                            <option>For sale</option>
                            <option>For rent</option>
                        </select>
                    </div>
                    <div class="input-group-append">
                        <button className="btn price">Price $</button>
                    </div>
                    <div class="input-group-append">
                        <button className="btn price">Filter</button>
                    </div>
                    <div class="input-group-append">
                        <button className="btn btn-primary"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
