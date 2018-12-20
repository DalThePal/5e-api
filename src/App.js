import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.get = this.get.bind(this);
        this.state = {
            search: 'monsters/259',
            result: null
        }
    }

    get() {
        axios.get(`/api/${this.state.search}`).then(res => {
            let result = JSON.stringify(res.data, null, 4);
            this.setState({ result: result })
        });
    }

    handleChange(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">D&D 5th Edition API</header>
                <div className='content'>
                    <a href='http://www.dnd5eapi.co/' target='_blank'>ORIGINAL API</a>
                    <p className='desc'>
                        Using the JSON files from the original API, I created my own using NODE and EXPRESS and included queries for filtering.
                    </p>
                    <div className='URL'>
                        <div>http://www.5eapi.dallenhoyal.com/api/</div>
                        <input value={this.state.search} onChange={(e) => this.handleChange({ search: e.target.value })} />
                        <div className='button' onClick={() => this.get()}>GET</div>
                    </div>
                    <div className='result'>
                        <pre>
                            {this.state.result}
                        </pre>
                    </div>
                </div>
                <div className='footer'>
                    <div className='info'>
                        <div className='list'>
                            <p>Monster Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>size</li>
                                <li>type</li>
                                <li>alignment</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Spell Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>level</li>
                                <li>school</li>
                                <li>classes</li>
                                <li>subclasses</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Equipment Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>category</li>
                                <li>weapon_range</li>
                                <li>armor_category</li>
                                <li>weapon_category</li>
                                <li>gear_category</li>
                                <li>tool_category</li>
                                <li>vehicle_category</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Class Queries:</p>
                            <ul>
                                <li>name</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Language Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>type</li>
                                <li>typical_speakers</li>
                                <li>script</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Proficiency Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>type</li>
                                <li>class</li>
                                <li>race</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Race Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>size</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Skill Queries:</p>
                            <ul>
                                <li>name</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Subclass Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>flavor</li>
                                <li>class</li>
                            </ul>
                        </div>
                        <div className='list'>
                            <p>Subrace Queries:</p>
                            <ul>
                                <li>name</li>
                                <li>race</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
