import { 
	DomType,
	sydDOM,
	setStyle,
	styleComponent,
	mount,
	preState,
	useState,
	getState,
	createElement,
	virtualDom
} from "./sydneyDom.js";
import {} from './introDesign.js'
import {} from './postDesign.js'
import {} from './work_section.js'
import {} from './footer.js'
import {} from './addBlogPage.js'
import {} from './addWorkPage.js'

setStyle([
	{
		nameTag:'container',
		style:{
			height:'100vh',
			width:'100vw',
			bacgkround:'#fff',
			fontFamily:'ubuntu',
			overflowX:'hidden',
			position:'relative',
			transition:'all linear .3s',
			color:'#21243D'
		}
	},
	{
		nameTag:'nav',
		style:{
			position:'fixed',
			height:'50px',
			width:'100%',
			display:'flex',
			zIndex:'999',
			background:'#fff'
		}
	},
	{
		nameTag:"menu",
		style:{
			height:'fit-content',
			display:"flex",
			rowGap:'20px',
			columnGap:'20px',
			position:'absolute',
			right:'0',
			top:'0',
			width:'fit-content',
			padding:'5px 15px',
			borderTopLeftRadius:'10px',
			borderBottomLeftRadius:'40px',
			zIndex:'100',
			backgroundColor:'#fff',
			transition:'transform linear .3s'
		}
	},
	{
		nameTag:'bg_style',
		style:{
			backgroundPosition:'center',
			backgroundColor:'#EDF7FA',
			backgroundSize:'cover',
			backgroundRepeat:'no-repeat'
		}
	}
])

sydDOM.container = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.container(),
		},
		[
			sydDOM.nav(),
			sydDOM.mainPage(),
			sydDOM.overlayBlog(),
			sydDOM.overlayWork()
		]
	)
}

sydDOM.mainPage = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.container({method:'use',style:['height','width','overflowX','transition']})+`opacity:${preState(['mainPage','o'],'1')}`
		},
		[
			sydDOM.introCont(),
			sydDOM.postCont(),
			sydDOM.worSpace(),
			sydDOM.footerCont(),
		],
		{
			createState:{
				stateName:'mainPage',
				state:{o:'1'}
			},
			type:'mainPage'
		}
	)
}

sydDOM.nav = () =>{
	tog_menu = () =>{
		const Mstate = getState('menu2');
		Mstate.t = '0%';
		useState('menu2',{type:'a',value:Mstate})
	}
	untog_menu = () =>{
		const Mstate = getState('menu2');
		Mstate.t = '100%';
		Mstate.permitClose = false;
		setTimeout(() => {
			useState('menu2',{type:'a',value:Mstate})
		}, 100);
	}
	return createElement(
		'div',
		{
			style:styleComponent.nav()
		},
		[
			sydDOM.menu(),
			sydDOM.menu2(),
			createElement(
				'div',
				{
					style:styleComponent.menu({method:'use',style:['position']})+styleComponent.bg_style({method:'remove',style:['backgroundColor']})+'height:25px;width:25px;right:5px;background-image:url("./img/menu.png");transform:translateY(-50%);top:50%;cursor:pointer;',
					id:'mobile-btn',
				},
				[
					createElement(
						'input',
						{
							id:'toggleInput',
							style:'height:100%;width:100%;cursor:pointer;position:absolute',
							onfocus:'tog_menu()',
							onblur:'untog_menu()'
						},[],{type:'toggleInput'}
					)
				]
			),
			sydDOM.navLoader()
		]
	)
}
sydDOM.navLoader = () =>{
	console.log(preState(['navLoader','w'],'0'))
	return createElement(
		'div',
		{
			style:'position:absolute;bottom:0;height:4px;width:100%;transform:translateY(100%);border-radius:10px;'
		},
		[
			createElement(
				'div',
				{
					style:`position:absolute;height:100%;width:${preState(['navLoader','w'],'0')}%;opacity:${preState(['navLoader','o'],'0')};background:#beecfa;transition:width linear .3s`
				}
			)
		],
		{
			createState:{
				stateName:'navLoader',
				state:{w:'0',o:'0'}
			},
			type:'navLoader'
		}
	)
}
sydDOM.menu = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.menu({method:'remove',style:['display']})+'flex-direction:row;',
			id:"menu"
		},
		[
			sydDOM.createListElement('home'),
			sydDOM.createListElement('works'),
			sydDOM.createListElement('blog'),
			// sydDOM.createListElement('contact'),
		]
	)
}

