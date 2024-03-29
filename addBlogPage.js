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
        nameTag:'overlayBlog',
        style:{
            height:'100%',
            width:'100%',
            position:'fixed',
            bottom:'0px',
            left:'0px',
            background:'#fff',
            zIndex:'900',
            padding:'10px',
            paddingTop:'80px',
            flexDirection:'column',
            overflow:'scroll',
            transition:'all linear .3s'
        }
    }
])
sydDOM.overlayBlog = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.overlayBlog({method:'add',style:{
                opacity:preState(['overlayBlog','o'],'0'),
                display:preState(['overlayBlog','d'],'none')
            }})
        },
        [
            createElement(
                'h2',
                {
                    style:'font-weight:700;text-decoration:underline',
                    class:'overlay_remove_padding'
                },
                [
                    'Blog'
                ]
            ),
            createElement(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:5px;padding-top:20px;',
                    class:'overlay_remove_padding'
                },
                [
                    sydDOM.designPostTabs('Elevating User Experiences: Exploring Responsive Design',['08 Aug 2023','Responsive Design'],`
                    In this blog post, I delve into the importance of responsive design in modern web development. Through examples from my portfolio, I showcase how I've leveraged CSS media queries and flexible layouts to ensure seamless user experiences across devices of all shapes and sizes
                    `).addAttr({style:styleComponent.recent_post_tabs({method:'remove',style:['padding']})}),
                    sydDOM.horizon(),
                    sydDOM.designPostTabs('The Power of Performance: Optimizing Websites for Speed',['12 Dec 2024','Optimizing Websites performance'],`
                    Speed is paramount in today's digital landscape, and in this article, I share my strategies for optimizing website performance. From minimizing HTTP requests to implementing lazy loading techniques, I demonstrate how I've fine-tuned the frontend of my projects to deliver lightning-fast load times.
                    `).addAttr({style:styleComponent.recent_post_tabs({method:'remove',style:['padding']})}),
                    sydDOM.horizon(),
                    sydDOM.designPostTabs('Mastering the Art of Animation: Bringing Websites to Life',['15 Jan 2024','Lively web Design'],`
                    Animation breathes soul into static interfaces, transforming them into dynamic, engaging experiences. Through case studies from my portfolio, I explore the principles of animation in web design and showcase how I've utilized CSS transitions, transforms, and keyframe animations to add flair and personality to websites.
                    `).addAttr({style:styleComponent.recent_post_tabs({method:'remove',style:['padding']})}),
                    sydDOM.horizon(),
                    sydDOM.designPostTabs('Navigating the Frontend Frontier: A Journey Through JavaScript Frameworks',['03 Feb 2024','Exploring the Concept Of REACTJs'],`
                    JavaScript frameworks have revolutionized frontend development, empowering developers to build complex, interactive web applications with ease. In this blog post, I recount my experiences with popular frameworks such as React, Vue.js, and Angular, highlighting the unique challenges and triumphs encountered along the way
                    `).addAttr({style:styleComponent.recent_post_tabs({method:'remove',style:['padding']})}),
                    sydDOM.horizon(),
                    sydDOM.designPostTabs('Designing with Accessibility in Mind: Creating Inclusive Web Experiences',['10 Feb 2024','Stunning Web Experience'],`
                    Accessibility is not just a buzzword - it's a fundamental aspect of ethical web design. In this article, I discuss the importance of designing with accessibility in mind and share my approaches to ensuring that websites are usable and navigable for all users, regardless of their abilities.
                    `).addAttr({style:styleComponent.recent_post_tabs({method:'remove',style:['padding']})}),
                    sydDOM.horizon(),
                    sydDOM.designPostTabs("From Sketch to Screen: The Frontend Developer's Role in the Design Process",['20 Feb 2024','Efficiently Replicating UI Designs'],`
                    Collaboration between designers and developers is essential for bringing visions to life on the web. Drawing from my experiences working in cross-functional teams, I explore the symbiotic relationship between design and frontend development, highlighting the iterative process of translating design mockups into pixel-perfect interfaces.
                    `).addAttr({style:styleComponent.recent_post_tabs({method:'remove',style:['padding']})}),
                    sydDOM.horizon(),
                    sydDOM.designPostTabs('Embracing the Future: Exploring the Latest Trends in Frontend Development',['02 Mar 2024','Considering Latest Technological Trends In Web Dev'],`
                    The frontend landscape is ever-evolving, with new technologies and trends emerging at a rapid pace. In this blog post, I offer insights into some of the latest advancements in frontend development, from the rise of CSS Grid and Flexbox to the growing popularity of static site generators and Jamstack architecture.
                    `).addAttr({style:styleComponent.recent_post_tabs({method:'remove',style:['padding']})}),
                    sydDOM.horizon(),
                ]
            ),
            sydDOM.footerCont()
        ],
        {
            createState:{
                stateName:'overlayBlog',
                state:{d:'none',o:'0'}
            },
            type:'overlayBlog'
        }
    )
}