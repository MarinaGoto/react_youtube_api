import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/header/navigation';
import Profile from './components/header/profile';
import Logo from './components/header/logo';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import {CSSTransition} from 'react-transition-group';
const API_KEY = 'AIzaSyATtY8n7nNLIJRGo3EuyGoSpBc3xhuS0TI';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [] ,
            selectedVideo: null,
            appearVideoDetail: true,
        };

        this.videoSearch('surfboards');


    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos [0]
            });
        });
    }


    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        const {appearVideoDetail} = this.state;
    return(
        <div className="hero">
            <header className="header">
                <Logo/>
                <Navigation/>
                <Profile/>
            <SearchBar onSearchTermChange={videoSearch}/>
            </header>
            <CSSTransition
                in={appearVideoDetail}
                appear={true}
                timeout={300}
                classNames="fade"
            >
            <VideoDetail video = {this.state.selectedVideo} />
            </CSSTransition>
                <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>

        </div>
     );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));