sydDOM.menu2 = () =>{
	return createElement(
		'div',
		{
			style:styleComponent.menu([{method:'remove',style:['display']},{method:'add',style:{
				flexDirection:'column',padding:'5px 10px 5px 10px',boxShadow:'0 0 2px rgba(0, 0, 0, .3)',transform:`translateX(${preState(['menu2','t'],'100%')})`
			}}]),
			id:"menu2"
		},
		[
			sydDOM.createListElement('home'),
			sydDOM.createListElement('works'),
			sydDOM.createListElement('blog'),
			sydDOM.createListElement('contact'),
		],
		{
			createState:{
				stateName:'menu2',
				state:{t:'100%',permitClose:false}
			},
			type:'menu2'
		}
	)
}

sydDOM.createListElement = (content) =>{
	const loadNav = () =>{
		const Nstate = getState('navLoader');
		Nstate.o = '1';
		Nstate.w = '100';
		useState('navLoader',{type:'a',value:Nstate})
		let timer = setTimeout(() =>{
			const Nstate = getState('navLoader');
			Nstate.o = '0';
			Nstate.w = '0';
		useState('navLoader',{type:'a',value:Nstate})
		clearTimeout(timer)
		},500)
	}
	home = () =>{
		loadNav()
		const Wstate = getState('overlayWork');
		const Bstate = getState('overlayBlog');
		const Mstate = getState('mainPage')
		Mstate.o = '1'
		useState('mainPage', {type:'a',value:Mstate})
		Bstate.o = '0';
		Wstate.o = '0';
		useState('overlayWork',{type:'a',value:Wstate})
		useState('overlayBlog',{type:'a',value:Bstate})
		setTimeout(() =>{
			Wstate.d = 'none';
			Bstate.d = 'none';
			useState('overlayWork',{type:'a',value:Wstate});
			useState('overlayBlog',{type:'a',value:Bstate})
		},300)
	}
	works = () =>{
		loadNav()
		const Wstate = getState('overlayWork');
		const Bstate = getState('overlayBlog');
		const Mstate = getState('mainPage')
		Mstate.o = '0'
		useState('mainPage', {type:'a',value:Mstate})
		Wstate.d = 'flex';
		Bstate.o = '0';
		useState('overlayWork',{type:'a',value:Wstate})
		useState('overlayBlog',{type:'a',value:Bstate})
		setTimeout(() =>{
			Wstate.o = '1';
			useState('overlayWork',{type:'a',value:Wstate})
		},100)
		setTimeout(() =>{
			Bstate.d = 'none';
			useState('overlayBlog',{type:'a',value:Bstate})
		},300)
	}
	blog = () =>{
		loadNav()
		const Wstate = getState('overlayWork');
		const Bstate = getState('overlayBlog');
		const Mstate = getState('mainPage')
		Mstate.o = '0'
		useState('mainPage', {type:'a',value:Mstate})
		Bstate.d = 'flex';
		Wstate.o = '0';
		useState('overlayWork',{type:'a',value:Wstate})
		useState('overlayBlog',{type:'a',value:Bstate})
		setTimeout(() =>{
			Bstate.o = '1';
			useState('overlayBlog',{type:'a',value:Bstate})
		},100)
		setTimeout(() =>{
			Wstate.d = 'none';
			useState('overlayWork',{type:'a',value:Wstate})
		},300)
	}
	contact = () =>{
		loadNav()
		console.log('contact page')
	}
	return createElement(
		'p',
		{
			style:'padding:8px 10px;font-weight:500;text-transform:capitalize;z-index:999',
			class:'hover-list-content bounce',
			onclick:`${content}()`
		},
		[
			content
		]
	)
}
mount(sydDOM.container())