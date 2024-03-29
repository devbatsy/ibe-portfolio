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

sydDOM.worSpace = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.postStyle([{method:'remove',style:['background','position']},{method:'add',style:{rowGap:'25px',background:'#fff'}}]),
            class:'postCont'
        },
        [
            sydDOM.postnav1().removeChild(1).replaceChild({position:0,element:sydDOM.postNavText('Featured works')}),
            sydDOM.workTabs('grid.jpg','Single Price Grid Component',['2023','Price Grid'],'The Single Price Grid Component offers a sleek and efficient solution for displaying subscription plans, pricing tiers, or service packages on your website. Designed with simplicity and versatility in mind, this component seamlessly integrates into any webpage layout, providing a clean and modern interface for presenting pricing information to your users.','https://ibeotah.github.io/Single-Price-Grid-Component/'),

            sydDOM.horizon(),

            sydDOM.workTabs('testimonial.jpg','Testimonial Grid Section',['2023','Testimonials'],'This is a Testimonial Grid Section, where the voices of satisfied customers take center stage. This section is designed to showcase authentic testimonials from real users, providing valuable insights into their experiences with our products or services.','https://ibeotah.github.io/Testimonials-Grid-Section/'),

            sydDOM.horizon(),

            sydDOM.workTabs('bank.jpg','EazyBank Landing Page',['2024','Bank Landing Page'],'Welcome to the EazyBanking landing page – your gateway to a streamlined and intuitive banking experience. The design philosophy revolves around simplicity, accessibility, and empowerment, ensuring that managing your finances has never been easier.','https://easybank-landing-page-three-pied.vercel.app/#blog'),

            sydDOM.horizon()

        ]
    )
}

sydDOM.horizon = () =>{
    return createElement(
        'hr',
        {
            style:'height:1px;width:100%;background:lightgrey'
        }
    )
}

sydDOM.workTabs = (image = "rectangle 5.png",boardTitle = 'Board Title',timelineInfo = ['2024','typography'],boardText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum incidunt aliquid expedita quo earum obcaecati animi omnis doloremque iure, tempore tenetur ipsum velit qui, laborum dolorem iste fugiat reprehenderit.',link = '') =>{
    return createElement(
        'div',
        {
            style:'height:fit-content;display:flex;flex-wrap:wrap;column-gap:20px;row-gap:20px;width:100%;align-items:center;',
            class:'workTabs'
        },
        [
            sydDOM.boardImage(`url('./img/${image}')`),
            sydDOM.designPostTabs(boardTitle,['12 Feb 2020','Design pattern'],boardText,link).addAttr({
                style:styleComponent.recent_post_tabs([
                {method:'remove',style:['height','background','padding']},
                {method:'add',style:{maxWidth:'400px'}}
                ])
            })
            .replaceChild({position:1,element:sydDOM.middleWorkTerm(timelineInfo)})
        ]
    )
}
sydDOM.middleWorkTerm = (arrayText) =>{
    return createElement(
        'div',
        {
            style:'display:flex;padding:5px 0;column-gap:20px;align-items:center'
        },
        [
            createElement(
                'p',
                {style:'padding:2px 4px;font-size:14px;border-radius:10px;background:#142850;color:#fff'},
                [
                    arrayText[0]
                ]
            ),
            createElement(
                'p',
                {style:'color:lightgrey'},
                [
                    arrayText[1]
                ]
            ),
        ]
    )
}

sydDOM.boardImage = (image) =>{
    return createElement(
        'div',
        {
            style:styleComponent.bg_style({method:"remove",style:['backgroundColor']})+`background-image:${image};border:2px solid #21243D;height:200px;width:100%;max-width:350px;border-radius:10px`
        }
    )
}