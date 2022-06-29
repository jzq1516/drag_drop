import React from 'react';
import './index.css';

export default class Login extends React.Component{
	container = React.createRef();
	
	// 添加节点
	add = (event)=>{
		var btn = event.target;
		var parent = btn.parentNode;
		var node = document.createElement("input");
		parent.insertBefore(node,btn);
		node.setAttribute('draggable','true');
	}
	
	// 拖动节点
	learn = (event)=>{
		var input = this.container.current;
		event.target.appendChild(input);
		event.target.className = 'learn';
	}
	
	comp = (event)=>{
		var input = this.container.current;
		event.target.appendChild(input);
		event.target.className = 'comp';
	}
	
	allowDrop = (event)=>{
		event.preventDefault();
	}
	
	render(){
		return (
			<div>
				<div className='box'>
					{/* prepare */}
					<div className='prepare'>
						<span>Prepare to study</span>
						<div>
							<input type='text' ref={this.container}  draggable='true' />
							<span onClick={this.add}>+</span>
						</div>
					</div>
					{/* learning */}
					<div className='learning'>
						<span>Learning....</span>
						<div onDrop={this.learn} onDragOver={this.allowDrop}>
						</div>
					</div>
					{/* complete */}
					<div className='complete'>
						<span>Complete</span>
						<div onDrop={this.comp} onDragOver={this.allowDrop}>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
