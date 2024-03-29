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
        nameTag:'postStyle',
        style:{
            height:'fit-content',
            width:'100%',
            background:'#EDF7FA',
            display:'flex',
            rowGap:'15px',
            flexDirection:'column',
            alignItems:'center',
            position:'relative'
        }
    },
    {
        nameTag:'recent_post_tabs',
        style:{
            minHeight:'200px',
            width:'100%',
            minWidth:'250px',
            maxWidth:'400px',
            background:'#fff',
            borderRadius:'10px',
            display:'inherit',
            flexDirection:'column',
            rowGap:'15px',
            padding:'10px',
            paddingTop:'15px',
            paddingBottom:'15px',
            justifyContent:'center'
        }
    }
])

sydDOM.postCont = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.postStyle(),
            class:'postCont'
        },
        [
            sydDOM.wrapPostContent(),
        ]
    )
}
sydDOM.wrapPostContent = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.postStyle({method:'remove',style:['background','width','position']})+'width:fit-content'
        },
        [
            sydDOM.postnav1(),
            sydDOM.postTab(),
            sydDOM.postNavText('View all','#00A8CC','blog','viewBottomText')
        ]
    )
}
sydDOM.postnav1 = () =>{
    return createElement(
        'div',
        {
            style:'width:100%;padding:5px 0;display:flex;',
            id:'postNav'
        },
        [
            sydDOM.postNavText('Recent posts'),
            sydDOM.postNavText('View all','#00A8CC','blog','viewText'),
        ]
    )
}
sydDOM.postNavText = (content,color = 'unset',event = null,id = '') =>{

    return createElement(
        'p',
        {
            style: `color:${color}`,
            onclick:event === null ? '': `${event}()`,
            id:id,
            class:'bounce'
        },
        [
            content
        ]
    )
}
sydDOM.postTab = () =>{
    return createElement(
        'div',
        {
            style:'padding:10px 0;height:fit-content;display:flex;flex-wrap:wrap;column-gap:20px;row-gap:20px;justify-content:center;width:fit-content'
        },
        [
            sydDOM.designPostTabs('Elevating User Experiences: Exploring Responsive Design',['08 Aug 2023','Responsive Design'],`In this blog post, I delve into the importance of responsive design in modern web development. Through examples from my portfolio, I showcase how I've leveraged CSS media queries and flexible layouts to ensure seamless user experiences across devices of all shapes and sizes`),
            sydDOM.designPostTabs('The Power of Performance: Optimizing Websites for Speed',['12 Feb 2024','Optimizing Websites performance'],`Speed is paramount in today's digital landscape, and in this article, I share my strategies for optimizing website performance. From minimizing HTTP requests to implementing lazy loading techniques, I demonstrate how I've fine-tuned the frontend of my projects to deliver lightning-fast load times.`),
        ]
    )
}
sydDOM.designPostTabs = (fContent = 'first content',sContent = ['date','title'],tContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum incidunt aliquid expedita quo earum obcaecati animi omnis doloremque iure, tempore tenetur ipsum velit qui, laborum dolorem iste fugiat reprehenderit.',link = '') =>{
    return createElement(
        'div',
        {
            style:styleComponent.recent_post_tabs()
        },
        [
            createElement(
                'h3',
                {
                    style:'font-weight:700;color:#21243D',
                    class:'sizedText'
                },
                [
                    fContent
                ]
            ),
            sydDOM.middlePostTerm(sContent),
            createElement('p',{style:'max-width:90%;color:#21243D'},[tContent]),
            link.length > 0 ? createElement('a',{style:'max-width:90%;color:#21243D;font-size:13px',href:link,target:'blank'},['Link']) : ''
        ]
    )
}
sydDOM.middlePostTerm = (sContent) =>{
    return createElement(
        'div',
        {
            style:'display:flex;padding:5px 0;column-gap:20px;'
        },
        [
            sContent[0],
            createElement(
                'div',
                {style:'height:100%;background:#000;width:1px;'}
            ),
            sContent[1]
        ]
    )
}