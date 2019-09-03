import React from 'react'
import _ from 'lodash'
import { Route } from 'react-router-dom';
import Skill from './Skill/Skill'
import Tool from './Tool/Tool'

const Sidebar = React.createClass({

	getInitialState(){
		return {
		}
	},

	render() {
		const { location, match } = this.props;

		const skills = [
			{
				name:'Frontend Development',
				percentFilled:93
			},
			{
				name:'UX/UI',
				percentFilled:88
			},
			{
				name:'Project Management',
				percentFilled:86
			},
			{
				name:'Graphic Design',
				percentFilled:82
			},
			{
				name:'Backend Development',
				percentFilled:73
			},
			{
				name:'Database Management',
				percentFilled:69
			},
			{
				name:'Blockchain Development',
				percentFilled:54
			},
		];

		const tools = ['React','Node','AWS','GraphQL','PostgreSQL','Apollo','Docker'];
		const languages = ['Javascript','Solidity','SQL','CSS','Typescript','Ruby','Go'];

		const toolList = [];
		_.each( tools, ( tool, i ) => {
			toolList.push(
				<Tool
					key={ tool.name }
					name={ tool }
				/>
			)
		})

		const languageList = [];
		_.each( languages, ( tool, i ) => {
			languageList.push(
				<Tool
					key={ tool.name }
					name={ tool }
				/>
			)
		})

		const skillList = [];
		_.each( skills, ( skill, i ) => {
			skillList.push(
				<Skill
					key={ skill.name }
					position={ i }
					{ ...skill }
				/>
			)
		})

		return (
			<div id="Sidebar">
				<div className="header">
					<img
						className="portrait"
						src="/images/portrait.jpg"
					/>
					<div className="name">
						Lucas Lemos
					</div>
					<div className="description">
						Full-stack blockchain developer. Truth-seeker.
					</div>
				</div>
				<div className="university">
					<img className="logo" src="/images/wharton.svg"/>
					<div className="name">Wharton '11</div>
					<div className="focus">Finance  .  Math</div>
				</div>
				<div className="contact">
					<a href="https://www.github.com/soupchicken" className="icon-github">soupchicken</a>
				</div>
				<div className="skills">
					{ skillList }
				</div>
				<div className="languages">
					{ languageList }
				</div>
				<div className="tools">
					{ toolList }
				</div>
			</div>
		);

	}
});

export default Sidebar
