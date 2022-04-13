let data=[{
    color:'blue',
    code:'#76B2F5'
},
{
    color:'red',
    code:'#F54237',
},
{
    color:'yellow',
    code:'#F5DB1C',
},
{
    color:'green',
    code:'#9ADE52',
},
{
    color:'purple',
    code:'#997DF5'
},
{
    color:'orange',
    code:'#F5A560',
}
];

const info = document.querySelector('#info');
let details =data.map(function(){
    return('<div>'+ item.name+ '</div>';
});

info.innerHTML =details.join('/n');
