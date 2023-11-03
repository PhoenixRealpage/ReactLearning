import React from 'react';
import ReactDOM from 'react-dom/client';

const content= React.createElement("table",{id:"tblContent"},

React.createElement("tbody",{id:"tbodyId"},


[React.createElement("tr",{id:"firstChild"},
React.createElement("td",{},"Adel Sudheer Praveen"),React.createElement("td",{},"Phoneix")
),
React.createElement("tr",{id:"secoundtChild"},
React.createElement("td",{},"More"),
React.createElement("td",{},"Content")
)])
);

const renderData= ReactDOM.createRoot(document.getElementById("root"));

renderData.render(content);