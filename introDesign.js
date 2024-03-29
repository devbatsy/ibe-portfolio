import { 
	DomType,
	sydDOM,
	setStyle,
	styleComponent,
	mount,
	preState,
	getState,
    useState,
	createElement 
} from "./sydneyDom.js";

setStyle([
    {
        nameTag:'introStyle',
        style:{
            height:'fit-content',
            width:'100%',
            display:'flex',
            columnGap:'80px',
            rowGap:'50px',
            paddingBottom:'50px'
        }
    },
    {
        nameTag:"intro_page_text_style",
        style:{
            height:'fit-content',
            width:'100%',
            maxWidth:'650px',
            display:'flex',
            flexDirection:'column',
            rowGap:'30px',
            alignItems:'inherit'
        }
    }
])

sydDOM.introCont = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.introStyle(),
            id:'introCont'
        },
        [   
            sydDOM.profileImage(),
            sydDOM.textWriteUP()
        ]
    )
}

sydDOM.profileImage = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.bg_style()+`min-height:150px;min-width:150px;height:150px;width:150px;border-radius:50%;z-index: 25;position:relative`,
            id:'profileBg'
        }
    )
}
sydDOM.textWriteUP = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.intro_page_text_style(),
            id:'textWriteUP'
        },
        [
            sydDOM.h1Text(),
            `Welcome to the showcase of cutting-edge frontend development expertise!
            Dive into a world where creativity meets functionality, and user experience reigns supreme.
            Explore the innovative designs, seamless interactions, and pixel-perfect implementations that defines my commitment to crafting exceptional digital experiences.
            Come, discover the artistry behind every line of code.
            Let's shape the future of the web together!`,
            // sydDOM.resumeBtn()
        ]
    )
}
let localTimer = 0;
let currentID = 0
const call = () =>{
    requestAnimationFrame(call);
    localTimer++
    switch(true)
    {
        case localTimer === 15:
            localTimer = 0;
            const Tstate = getState('h1Text');
            if(getState('mainPage').o === '1')
            switch(true)
            {
                case Tstate.displayText.length < Tstate.actualText[currentID].length:
                    Tstate.displayText += Tstate.actualText[currentID][Tstate.displayText.length];
                    Tstate.endBool = false;
                    Tstate.animateBorder = Tstate.animateBorder === true ? false : true
                    useState('h1Text',{type:'a',value:Tstate})
                break;
                default:
                    switch(Tstate.endBool)
                    {
                        case true:
                            Tstate.displayText = "hi, i am ibe, a frontend";
                            switch(true)
                            {
                                case currentID < 1:
                                    currentID++;
                                break;
                                default:
                                    currentID = 0
                            }
                        break;
                        default:
                            localTimer = -100;
                            Tstate.endBool = true
                    }
                    useState('h1Text',{type:'a',value:Tstate});
            }
    }
}
call()
sydDOM.h1Text = () =>{
    return createElement(
        'h1',
        {
            style:`text-transform:capitalize;font-weight:700;color:#21243D;width:fit-content;`,
            id:'frontH1Text'
        },
        [
            preState(['h1Text','displayText'],"hi, i am ibe, a frontend"),
            createElement(
                'p',
                {style:'font-size:100px;font-weight:900;display:inline;line-height:0px'},
                ['.']
            )
        ],
        {
            createState:{
                stateName:'h1Text',
                state:{actualText:["hi, i am ibe, a frontend developer...","hi, i am ibe, a frontend designer..."],displayText:"hi, i am ibe, a frontend",endBool:false,animateBorder:true}
            },
            type:'h1Text'
        }
    )
}
sydDOM.resumeBtn = () =>{
    downloadResume = () =>{
        console.log('downloading resume...')
    }
    return createElement(
        'div',
        {
            style:'padding:10px 15px;background:#FF6464;color:#fff;text-transform:capitalize;max-width:fit-content;font-weight:500',
            class:'bounce',
            onclick:'downloadResume()'
        },
        [
            "download resume"
        ]
    )
}