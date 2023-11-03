const content= React.createElement("table",{id:"tblContent"},

React.createElement("tbody",{id:"tbodyId"},


[React.createElement("tr",{id:"firstChild"},
React.createElement("td",{},"9516"),React.createElement("td",{},"start")
),
React.createElement("tr",{id:"secoundtChild"},
React.createElement("td",{},"More"),
React.createElement("td",{},"Content")
)])
);

const renderData= ReactDOM.createRoot(document.getElementById("root"));

renderData.render(content);