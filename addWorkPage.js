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

sydDOM.overlayWork = () => {
    return createElement(
        'div',
        {
            style:styleComponent.overlayBlog([{method:'remove',style:['opacity','display']},{method:'add',style:{
                display:preState(['overlayWork','d'],'none'),
                opacity:preState(['overlayWork','o'],'0')
            }}])
        },
        [
            createElement(
                'h2',
                {
                    style:'font-weight:700;text-decoration:underline',
                    class:'overlay_remove_padding'
                },
                [
                    'Work'
                ]
            ),
            createElement(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:15px;padding-top:20px;',
                    class:'overlay_remove_padding'
                },
                [
                    sydDOM.workTabs('grid.jpg','Single Price Grid Component',['2023','Price Grid'],`
                    The Single Price Grid Component offers a sleek and efficient solution for displaying subscription plans, pricing tiers, or service packages on your website. Designed with simplicity and versatility in mind, this component seamlessly integrates into any webpage layout, providing a clean and modern interface for presenting pricing information to your users.
                    `,'https://ibeotah.github.io/Single-Price-Grid-Component/'),

                    sydDOM.horizon(),

                    sydDOM.workTabs('testimonial.jpg','Testimonial Grid Section',['2023','Testimonials'],`
                    This is a Testimonial Grid Section, where the voices of satisfied customers take center stage. This section is designed to showcase authentic testimonials from real users, providing valuable insights into their experiences with our products or services.
                    `,'https://ibeotah.github.io/Testimonials-Grid-Section/'),

                    sydDOM.horizon(),

                    sydDOM.workTabs('bank.jpg','EazyBank Landing Page',['2024','Bank Landing Page'],`
                    Welcome to the EazyBanking landing page - your gateway to a streamlined and intuitive banking experience. The design philosophy revolves around simplicity, accessibility, and empowerment, ensuring that managing your finances has never been easier.
                    `,'https://easybank-landing-page-three-pied.vercel.app/#blog'),

                    sydDOM.horizon(),
                ]
            ),
            sydDOM.footerCont()
        ],
        {
            createState:{
                stateName:'overlayWork',
                state:{o:'0',d:'none'}
            },
            type:'overlayWork'
        }
    )
}