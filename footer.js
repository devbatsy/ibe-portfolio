import { 
	DomType,
	sydDOM,
	setStyle,
	styleComponent,
	mount,
	preState,
	getState,
	createElement 
} from "./sydneyDom.js";

setStyle([
    {
        nameTag:'footerCont',
        style:{
            height:'fit-content',
            width:'100%',
            padding:'10px',
            paddingTop:'150px',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            rowGap:'20px',
        }
    }
])

sydDOM.footerCont = () =>{
    return createElement(
        'div',{
            style:styleComponent.footerCont()
        },
        [
            sydDOM.socialTabs(),
            sydDOM.copyRight()
        ]
    )
}

sydDOM.socialTabs = () =>{
    return createElement(
        'div',
        {
            style:'height:fit-content;width:fit-content;display:flex;column-gap:15px;justify-content:center'
        },
        [
            // sydDOM.icons('fb'),
            // sydDOM.icons('inst'),
            // sydDOM.icons('twit'),
            sydDOM.icons('link','https://www.linkedin.com/in/ibe-otah-009193189/')
        ]
    )
}
sydDOM.icons = (img,link = '#') =>{
    return createElement(
        'div',
        {
            style:styleComponent.bg_style([{method:'remove',style:['backgroundColor']},{method:'add',style:{backgroundImage:`url('./img/${img}.png')`}}])+'height:20px;width:20px;position:relative',
            class:'bounce',
        },
        [
            createElement('a',{style:'height:100%;width:100%;position:absolute',href:link})
        ]
    )
}
sydDOM.copyRight = () =>{
    return createElement(
        'p',
        {
            style:'font-size:12px'
        },
        [
            "Copyright ©2024 All rights reserved"
        ]
    )
}