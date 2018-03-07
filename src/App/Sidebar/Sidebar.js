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
				percentFilled:95
			},
			{
				name:'Graphic Design',
				percentFilled:88
			},
			{
				name:'UX/UI',
				percentFilled:86
			},

			{
				name:'Backend Development',
				percentFilled:76
			},
			{
				name:'Database Management',
				percentFilled:70
			},
			{
				name:'DevOps',
				percentFilled:54
			},
		];

		const tools = ['React','Node','AWS','PostgreSQL','Webpack','Docker'];
		const languages = ['Javascript','SQL','CSS','Ruby','Java','Go'];

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
						Full-stack developer. Mastery junkie. Truth-seeker.
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
